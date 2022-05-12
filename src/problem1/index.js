var sum_to_n_a = function(n) {
  let sum = 0;
  for(let i = 1; i < n + 1; i++){
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function(n) {
  return [...Array(n).keys()].reduce((prev, val) => {
    prev += val + 1;
    return prev;
  }, 0);
};

var sum_to_n_c = function(n) {
  return (n / 2) * (n + 1);
};

console.log("sum_to_n_a(5) shoud equal to 15: " + (sum_to_n_a(5) === 15));
console.log("sum_to_n_b(5) shoud equal to 15: " + (sum_to_n_b(5) === 15));
console.log("sum_to_n_c(5) shoud equal to 15: " + (sum_to_n_c(5) === 15));