// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driverZ = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(nameArray, name) {
    const driverArray = [];
    for (const driver of nameArray) {
        if (driver.toLowerCase() === name.toLowerCase()) {
            // console.log(driver)
            driverArray.push(driver)
        }
    }
    return driverArray;
}

function findMatching2(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}


function fuzzyMatch(source, testString) {
    return source.filter(
        (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
}


function matchName(nameArray, name) {
    const driverArray = [];
    nameArray.forEach(element => {
        // console.log(element)
        // console.log(element.name)
        if (element.name === name) {
            driverArray.push(element);
        }
    });
    return driverArray;
};

function matchName2(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
}

//console.log(matchName(driverZ,'Bobby'));
//console.log(findMatching(drivers, 'bobby'));


//Garbage attempt
// length = string.length;
// const letters = string;
// const newCollection = [];

// for (const driver of nameArray) {
//     console.log(driver)
//     for (let index = length-1; index >= 0; index--) {


//         let checker = false;
//         const element = driver[index];
//         console.log(element)
//         console.log(letters[index])
//         if (element === letters[index]) {
//             checker = true;
//         } else {
//             checker = false;
//         }


//     console.log(checker);
//     }
// }

// return newCollection;