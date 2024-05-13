import { useState } from "react";

export default function Answer({ sum, randomNumber }) {
    const [result, setResult] = useState(0)
    const [points, setPoints] = useState(0)


    function getResultValue(e) {
        setResult(e.target.value)
    }
  async function checkResult(e) {
        const input = document.querySelector('input')
        if (Number(result) === sum) {
            setPoints(points + 1)
            randomNumber()
       
        }
     
      else if(Number(result) !==sum){
        setPoints(points - 1)
          randomNumber()
      }

        input.value = ''
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={checkResult}   >
                <input type="number" onChange={getResultValue} name="answer" id="answer" required />
                <button  type="submit"  >Send Result</button>
            </form>
            <h3>Points: {points}</h3>
        </>

    )
}
