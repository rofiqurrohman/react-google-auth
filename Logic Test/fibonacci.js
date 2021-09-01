let arr = [15, 1, 3];

function nearestFibonacci() {
  const sum = arr.reduce(function (sum, number) {
    return sum + number;
  }, 0);

  if (sum == 0) {
    console.log(0);
    return;
  }

  let first = 0,
    second = 1;

  let third = first + second;

  while (third <= sum) {
    first = second;
    second = third;
    third = first + second;
  }

  let ans = Math.abs(third - sum) >= Math.abs(second - sum) ? second : third;

  return ans - sum;
}

console.log(nearestFibonacci());
