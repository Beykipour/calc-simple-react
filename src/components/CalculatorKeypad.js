import React from 'react';

class CalculatorKeypad extends React.PureComponent {

    render() {
        return (
            <div className={'c-calculator__keypad'}>

                <button className={"c-calculator__key c-calculator__key--num"} value="7">7</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="8">8</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="9">9</button>
                <button className={"c-calculator__key c-calculator__key--operator"} value="+">+</button>

                <button className={"c-calculator__key c-calculator__key--num"} value="4">4</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="5">5</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="6">6</button>
                <button className={"c-calculator__key c-calculator__key--operator"} value="-">-</button>

                <button className={"c-calculator__key c-calculator__key--num"} value="1">1</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="2">2</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="3">3</button>
                <button className={"c-calculator__key c-calculator__key--equal"} value="=">=</button>

                <button className={"c-calculator__key c-calculator__key--ac"} value="ac">AC</button>
                <button className={"c-calculator__key c-calculator__key--num"} value="0">0</button>
                <button className={"c-calculator__key c-calculator__key--decimal"} value=".">.</button>

            </div>
        );
    }
}

export default CalculatorKeypad;