export const roundNumber = (num, fractionLength = 12) => {
    return parseFloat(new Number(num.toString()).toFixed(fractionLength));
};