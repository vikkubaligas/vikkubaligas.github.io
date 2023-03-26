from pydantic import BaseModel
from pydantic.schema import datetime


class MyBaseModel(BaseModel):
    class Config:
        orm_mode = True


class Info(MyBaseModel):
    companyName: str
    kw: int
    is3Phase: bool


class Generator(MyBaseModel):
    id: str  # (20), name='Generator ID', primary_key=True, unique=True)
    companyName: str  # (100), name='Company Name')
    model: str  # (100), name='Model')
    kw: int  # , name='Kw', default=0)
    serialNumber: str  # (100), name='Serial NUmber', unique=True)
    yearOfMnf: int  # , name='Year of Mnf', default=0)

    oilChangeDuration: int  # , name='Oil change Duration (Hours)', default=500)
    hoursRun: int  # , name='Hours Run', default=0)
    prevOilHour: int  # , name='Last oil change (hours)', default=0)

    is3Phase: bool  # , name='3 Phase', default=False)
    inRent: bool  # , default=False)
    inService: bool  # , default=False)
    forMaintenance: bool  # , default=False)

    oilVol: int  # , name='Oil volume (ltr)', default=0)
    beltNumber: str  # (100), name='Belt number')
    fuelFilterNumber: str  # (100), name='Fuel filter number')
    oilFilterNumber: str  # (100), name='Oil filter number')
    airFilterNumber: str  # (100), name='Air filter number')

    batteryCompanyName: str  # (100), name='Battery company')
    batteryCapacity: int  # , name='Capacity Kwh', default=0)
    replaceDurationMonths: int  # , name='Replace After (months)', default=36)
    installationDate: datetime
    batterySerialNumber: str  # (100), name='Battery Serial Number', unique=True)


class Service(MyBaseModel):
    id: int  # , primary_key=True)
    datetime: datetime
    hours: int  # , name='Serviced at (hours)', default=0)
    remarks: str  # (500), name="Remarks")
    changedBelt: bool  # , name='Changed Belt', default=False)
    changedFuelFilter: bool  # , name='Changed Fuel Filter', default=False)
    changedOilFilter: bool  # , name='Changed Oil Filter', default=False)
    changedAirFilter: bool  # , name='Changed Air Filter', default=False)


class Customer(MyBaseModel):
    id: int
    name: str  # (100), name='Customer name')
    company: str  # (100), name='Company')
    contactPerson1: str  # (100), name='Contact primary')
    phone1: str  # (100), name='Phone primary')
    contactPerson2: str  # (100), name='Contact secondary')
    phone2: str  # (100), name='Phone secondary')
    place: str  # (100), name='Place')
    address: str  # (100), name='Address')
    ePending: int
    eReceived: int


class Payment(MyBaseModel):
    id: int  # , primary_key=True)
    amount: int  # , name='Amount paid', default=0)
    datetime: datetime
    mode: str  # (100), name='Mode of payment')
    remarks: str  # (500), name="Remarks")


class Rent(MyBaseModel):
    id: int  # , primary_key=True)
    rentedDatetime: datetime
    hours: int  # , name='Hours run (Renting start)', default=0)
    cost: int  # , name='Cost', default=0)
    site: str  # (100), name='Site (Rent location)')
    days: int  # , name='Days for rent', default=0)

    isComplete: bool  # , name='Completed', default=False)
    returnedDate: datetime
    hoursOnComplete: int  # , name='Hours run (on return)', default=0)

    receivedAmount: int  # , name='Amount received', default=0)
    pendingAmount: int  # , name='Pending amount', default=0)
