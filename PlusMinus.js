function plusMinus(arr) {
    
    // Variables
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let zeroNumbers = 0;
    
    // Iterate array
    for (let value of arr) {
        if (value > 0) {
            positiveNumbers += 1;
        } else if (value < 0) {
            negativeNumbers += 1;
        } else {zeroNumbers += 1;}
    }
    
    // Output
    console.log((positiveNumbers/arr.length).toFixed(4));
    console.log((negativeNumbers/arr.length).toFixed(4));
    console.log((zeroNumbers/arr.length).toFixed(4));   
}