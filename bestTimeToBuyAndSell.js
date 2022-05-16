/**
 * @param {number[]} prices
 * @return {number}
 * [7,1,5,3,6,4]
 * get first day price and compare
 */
 var maxProfit = function(prices) {
    let currentPrice = prices[0];
    let profit=0;
    for (var i=1; i < prices.length; i++){
        if(currentPrice >prices[i] ){
            currentPrice = prices[i];
            prices[i]=0;
        }else{
            profit = Math.max(prices[i] - currentPrice, profit) 
        }
    }

    return profit;
};

let prices=[7,1,5,3,6,4]
console.log(maxProfit(prices))
