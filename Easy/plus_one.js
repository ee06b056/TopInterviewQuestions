/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 > 9) {
            digits[i] = 0;
        } else {
            digits[i] = digits[i] + 1;
            carry = 0;
            break;
        }
    }
    if (carry != 0) {
        digits.unshift(carry);
    }
    return digits;
};