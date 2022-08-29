import './Review.css'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Chart1 from '../../components/Chart1'
import HistoryStatsNoModify from '../../components/HistoryStats/HistoryStatsNoModify'

function Review() {

    const [sessionHistory, setSessionHistory] = useState([])


    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/history')
        axios.get('https://flute-practice-app.herokuapp.com/history/')
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
        // axios.delete(`http://127.0.0.1:8000/history/${idToDelete}`, idToDelete)
        axios.delete(`https://flute-practice-app.herokuapp.com/history/${idToDelete}`, idToDelete)
        navigate('/Session')
    }

    const deleteClick = function() {
        let idToDelete = sessionHistory.id
        console.log(idToDelete)
        // axios.delete(`http://127.0.0.1:8000/history/${idToDelete}`, idToDelete)
        axios.delete(`https://flute-practice-app.herokuapp.com/history/${idToDelete}`, idToDelete)
        navigate('/Initiate')
    } 

    return(
        <>  
            <div className='review-container component-container'>
                <h4>Summary of Session</h4>
                <p>Length: {sessionHistory.length} minutes</p>
                <div id='review-button-container'>
                    <button className='buttons-review' id='edit-review' onClick={sessionClick}>Edit</button>
                    <button className='buttons-review' id='submit-review' onClick={initiateClick}>Submit</button>
                    {/* <button>Share via Email</button><br></br><br></br> */}
                    <button className='buttons-review' id='delete-review' onClick={deleteClick}>Delete</button>
                </div>
                <h4>Current Chart</h4>
                <Chart1 /><br></br>
                <HistoryStatsNoModify />
            </div>
        </>
    )
}

export default Review