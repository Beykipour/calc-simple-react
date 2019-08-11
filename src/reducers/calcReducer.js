import {calcActionTypes} from '../constants/actionTypes';

const initialState = {
    num1: 0,
    num2: 0,
    result: 0,
};


export default (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {

        case calcActionTypes.ADD:
            return {
                ...state,
            };

        case calcActionTypes.SUB:
            return {
                ...state,
            };

        default:
            return state;
    }
}