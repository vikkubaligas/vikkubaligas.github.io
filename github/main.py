from typing import List
from fastapi import FastAPI, status, HTTPException, Depends
from sqlalchemy import bindparam, String, select

from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session
import models
import schemas
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.sql import text

Base.metadata.create_all(engine)
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()


################################################################################################
################################################################################################
# Generator APIs
def get_id_begin(company_name: str, kw, is_3_phase):
    company_name = company_name.strip()
    if len(company_name) < 3: return ""
    if company_name.find(" ") >= 0:
        names = company_name.split(" ")
        names = [name for name in names if len(name) > 1]
        if len(names) < 2:
            gid = company_name[:2]
        else:
            gid = names[0][0] + names[1][0]
    else:
        gid = company_name[:2]
    gid = gid.upper()
    gid += "T" if is_3_phase else "S"
    gid += f"{kw:03}"
    return gid


def get_id_count(company_name: str, kw, is_3_phase, session):
    stmt = select(models.Generator.id) \
        .where(models.Generator.companyName.startswith(company_name)) \
        .where(models.Generator.kw == kw) \
        .where(models.Generator.is3Phase == is_3_phase)
    return len(session.execute(stmt).all())


def get_serial_count(serial_number, session):
    stmt = select(models.Generator.id) \
        .where(models.Generator.serialNumber == serial_number)
    return len(session.execute(stmt).all())


def get_battery_serial_count(serial_number, session):
    stmt = select(models.Generator.id) \
        .where(models.Generator.batterySerialNumber == serial_number)
    return len(session.execute(stmt).all())


def get_gen_id_full(company_name: str, kw, is_3_phase, session):
    gid = get_id_begin(company_name, kw, is_3_phase)
    count = get_id_count(company_name, kw, is_3_phase, session)
    gen_id = f"{gid}M{(count + 1):03}"
    stmt = select(models.Generator.id).where(models.Generator.id == gen_id)
    while len(session.execute(stmt).all()) > 0:
        count += 1
        gen_id = f"{gid}M{(count + 1):03}"
        stmt = select(models.Generator.id).where(models.Generator.id == gen_id)
    return gen_id


@app.post("/generators/id", response_model=str)
async def get_gen_id(info: schemas.Info, session: Session = Depends(get_session)):
    return get_gen_id_full(info.companyName, info.kw, info.is3Phase, session)


@app.post("/generators", status_code=status.HTTP_201_CREATED)
async def create_generator(generator_new: schemas.Generator, session: Session = Depends(get_session)):
    generator = models.Generator()
    update_data = generator_new.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(generator, key, value)
    generator.id = get_gen_id_full(generator.companyName, generator.kw, generator.is3Phase, session)
    if get_serial_count(generator.serialNumber, session) > 0:
        return {"error": "Battery Serial number already exists"}
    if get_battery_serial_count(generator.batterySerialNumber, session) > 0:
        return {"error": "Generator Serial number already exists"}
    session.add(generator)
    session.commit()
    session.refresh(generator)
    return generator


@app.get("/generators", response_model=List[schemas.Generator])
async def read_generator_list(session: Session = Depends(get_session)):
    todo_list = session.query(models.Generator).all()
    return todo_list


@app.put("/generators/{id}")
async def update_generator(id: str, generator_update: schemas.Generator, session: Session = Depends(get_session)):
    generator = session.query(models.Generator).get(id)
    if generator:
        update_id = generator.is3Phase != generator_update.is3Phase
        update_id = generator.kw != generator_update.kw if not update_id else True
        update_id = generator.companyName != generator_update.companyName if not update_id else True
        update_id = len(id) < 10 if not update_id else True
        update_data = generator_update.dict(exclude_unset=True)
        if generator_update.serialNumber != generator.serialNumber:
            if get_serial_count(generator.serialNumber, session) > 0:
                return {"error": "GeneratorSerial number already exists"}
        if generator_update.batterySerialNumber != generator.batterySerialNumber:
            if get_battery_serial_count(generator.batterySerialNumber, session) > 0:
                return {"error": "Battery Serial number already exists"}
        for key, value in update_data.items():
            if (not update_id) and key == "id":
                continue
            setattr(generator, key, value)
        if update_id:
            generator.id = get_gen_id_full(generator.companyName, generator.kw, generator.is3Phase, session)
        session.commit()
    if not generator:
        raise HTTPException(status_code=404, detail=f"todo item with id {id} not found")

    return generator


@app.delete("/generators/{gen_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_generator(gen_id: str, session: Session = Depends(get_session)):
    generator = session.query(models.Generator).get(gen_id)
    if generator:
        session.delete(generator)
        session.commit()
    else:
        raise HTTPException(status_code=404, detail=f"todo item with id {gen_id} not found")

    return None


################################################################################################
################################################################################################
# Customer APIs
def get_id_of_phone(cust_id, phone, session):
    stmt = select(models.Customer.id) \
        .where(models.Customer.phone1 == phone) \
        .where(models.Customer.id != cust_id)
    count = len(session.execute(stmt).all())
    stmt = select(models.Customer.id) \
        .where(models.Customer.phone2 == phone) \
        .where(models.Customer.id != cust_id)
    return count + len(session.execute(stmt).all())


def get_count_of_phone(phone, session):
    stmt = select(models.Customer.id) \
        .where(models.Customer.phone1 == phone)
    count = len(session.execute(stmt).all())
    stmt = select(models.Customer.id) \
        .where(models.Customer.phone2 == phone)
    return count + len(session.execute(stmt).all())


@app.post("/customers", status_code=status.HTTP_201_CREATED)
async def create_customer(customer_new: schemas.Customer, session: Session = Depends(get_session)):
    customer = models.Customer()
    delattr(customer_new, "id")
    if len(customer_new.phone1) > 0:
        if get_count_of_phone(customer_new.phone1, session) > 0:
            return {"error": "Phone number 1 already exists"}
    if len(customer_new.phone2) > 0:
        if get_count_of_phone(customer_new.phone2, session) > 0:
            return {"error": "Phone number 1 already exists"}
    update_data = customer_new.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(customer, key, value)
    session.add(customer)
    session.commit()
    session.refresh(customer)
    return customer


@app.get("/customers", response_model=List[schemas.Customer])
async def read_customer_list(session: Session = Depends(get_session)):
    todo_list = session.query(models.Customer).all()
    return todo_list


@app.put("/customers/{id}")
async def update_customer(id: str, customer_update: schemas.Customer, session: Session = Depends(get_session)):
    customer = session.query(models.Customer).get(id)
    delattr(customer_update, "id")
    if customer:
        if len(customer_update.phone1) > 0:
            if get_id_of_phone(id, customer_update.phone1, session) > 0:
                return {"error": "Phone number 1 already exists"}
        if len(customer_update.phone2) > 0:
            if get_id_of_phone(id, customer_update.phone2, session) > 0:
                return {"error": "Phone number 1 already exists"}
        update_data = customer_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(customer, key, value)
        session.commit()
    if not customer:
        raise HTTPException(status_code=404, detail=f"todo item with id {id} not found")
    return customer


@app.delete("/customers/{cust_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_customer(cust_id: str, session: Session = Depends(get_session)):
    customer = session.query(models.Customer).get(cust_id)
    if customer:
        session.delete(customer)
        session.commit()
    else:
        raise HTTPException(status_code=404, detail=f"todo item with id {cust_id} not found")

    return None
