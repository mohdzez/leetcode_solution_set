var checkval = (s) => {
    switch (s) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
        default:
            return 0
    }
}

var romanToInt = function(s) {
    let as = s.split('')

    let total = 0

    for(let i = 0; i < as.length; i++){
        if(checkval(as[i]) < checkval(as[i + 1])){
            total += checkval(as[i + 1]) - checkval(as[i])
            i++;
        }
        else{
            total += checkval(as[i])
        }
    }

    return total
};