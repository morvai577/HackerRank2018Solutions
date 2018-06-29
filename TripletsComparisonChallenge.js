function solve(a, b) {

    // Fields
    let aScore = 0;
    let bScore = 0;
    
    // 1. Split string into array
    let A = a.split(" ");
    let B = b.split(" ");

    // 2. Objects to represent points
    const A_obj = {
        problemClarity: parseInt(A[0]),
        originality: parseInt(A[1]),
        difficulty: parseInt(A[2])
    };

    const B_obj = {
        problemClarity: parseInt(B[0]),
        originality: parseInt(B[1]),
        difficulty: parseInt(B[2])
    };

    // 3. Comparisons
    if (A_obj.problemClarity > B_obj.problemClarity) {
        aScore++;
    } else if (A_obj.problemClarity < B_obj.problemClarity) {
        bScore++;
    }

    if (A_obj.originality > B_obj.originality) {
        aScore++;
    } else if (A_obj.originality < B_obj.originality) {
        bScore++;
    }

    if (A_obj.difficulty > B_obj.difficulty) {
        aScore++;
    } else if (A_obj.difficulty < B_obj.difficulty) {
        bScore++;
    } 

    // 4. Output
    return [aScore, bScore];

}

function userInputHandling() {
    let a = prompt("Please enter a vale: ");
    let b = prompt("Please enter b value: ");
    console.log(solve(a, b));
}

userInputHandling();