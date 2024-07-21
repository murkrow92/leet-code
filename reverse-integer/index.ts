const MIN_SIGNED_32_BIT_INT = -Math.pow(2, 31);
const MAX_SIGNED_32_BIT_INT = Math.pow(2, 31) - 1;

function reverse(inputNumber: number): number {
    let reversedNumber = 0;
    let number = Math.abs(inputNumber);

    while (number > 0) {
        const digit = number % 10;
        // Early exit if reversing would cause overflow
        if (reversedNumber > (MAX_SIGNED_32_BIT_INT - digit) / 10) {
            return 0;
        }
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    if (inputNumber < 0) {
        reversedNumber = -reversedNumber;
    }

    return reversedNumber;
}