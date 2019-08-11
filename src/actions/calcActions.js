import {calcActionTypes} from "../constants/actionTypes";

export const updateCurrentNumAction = entry => ({
    type: calcActionTypes.UPDATE_CURRENT_NUM,
    payload: {
        entry
    }
});

export const addAction = () => ({
    type: calcActionTypes.ADD,
    payload: null
});

export const subAction = () => ({
    type: calcActionTypes.SUB,
    payload: null
});

export const calculateAction = () => ({
    type: calcActionTypes.CALCULATE,
    payload: null,
});

export const clearAllAction = () => ({
    type: calcActionTypes.CLEAR_ALL,
    payload: null,
});

export const decimalSetAction = () => ({
    type: calcActionTypes.DECIMAL_SET,
    payload: null,
});

