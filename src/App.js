import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
    const [number, setNumber] = useState(null);
    const [accumulator, setAccumulator] = useState(0);
    const [operator, setOperator] = useState(null);
    const [renew, setRenew] = useState(false);

    const inputNumber = (input) => {
        if (!number || number === 0) {
            setNumber(input);
            return;
        }
        if (renew) {
            setAccumulator(number);
            setNumber(input);
            setRenew(false);
            return;
        }
        if (number < 0) {
            setNumber(number * 10 - input);
        } else {
            setNumber(number * 10 + input);
        }
    };

    const hundred = () => {
        setNumber(number * 100);
        if (renew) {
            setNumber(0);
            setRenew(false);
            return;
        }
    };

    const ce = () => {
        setNumber(0);
    };

    const ac = () => {
        setNumber(0);
        setAccumulator(0);
    };

    const off = () => {
        setNumber(null);
    };

    const invert = () => {
        setNumber(-1 * number);
    };

    const del = () => {
        if (number < 0) {
            setNumber(Math.floor((-1 * number) / 10) * -1);
        } else {
            setNumber(Math.floor(number / 10));
        }
    };

    const root = () => {
        setNumber(Math.sqrt(number));
    };

    const calculate = () => {
        if (operator === "+") {
            setNumber(accumulator + number);
        }
        if (operator === "-") {
            setNumber(accumulator - number);
        }
        if (operator === "*") {
            setNumber(accumulator * number);
        }
        if (operator === "/") {
            setNumber(accumulator / number);
        }
    };

    const add = () => {
        if (accumulator) {
            calculate();
        }
        setOperator("+");
        setRenew(true);
    };

    const subtract = () => {
        if (accumulator) {
            calculate();
        }
        setOperator("-");
        setRenew(true);
    };

    const multiply = () => {
        setOperator("*");
        setRenew(true);
    };

    const divide = () => {
        setOperator("/");
        setRenew(true);
    };

    const equals = () => {
        if (operator === "+") {
            setNumber(accumulator + number);
        }
        if (operator === "-") {
            setNumber(accumulator - number);
        }
        if (operator === "*") {
            setNumber(accumulator * number);
        }
        if (operator === "/") {
            setNumber(accumulator / number);
        }
    };

    return (
        <div className="App">
            <div className="Calculator">
                <div className="Border">
                    <div className="Display">
                        {String(number).length > 16
                            ? String(number).slice(0, 16)
                            : number}
                    </div>
                </div>
                <div className="NumberPad">
                    <Button content={"MC"} />
                    <Button content={"MR"} />
                    <Button content={"M-"} />
                    <Button content={"M+"} />
                    <Button content={"OFF"} func={off} />
                    <Button content={"√"} func={root} />
                    <Button content={"GT"} />
                    <Button content={"MU"} />
                    <Button content={"%"} />
                    <Button content={"÷"} func={divide} />
                    <Button content={"▶"} func={del} />
                    <Button content={7} func={inputNumber} />
                    <Button content={8} func={inputNumber} />
                    <Button content={9} func={inputNumber} />
                    <Button content={"×"} func={multiply} />
                    <Button content={"±"} func={invert} />
                    <Button content={4} func={inputNumber} />
                    <Button content={5} func={inputNumber} />
                    <Button content={6} func={inputNumber} />
                    <Button content={"－"} func={subtract} />
                    <Button content={"AC"} func={ac} />
                    <Button content={1} func={inputNumber} />
                    <Button content={2} func={inputNumber} />
                    <Button content={3} func={inputNumber} />
                    <Button content={"＋"} func={add} />
                    <Button content={"CE"} func={ce} />
                    <Button content={0} func={inputNumber} />
                    <Button content={"00"} func={hundred} />
                    <Button content={"·"} />
                    <Button content={"＝"} func={equals} />
                </div>
            </div>
        </div>
    );
}

export default App;
