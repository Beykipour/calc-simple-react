import {calcActionTypes} from '../constants/actionTypes';
import {operations} from "../constants/operations";

const initialState = {
    lastResult: 0,
    current: 0,
    lastOperation: '',
    isDecimal: false,
};


export default (state = initialState, action) => {

    const {type, payload} = action;
    const {lastOperation, lastResult, current, isDecimal} = state;

    const applyOperation = () => !!lastOperation ? operations[lastOperation](lastResult, current) : current;

    switch (type) {

        case calcActionTypes.ADD:
            return {
                ...state,
                lastResult: applyOperation(),
                lastOperation: calcActionTypes.ADD,
                current: 0,
                isDecimal: false,
            };

        case calcActionTypes.SUB:
            return {
                ...state,
                lastResult: applyOperation(),
                lastOperation: calcActionTypes.SUB,
                current: 0,
                isDecimal: false,
            };

        case calcActionTypes.CALCULATE:
            return {
                ...initialState,
                isDecimal: !!lastOperation ? false : isDecimal,
                current: applyOperation(),
            };

        case calcActionTypes.UPDATE_CURRENT_NUM: {
            if (!isDecimal) {
                return {
                    ...state,
                    current: current * 10 + payload.entry
                };
            } else {

                const integer = current.toString().split('.')[0];
                const fraction = current.toString().includes('.') ? current.toString().split('.')[1] : '';

                return {
                    ...state,
                    current:
                        parseInt(`${integer}${fraction}${payload.entry}`, 10) / Math.pow(10, fraction.toString().length + 1),
                };
            }
        }

        case calcActionTypes.DECIMAL_SET:
            return {
                ...state,
                isDecimal: true,
            };

        case calcActionTypes.CLEAR_ALL:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}