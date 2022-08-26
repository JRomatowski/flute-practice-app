import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

function HistoryStats() {

    const [sessionHistory, setSessionHistory] = useState([])
    const [averageTime, setAverageTime] = useState('')


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
            .then(res => {
                let data = res.data.practice_sessions

                // Reversing array data to show newest first
                // Not sure why thing needs an arrow => to thing again.  This works though.
                let reversedData = data.map(thing => thing).reverse();
                setSessionHistory(reversedData)
                
                // Finding Average Time Here
                let totalTime = 0
                for (let i=0; i < data.length; i+=1) {
                    totalTime += data[i].length
                }
                let averagePracticeAmountFloat = totalTime / data.length
                let averagePracticeAmountDisplay = averagePracticeAmountFloat.toFixed(1)
                setAverageTime(averagePracticeAmountDisplay)
            })
    }, [])

    return(
        <>  
            <h2>Average Time: {averageTime} minutes per session!</h2><br></br>
            <h3>Practice History (text)</h3><br></br>
            <div className='history-list'>
                {sessionHistory.map((historyThing, index) => (
                    <>
                        <p key={index}>{historyThing.date}: You practiced for {historyThing.length} minutes.</p>
                        <span>
                            <button>edit</button>
                            <button>delete</button>
                        </span>
                    </>
                ))}
            </div>
        </>
    )
}

export default HistoryStats