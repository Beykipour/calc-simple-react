import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CalculatorDisplay = props => {

    const {
        currentNum,
        lastResult,
    } = props;

    return (
        <div className={'c-calculator__display'}>
            {!!lastResult && (
                <div className={'c-calculator__last-result'}>{lastResult}</div>
            )}
            {!!currentNum && currentNum}
        </div>
    );
};

CalculatorDisplay.propTypes = {
    currentNum: PropTypes.number,
    lastResult: PropTypes.number,
};

export default connect(state => ({
    currentNum: state.calc.current,
    lastResult: state.calc.lastResult,
}))(CalculatorDisplay);