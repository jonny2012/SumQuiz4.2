import { useState } from "react";
import Answer from "./Answer";

function MathQuiz() {
    const [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * (10 - 1) + 1))
    const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (10 - 1) + 1))
    const sum = firstNumber + secondNumber

    async function randomNumber() {
        setFirstNumber(Math.floor(Math.random() * (100 - 1) + 1))
        setSecondNumber(Math.floor(Math.random() * (100 - 1) + 1))
    }
    return (
        <div className="quiz">
            <h2> Sum of 2 numbers</h2>
            <div className="numbers">
                <span >{firstNumber}</span>
                <span>+ </span>
                <span>{secondNumber}</span>
                <span>=</span>
                <Answer randomNumber={randomNumber} sum={sum} />
            </div>
        </div>
    )
}
export default MathQuiz