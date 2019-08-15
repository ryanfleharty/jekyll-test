function isEven(num){
    return num % 2 === 0;
}
function countEvens(arr){
    let howManyEvensIHaveSeen = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            howManyEvensIHaveSeen = howManyEvensIHaveSeen + 1;
        }
    }
    return howManyEvensIHaveSeen;
}
console.log(countEvens([2,3,4,5,6,8,8]))