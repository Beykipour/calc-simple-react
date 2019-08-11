import React from 'react';
import {connect} from 'react-redux';
import {
    addAction,
    subAction,
    updateCurrentNumAction,
    calculateAction,
    clearAllAction,
    decimalSetAction,
} from "../actions/calcActions";
import PropTypes from 'prop-types';

const CalculatorKeypad = props => {

    const {
        addAction,
        subAction,
        updateCurrentNumAction,
        calculateAction,
        clearAllAction,
        decimalSetAction,
    } = props;

    const handleNewEntry = e => updateCurrentNumAction(parseInt(e.target.value));

    return (
        <div className={'c-calculator__keypad'}>

            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"7"}
                    onClick={handleNewEntry}>7
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"8"}
                    onClick={handleNewEntry}>8
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"9"}
                    onClick={handleNewEntry}>9
            </button>
            <button className={"c-calculator__key c-calculator__key--operator"}
                    onClick={addAction}>+
            </button>

            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"4"}
                    onClick={handleNewEntry}>4
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"5"}
                    onClick={handleNewEntry}>5
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"6"}
                    onClick={handleNewEntry}>6
            </button>
            <button className={"c-calculator__key c-calculator__key--operator"}
                    onClick={subAction}>-
            </button>

            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"1"}
                    onClick={handleNewEntry}>1
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"2"}
                    onClick={handleNewEntry}>2
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"3"}
                    onClick={handleNewEntry}>3
            </button>
            <button className={"c-calculator__key c-calculator__key--equal"}
                    onClick={calculateAction}>=
            </button>

            <button className={"c-calculator__key c-calculator__key--ac"}
                    onClick={clearAllAction}>AC
            </button>
            <button className={"c-calculator__key c-calculator__key--num"}
                    value={"0"}
                    onClick={handleNewEntry}>0
            </button>
            <button className={"c-calculator__key c-calculator__key--decimal"}
                    onClick={decimalSetAction}>.
            </button>

        </div>
    );
};

CalculatorKeypad.propTypes = {
    addAction: PropTypes.func,
    subAction: PropTypes.func,
    updateCurrentNumAction: PropTypes.func,
    calculateAction: PropTypes.func,
    clearAllAction: PropTypes.func,
    decimalSetAction: PropTypes.func,
};

export default connect(null, {
    addAction,
    subAction,
    updateCurrentNumAction,
    calculateAction,
    clearAllAction,
    decimalSetAction,
})(CalculatorKeypad);