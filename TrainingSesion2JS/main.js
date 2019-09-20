var modularpattern = (function() {
    var sum = 0;

    var add = function() {
        sum = sum + 1;
        return sum;
    }

    var reset = function() {
        return sum = 0;
    }
    return {
        add: function() {
            return add();
        },
        reset: function() {
            return reset();
        }

    }
}());

console.log(modularpattern.add());
console.log(modularpattern.add());
console.log(modularpattern.reset());