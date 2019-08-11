import {calcActionTypes} from '../constants/actionTypes';
import {operations} from "../constants/operations";

const initialState = {
    lastResult: 0,
    current: 0,
    lastOperation: '',
};


export default (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case calcActionTypes.ADD:
            return {
                ...state,
                // lastResult: state.lastResult + state.current,
                lastResult: state.lastOperation ? operations[state.lastOperation](state.lastResult, state.current) : state.current,
                current: 0,
                lastOperation: calcActionTypes.ADD,
            };

        case calcActionTypes.SUB:
            return {
                ...state,
                lastResult: state.lastOperation ? operations[state.lastOperation](state.lastResult, state.current) : state.current,
                current: 0,
                lastOperation: calcActionTypes.SUB,
            };

        case calcActionTypes.CALCULATE:
            return {
                ...state,
                lastResult: 0,
                current: operations[state.lastOperation](state.lastResult, state.current),
                lastOperation: '',
            };

        case calcActionTypes.UPDATE_CURRENT_NUM:
            return {
                ...state,
                current: state.current * 10 + payload.entry,
            };

        case calcActionTypes.CLEAR_ALL:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}