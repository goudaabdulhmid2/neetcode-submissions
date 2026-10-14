class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxmaProfit = 0;
        for(let i =0; i < prices.length; i++){
            for(let j= i+1; j<prices.length; j++){
                if((prices[j] - prices[i]) > 0){
                    maxmaProfit = Math.max(maxmaProfit, (prices[j] - prices[i]))
                }
            }
        }

        return maxmaProfit
    }
}
