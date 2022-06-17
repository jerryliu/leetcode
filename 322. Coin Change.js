/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * Dynamic Programming Bottom Up
 */   
 var coinChange = function(coins, amount) {
    const table  = new Array(amount+1).fill(Infinity);
    table[0]=0;

    for(let coin of coins){
        for(let i=0; i<table.length; i++){
            // 硬幣 要小於 目前要換的錢(i)
            if(coin <= i){
                // 目標 等於=> 要換的錢(i) - 硬幣 (像是two sum) 
                let idx = i-coin;
                let potentialAmt = table[idx] +1;
                // 目前要換的錢 會等於  
                // coin =     4 ↘ (這個1是 table[4])
                //ex: table[7] = 1 + dp[7-4]
                // Math.min 是和上一個一樣的 數比較
                console.log(table[i],potentialAmt,"COMP");

                table[i] =Math.min( table[i], potentialAmt) 
                console.log(table, "table[idx]AFTER");

            }
        }
    }
    
    return table
};
let coins = [1,3,4,5]
let amount = 7

console.log(coinChange(coins, amount)) // 40
// console.log(calcDeliveryFee(pricingModel, 15)) // 65
// console.log(calcDeliveryFee(pricingModel, 50)) // 155




