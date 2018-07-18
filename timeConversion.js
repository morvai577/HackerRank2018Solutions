function timeConversion(input) {
    const hours = parseInt(input.substring(0, input.indexOf(':')));
    const minutes = parseInt(input.substring(input.indexOf(':') + 1, input.lastIndexOf(':')));
    const seconds = parseInt(input.substring(input.lastIndexOf(':') + 1, input.lastIndexOf(':') + 3));
    
    let newHours;
    if(hours === 12) {
        newHours = 0;
    } else {
        newHours = hours;
    }

    let shift;
    if(input.toLowerCase().indexOf('pm') > -1) {
        shift = 12;
    } else {
        shift = 0;
    }

    const formatedHours = format((newHours + shift).toString());
    const formatedMinutes = format(minutes.toString());
    const formatedSeconds = format(seconds.toString());

    return formatedHours + ":" + formatedMinutes + ":" + formatedSeconds;

    function format(numString) {
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }
}

timeConversion('07:05:45PM');