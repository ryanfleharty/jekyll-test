// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"],
//     companion: {
//         name:"Velma",
//         type:"Bat",
//         companion: {
//             name:"Tim",
//             type:"Parasite",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//         }
//     }
// }
//
// // for(let i = 0; i < adventurer.belongings.length; i++){
// //     console.log(adventurer.belongings[i]);
// // }
//
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [
//     {
//         title: "Tokyo Story"
//     },
//     {
//         title: "Paul Blart: Mall Cop"
//     },
//     {
//         title: "L'Avventura"
//     }
// ]
//
// console.log(movies[0].title);
//
// for (let i = 0; i < movies.length; i++){
//     console.log(movies[i].title);
// }

// const monster = {
//     name: 'Slimer',
//     age: 6
// }
//
// const someVar = 'name';
//
// console.log(monster[someVar]);
// console.log(monster.name);

// const movie = {
//     title: "L'Avventura",
//     director: "Michelangelo Antonioni",
//     year: 1960
// }
//
// // for (let key in movie){
// //     console.log(movie[key]);
// // }
//
// const keys = Object.keys(movie);
// console.log(keys);
//
// for(let i = 0; i < keys.length; i++){
//     console.log(movie[keys[i]]);
// }

// const foo = {
//     someArray:[1,2,3],
//     someObject: {
//         someProperty: 'oh hai!'
//     },
//     someMethod: () => {
//         console.log('oh hai');
//     }
// }
//
// foo.someMethod();


// const foo = [
//     {
//         someProperty:'wee'
//     },
//     2,
//     3
// ];
//
// console.log(foo[0].someProperty);
//
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"],
// ]
//
// console.log(foo[2][0]);
//
// const foo = [
//     1,
//     'hi',
//     () => {
//         console.log('fun');
//     }
// ];
//
// foo[2]();

// const foo = {
//     someArray: [1,2,3]
// }
//
// // for(let i = 0; i < foo.someArray.length; i++){
// //     console.log(foo.someArray[i]);
// // }
//
// for (let element of foo.someArray) {
//     console.log(element);
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"],
// ]
//
// // for (let row of foo) {
// //     for (let element of row) {
// //         console.log(element);
// //     }
// // }
// //
//
// for( let i = 0; i < foo.length; i++){
//     for(let j = 0; j < foo[i].length; j++ ){
//         console.log(foo[i][j]);
//     }
// }

// const foo = () => {
//     return {
//         someProperty: 'hi!'
//     }
// }
//
// console.log(foo().someProperty);


// const foo = () => {
//     return ['apple', 'banana', 'pear'];
// }
//
// console.log(foo()[1]);


// const foo = () => {
//     return {
//         someArray: ['fun', 'awesome', 'sweet']
//     }
// }
//
// console.log(foo().someArray[1]);


// const foo = () => {
//     return {
//         someObject: {
//             someProperty: 'some value'
//         }
//     }
// }
//
//
// console.log(foo().someObject.someProperty);


// const foo = () => {
//     return {
//         someMethod: () => {
//             console.log('oh hai!');
//         }
//     }
// }
//
// foo().someMethod();

// const foo = () => {
//     return () => {
//         console.log('whaaa?!?!');
//     }
// }
//
// foo()();

// const foo = {
//     someMethod: () => {
//         return {
//             someProperty: 'some value',
//             someArray: ['peach', 'apple', 'pear'],
//             someObject: {
//                 someProperty: 'some value'
//             },
//             someMethod:() => {
//                 console.log('second some method');
//             }
//         }
//     }
// }
//
// foo.someMethod().someMethod();

// const foo = {
//     someMethod: () => {
//         return () => {
//             console.log('hi');
//         }
//     }
// }
//
// console.log(foo.someMethod()());
// // foo.someMethod()();


// const foo = [
//     1,
//     'apple',
//     () => {
//         return {
//             someProperty: 'some value'
//         }
//     }
// ];
//
// console.log(foo[2]().someProperty);

// const foo = [
//     1,
//     'apple',
//     () => {
//         return {
//             someArray: ['cat', 'dog', 'baboon'],
//             someObject: {
//                 someProperty: 'some value'
//             },
//             someMethod:() => {
//                 console.log('fun');
//             }
//         }
//     }
// ];
//
// console.log(foo[2]().someMethod());

const foo = [
    1,
    'apple',
    () => {
        return () => {
            console.log('yes!');
        }
    }
];

foo[2]()();
