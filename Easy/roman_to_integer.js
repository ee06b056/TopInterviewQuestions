/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let c,next,res = 0;
    for (let i = 0; i < s.length; i++) {
        c = s[i]; 
        next = s[i+1];
        switch (c) {
            case 'M':
                res += 1000;
                break;
            case 'D':
                res += 500;
                break;
            case 'C':
                switch (next) {
                    case 'M':
                    case 'D':
                        res -= 100;
                        break
                    default:
                        res += 100;
                }
                break;
            case 'L':
                res += 50;
                break;
            case 'X':
                switch (next) {
                    case 'L':
                    case 'C':
                        res -= 10;
                        break
                    default:
                        res += 10;
                }
                break;
            case 'V':
                res += 5;
                break;
            case 'I':
            console.log(next);
                switch (next) {
                    case 'V':
                    case 'X':
                        res -= 1;
                        break
                    default:
                        res += 1;
                }
                break;
        }
    }
    return res;
};