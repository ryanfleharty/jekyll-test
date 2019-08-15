// //call
// const bar = (param1) => {
//     console.log("I'm about to execute a callback");
//     param1();
// }
//
// bar(() => {
//     console.log("I'm the function 'foo'");
// });
//
// bar(() => {
//     console.log("I'm the function 'awesome'");
// });

// setTimeout(
//     () => {
//         console.log('buy me some cake');
//     },
//     3000
// );

// const gru = (minion) => {
//     minion();
// }
//
// gru(() => {
//     console.log('yes master');
// });
// gru(() => {
//     console.log('yippeee');
// });

// const iceCreams = ['Vanilla', "Chocolate", "Strawberry", 'Rocky Road'];

// iceCreams.forEach(
//     (currentArrayElement) => {
//         console.log(currentArrayElement);
//     }
// )
//
// const updatedIceCreams = iceCreams.map(
//     (flavor) => {
//         return flavor + " Ice Cream";
//     }
// );
//
// console.log(updatedIceCreams);
// console.log(iceCreams);

// const originalArray = [2,4,6,8,10];
//
// const newNumArray = originalArray.map(
//     (currentArrayElement) => {
//         return currentArrayElement * 2;
//     }
// );
//
// console.log(newNumArray);

//forEach definition
const forEach = (array, callback) => {
    for (let currentElement of array) {
        callback(currentElement)
    }
}

//invoke forEach
forEach(
    [2,4,6],
    (currentArrayElement) => {
        console.log(currentArrayElement + 1);
    }
);


//map definition
const map = (array, callback) => {
    const newArray = []
    for (let currentElement of array) {
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

const resultArray = map(
    [2,4,6],
    (currentArrayElement) => {
        return currentArrayElement * 2;
    }
)

console.log(resultArray);
