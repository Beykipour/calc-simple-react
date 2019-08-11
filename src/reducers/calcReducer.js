import {calcActionTypes} from '../constants/actionTypes';
import {operations} from "../constants/operations";

const initialState = {
    lastResult: 0,
    current: 0,
    lastOperation: '',
};


export default (state = initialState, action) => {

    const {type, payload} = action;
    const {lastOperation, lastResult, current} = state;

    const applyOperation = () => lastOperation ? operations[lastOperation](lastResult, current) : current;

    switch (type) {

        case calcActionTypes.ADD:
            return {
                ...state,
                // lastResult: lastResult + current,
                lastResult: applyOperation(),
                current: 0,
                lastOperation: calcActionTypes.ADD,
            };

        case calcActionTypes.SUB:
            return {
                ...state,
                lastResult: applyOperation(),
                current: 0,
                lastOperation: calcActionTypes.SUB,
            };

        case calcActionTypes.CALCULATE:
            return {
                ...state,
                lastResult: 0,
                current: applyOperation(),
                lastOperation: '',
            };

        case calcActionTypes.UPDATE_CURRENT_NUM:
            return {
                ...state,
                current: current * 10 + payload.entry,
            };

        case calcActionTypes.CLEAR_ALL:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}