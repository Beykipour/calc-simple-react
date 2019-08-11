import {calcActionTypes} from "./actionTypes";

export const operations = {
    [calcActionTypes.ADD]: (a, b) => a + b,
    [calcActionTypes.SUB]: (a, b) => a - b,
};