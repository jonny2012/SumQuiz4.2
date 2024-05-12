import { useState } from "react";

export default function Answer({ sum, randomNumber }) {
    const [result, setResult] = useState(0)
    const [points, setPoints] = useState(0)


    function getResultValue(e) {
        setResult(e.target.value)
    }
    async function checkResult() {

        if (Number(result) === sum) {
            setPoints(points + 1)
        }
        else if (!result) {
            setResult(0)
        }
        else setPoints(points - 1)
    }
    function Validity(e) {
        const input = document.querySelector('input')
        randomNumber()
        e.preventDefault()
        input.value = ''

    }
    return (
        <>
            <form onSubmit={Validity}   >
                <input type="number" onChange={getResultValue} name="answer" id="answer" required />
                <button onClick={checkResult} type="submit"  >Send Result</button>
            </form>
            <h3>Points: {points}</h3>
        </>

    )
}