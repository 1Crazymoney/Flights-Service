function addRowLockOnFlights(flightId){
    return `Select * from Flights WHERE Flights.id = ${flightId};`
}

module.exports ={
    addRowLockOnFlights
}