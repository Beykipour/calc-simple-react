import React from 'react';

class Calculator extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0,
        }
    }

    render() {
        return (
            <div className={'c-calculator'}>
                <div className={'c-calculator__display'}></div>
                <div className={'c-calculator__keypad'}></div>
            </div>
        );
    }
}

export default Calculator;