from sqlalchemy import Column, Integer, String, DateTime
from database import Base


# Define To Do class inheriting from Base
class ToDo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True)
    task = Column(String(256))


class Generator(Base):
    __tablename__ = 'Generator'
    id = Column(String(20),  primary_key=True, unique=True)
    companyName = Column(String(100))
    model = Column(String(100))
    kw = Column(Integer, default=0)
    serialNumber = Column(String(100), unique=True)
    yearOfMnf = Column(Integer,  default=0)

    oilChangeDuration = Column(Integer,  default=500)
    hoursRun = Column(Integer,  default=0)
    prevOilHour = Column(Integer,  default=0)

    is3Phase = Column(Integer,  default=False)
    inRent = Column(Integer, default=False)
    inService = Column(Integer, default=False)
    forMaintenance = Column(Integer, default=False)

    oilVol = Column(Integer,  default=0)
    beltNumber = Column(String(100))
    fuelFilterNumber = Column(String(100))
    oilFilterNumber = Column(String(100))
    airFilterNumber = Column(String(100))

    batteryCompanyName = Column(String(100))
    batteryCapacity = Column(Integer, default=0)
    replaceDurationMonths = Column(Integer, default=36)
    installationDate = Column(DateTime)
    batterySerialNumber = Column(String(100), unique=True)


class Service(Base):
    __tablename__ = 'Service'
    id = Column(Integer, primary_key=True)
    datetime = Column(DateTime)
    hours = Column(Integer,  default=0)
    remarks = Column(String(500))
    changedBelt = Column(Integer, default=False)
    changedFuelFilter = Column(Integer,  default=False)
    changedOilFilter = Column(Integer, default=False)
    changedAirFilter = Column(Integer,  default=False)


class Customer(Base):
    __tablename__ = 'Customer'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    company = Column(String(100))
    contactPerson1 = Column(String(100))
    phone1 = Column(String(100))
    contactPerson2 = Column(String(100))
    phone2 = Column(String(100))
    place = Column(String(100))
    address = Column(String(100))
    eReceived = Column(Integer)
    ePending = Column(Integer)


class Payment(Base):
    __tablename__ = 'Payment'
    id = Column(Integer, primary_key=True)
    amount = Column(Integer, default=0)
    datetime = Column(DateTime)
    mode = Column(String(100))
    remarks = Column(String(500))


class Rent(Base):
    __tablename__ = 'Rent'
    id = Column(Integer, primary_key=True)
    rentedDatetime = Column(DateTime, name='Rented date')
    hours = Column(Integer, name='Hours run (Renting start)', default=0)
    cost = Column(Integer, name='Cost', default=0)
    site = Column(String(100), name='Site (Rent location)')
    days = Column(Integer, name='Days for rent', default=0)

    isComplete = Column(Integer, name='Completed', default=False)
    returnedDate = Column(DateTime, name='Returned date')
    hoursOnComplete = Column(Integer, name='Hours run (on return)', default=0)

    receivedAmount = Column(Integer, name='Amount received', default=0)
    pendingAmount = Column(Integer, name='Pending amount', default=0)
