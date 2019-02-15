/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let c of s) {
        switch (c) {
            case '{':
            case '[':
            case '(':
                stack.push(c);
                break;
            case '}':
                if (stack[stack.length - 1] == '{') {
                    stack.pop();
                    break;
                } else {
                    return false;
                }
            case ']':
                if (stack[stack.length - 1] == '[') {
                    stack.pop();
                    break;
                } else {
                    return false;
                }
            case ')':
                if (stack[stack.length - 1] == '(') {
                    stack.pop();
                    break;
                } else {
                    return false;
                }
            default:
                
        }
    }
    return stack.length == 0;
};