function birthdayCakeCandles(height) {
    let numberOfCandlesBlowable = 0;
    const highestCandle = Math.max(...height);

    for (let i = 0; i < height.length; i++) { 
        if(height[i] === highestCandle) {
            numberOfCandlesBlowable = numberOfCandlesBlowable + 1;
        }
    }

    return numberOfCandlesBlowable;
    
}

function Cake(noOfCandlesOnCake, height) {
    this.noOfCandlesOnCake = noOfCandlesOnCake;
    this.height = height;
    this.numberOfCandlesBlowable = birthdayCakeCandles(this.height);
}

let cake = new Cake(4, [3, 2, 1, 3]);

console.log(cake.numberOfCandlesBlowable);