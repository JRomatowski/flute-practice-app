import './HistoryStats.css'
import Edit from '../../routes/Edit';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function HistoryStats() {

    const [sessionHistory, setSessionHistory] = useState([])
    const [averageTime, setAverageTime] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
        // axios.get('https://flute-practice-app.herokuapp.com/history/')
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
    },[])
    // Make sure "[sessionHistory]" is above after the comma.  This causes an infinite loop.

    // const deleteOneClick = function(event) {
    //     alert("confirm")
    //     let idToDelete = event.target.getAttribute('id')
    //     // axios.delete(`http://127.0.0.1:8000/history/${idToDelete}`, idToDelete)
    //     axios.delete(`https://flute-practice-app.herokuapp.com/history/${idToDelete}`, idToDelete);
    // }

    const navigate = useNavigate();

    const editClick = function(event) {
        let idToEdit = event.target.getAttribute('id')
        console.log(idToEdit)
        navigate('/Edit', {state: {idToEdit}})
    }

    return(
        <>  
            <h2>Average Time: {averageTime} minutes per session!</h2><br></br>
            <h3>Practice History</h3><br></br>
            <div className='history-list-modify'>
                {sessionHistory.map((historyThing, index) => (
                    <div className='history-span-container' key={index}>
                        <span className='history-span' key={index}>{historyThing.date}: You practiced for {historyThing.length} minutes.</span>
                        <button className='history-delete-button' onClick={editClick} id={historyThing.id}>Edit</button>
                        <span>
                            {/* <button id={historyThing.id}>edit</button> */}

                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HistoryStats