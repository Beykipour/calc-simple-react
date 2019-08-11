/**
 *
 * @param {number} num the number to be rounded
 * @param {number} fractionLength the maximum length of the decimals
 * @returns {number}
 */
export const roundNumber = (num, fractionLength = 12) => {
    return parseFloat(Number(num.toString()).toFixed(fractionLength));
};