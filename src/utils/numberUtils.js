export const roundNumber = (num, fractionLength = 12) => {
    return parseFloat(Number(num.toString()).toFixed(fractionLength));
};