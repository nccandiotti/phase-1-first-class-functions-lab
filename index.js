// Code your solution in this file!
"strict";
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (driverArray) {
  return driverArray.slice(0, 2);
};
const returnLastTwoDrivers = function (driverArray) {
  return driverArray.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function (multiplier) {
    return fare * multiplier;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, someFunction) {
  // console.log('DRIVERS', drivers)
  // console.log('FUNC'), func
  return someFunction(arrayOfDrivers);
}
// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
