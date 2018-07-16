function getMaxSum(arr) {

    const inputArr = arr.split(" ").map(Number);

    let highest,n = 0;
    let maxSum = 0;
    let index;

    while(n < 4) {
        highest = Math.max(...inputArr);
        maxSum = maxSum + highest;
        index = inputArr.indexOf(highest);
        inputArr.splice(index, 1);
        n = n + 1;
    }

    return maxSum;

}

function getMinSum(arr) {

    const inputArr = arr.split(" ").map(Number);

    let lowest,n = 0;
    let minSum = 0;
    let index;

    while(n < 4) {
        lowest = Math.min(...inputArr);
        minSum = minSum + lowest;
        index = inputArr.indexOf(lowest);
        inputArr.splice(index, 1);
        n = n + 1;
    }

    return minSum;

}

function miniMaxSum(arr) {

    console.log(getMinSum(arr) + " " + getMaxSum(arr));

}

miniMaxSum("1 2 3 4 5");


