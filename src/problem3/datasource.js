// your code here:
const endpoint = "https://static.ngnrs.io/test/prices";

function Price(buy, sell, id, pair, timestamp) {
  this.id = String(id);
  this.buy = Number(buy);
  this.sell = Number(sell);
  this.pair = String(pair);
  this.timestamp = String(timestamp);
  this.mid = function() {
    return (this.buy + this.sell) / 2
  },
  this.quote = function() {
    return this.pair.slice(3,6);
  }
}

const ds = {
  getPrices: fetch(endpoint)
    .then((response) => {
      // The API call was successful!
      return response.json();
    }).then((data) => {
      // This is the JSON from our response
      const prices = data.data.prices.map((p) => new Price(p.buy, p.sell, p.id, p.pair, p.timestamp));
      return prices;
    }).catch((err) => {
      // There was an error
      console.warn('Something went wrong.', err);
    })
};

/**
 *  Example usage
 * ================
 * 
 * To get all the prices:
 * 
 * ds.getPrices().then((prices) => {
 *  // Do what you want with prices
 *  ...
 *  // Use the Price object individual methods:
 *  prices.forEach((price) => {
 *    // Get the midpoint between Buy and Sell
 *    price.mid();
 *    // Get the quote symbol
 *    price.quote();
 *  })
 * })
 * 
 */
