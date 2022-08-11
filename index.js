// // Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]];

const returnLastTwoDrivers = function(drivers) {
    const lastIndex = drivers.length - 1;
    return [drivers[lastIndex - 1], drivers[lastIndex]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(n) {
        return num * n;
    };
}

const fare = createFareMultiplier();

const fareDoubler = (fare) => fare * 2;
const fareTripler = (fare) => fare * 3;

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}