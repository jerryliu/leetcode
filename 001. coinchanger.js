
function getChange(change, coin, coinMap){
    if(change <= 0 ){
        return 0
    }else{
        var floatingPointPart = (change%coin) ;
        var integerPart = Math.floor(change/coin);
        coinMap[coin] = integerPart;
        return floatingPointPart
    }
}
var coin_changer = function(input, price) { 
    let coinMap={}
    let change =  input -price ;
    if(price<=0) return  "Error: Price must greater than zero.";
    if(input<=0) return  "Error: Input must greater than zero.";
    if(change<0) return  "Error: Input must greater than price.";
    // const table = ne w Array(1+1).fill(100);
    change = getChange(change,10, coinMap)
    change = getChange(change,5, coinMap)
    change = getChange(change,1, coinMap)
    return `1=>${coinMap['1'] ||0}, 5=>${coinMap['5'] || 0}, 10=>${coinMap['10']|| 0}`
};


// 1 => 4, 5 => 1, 10 => 0
// 1 => 1, 5 => 0, 10 => 0
// 1 => 0, 5 => 0, 10 => 0
// 1 => 0, 5 => 1, 10 => 0
// 1 => 4, 5 => 1, 10 => 0
// 1 => 4, 5 => 1, 10 => 2
// Error: Price must greater than zero.
// Error: Input must greater than zero.
// Error: Input must greater than price.

console.log(coin_changer(30, 21))
console.log(coin_changer(16, 15))
console.log(coin_changer(10, 10))
console.log(coin_changer(20, 15))
console.log(coin_changer(30, 21))
console.log(coin_changer(30, 1))
console.log(coin_changer(5, 0))
console.log(coin_changer(0, 5))
console.log(coin_changer(10, 20))
