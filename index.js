// Code your solution here

function findMatching(drivers,matchThis) {
    return drivers.filter(driver => driver.toLowerCase() === matchThis.toLowerCase())
}

function fuzzyMatch(drivers, matchThis) {
    return drivers.filter(driver => driver.startsWith(matchThis))
}

function matchName(drivers, matchThis) {
    return drivers.filter(driver => driver.name === matchThis)
}