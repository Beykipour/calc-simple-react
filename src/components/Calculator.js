import React from 'react';
import CalculatorKeypad from "./CalculatorKeypad";
import CalculatorDisplay from "./CalculatorDisplay";

class Calculator extends React.PureComponent {

    render() {
        return (
            <div className={'c-calculator'}>
                <CalculatorDisplay/>
                <CalculatorKeypad/>
            </div>
        );
    }
}

export default Calculator;