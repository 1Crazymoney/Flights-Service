function addRowLockOnFlights(){
    return `Select * from Flights WHERE Flights.id = ${flightId};`
}

module.exports ={
    addRowLockOnFlights
}