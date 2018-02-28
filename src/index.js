module.exports = function check(str, bracketsConfig) {
    str = str.split("");
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (isOpen(str[i])) stack.push(str[i]);
        else {
            if (stack.length === 0) return false;
            var topOfStack = stack.pop();
            if (!matches(topOfStack, str[i])) return false;
        }
    }

    function isOpen(oneOfPar) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === oneOfPar) {
                return true;
            }
        }
        return false;
    }
    function matches(top, closedPar) {
        for (var k = 0; k < bracketsConfig.length; k++) {
            if (top === bracketsConfig[k][0] && closedPar === bracketsConfig[k][1]) {
                return true;
            }
        }
        return false;
    }
    return stack.length === 0 ? true : false;
}
//console.log(check('||', [['|', '|']]));