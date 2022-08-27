import '../App.css'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Chart1 from '../components/Chart1'
import HistoryStatsNoModify from '../components/HistoryStatsNoModify'

function Review() {

    const [sessionHistory, setSessionHistory] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
            .then(res => {
                let data = res.data.practice_sessions
                // Not sure why thing needs an arrow => to thing again.  This works though.
                let reversedData = data.map(thing => thing).reverse();
                setSessionHistory(reversedData[0])
            })
    },[])

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const sessionClick = function() {
        let idToDelete = sessionHistory.id
        console.log(idToDelete)
        axios.delete(`http://127.0.0.1:8000/history/${idToDelete}`, idToDelete)
        navigate('/Session')
    }

    const deleteClick = function() {
        let idToDelete = sessionHistory.id
        console.log(idToDelete)
        axios.delete(`http://127.0.0.1:8000/history/${idToDelete}`, idToDelete)
        navigate('/Initiate')
    } 

    return(
        <>  
            <h3>Review Component</h3>
            <div className='review-container'>
                <h4>Summary of Session</h4>
                <p>Length: {sessionHistory.length} minutes</p>
                <button onClick={initiateClick}>Submit/Return Home</button><br></br><br></br>
                {/* <button>Share via Email</button><br></br><br></br> */}
                <button onClick={sessionClick}>Edit</button><br></br><br></br>
                <button onClick={deleteClick}>Delete/Return Home</button><br></br><br></br>
                <h4>Current Chart</h4>
                <Chart1 /><br></br>
                <HistoryStatsNoModify />
            </div>
        </>
    )
}

export default Review