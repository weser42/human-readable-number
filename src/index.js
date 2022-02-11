module.exports = function toReadable(number) {
    let correct = number.toString().split("");
    let a = correct[0];
    let b = correct[1];
    let c = correct[2];
    let total = [];
    let one = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let two = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let three = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (correct.length == 1) {
        total = one[a];
    } else if (correct.length == 2) {
        if (correct[0] == 1 && correct[1] == 0) {
            total = two[b];
        } else if (correct[0] == 1 && correct[1] !== 0) {
            total = two[b];
        } else if (correct[0] !== 1 && correct[1] == 0) {
            total = three[a - 1];
        } else if (correct[0] !== 1 && correct[1] !== 0)
            total = `${three[a - 1]} ${one[b]}`;
    } else if (correct.length == 3) {
        if (correct[1] == 0 && correct[2] == 0) {
            total = `${one[a]} hundred`;
        } else if (correct[1] == 0 && correct[2] !== 0) {
            total = `${one[a]} hundred ${one[c]}`;
        } else if (correct[1] == 1) {
            total = `${one[a]} hundred ${two[c]}`;
        } else if (correct[2] == 0) {
            total = `${one[a]} hundred ${three[b - 1]}`;
        } else if (correct[1] !== 0 && correct[2] !== 0) {
            total = `${one[a]} hundred ${three[b - 1]} ${one[c]}`;
        }
    }
    return total;
};
