const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
// const prices = [1, 2];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minPrice);
  }
  return profit;
};

console.log(maxProfit(prices));
