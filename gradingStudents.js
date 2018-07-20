function gradingStudents(grades) {
    let results = [];

    for (let rawGrade of grades) {
        let finalGrade = new Grade(rawGrade);
        results.push(finalGrade.roundedGrade());
    }

    return results;
}

function Grade(rawGrade) {
    this.rawGrade = rawGrade;
    this.roundedGrade = function() {
        if (this.rawGrade < 38) {
            return this.rawGrade;
        } else {
            const possibleGrade = ((Math.floor(this.rawGrade / 5) + 1) * 5);
            if ((possibleGrade - this.rawGrade) < 3) {
                return possibleGrade;
            } else {
                return this.rawGrade;
            }
        }
    };
}