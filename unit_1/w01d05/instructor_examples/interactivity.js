// const foo = (num) => {
//     if(num > 0){
//         console.log(num);
//         foo(num - 1);
//     }
// }
//
// foo(10);

// const greet = () => {
//     alert('Hi!');
// }
//
// const sayBye = () => {
//     alert('Bye!');
// }
//
// const yourAnswer = prompt('Are you arriving or leaving?', 'Arriving/Leaving');
//
// if(yourAnswer == 'Arriving'){
//     greet();
// } else if (yourAnswer === 'Leaving'){
//     sayBye();
// }

// let action = null;
//
// while(action !== 'stop'){
//     action = prompt("What do you want to do?", "Your action");
// }

// const func1 = () => {
//     console.log(1);
//     func2();
//     func3();
//     console.log('finished!');
// }
//
// const func2 = () => {
//     console.log(2);
//     func4();
//     func6();
// }
//
// const func3 = () => {
//     console.log(3);
//     func5();
// }
//
// const func4 = () => {
//     console.log(4);
// }
//
// const func5 = () => {
//     console.log(5);
// }
//
// const func6 = () => {
//     console.log(6);
// }
//
// func1();

let apples;
let money;

const start = () => {
    apples = 0;
    money = 20;
    askForAction();
}

const showStatus = () => {
    alert('You have ' + apples + ' apples and $' + money)
}

const askForAction = () => {
    showStatus();
    const choice = prompt("What do you want to do?", "buy apple / eat apple / restart");
    if(choice === 'buy apple'){
        buyApple();
    } else if(choice === 'eat apple'){
        eatApple();
    } else if (choice === 'restart'){
        start();
    }
}

const buyApple = () => {
    apples++;
    money -=1;
    askForAction();
}

const eatApple = () => {
    apples--;
    askForAction();
}

start();
