import './Session.css'
import { useNavigate } from 'react-router-dom'
import { useState,} from 'react'
import axios from 'axios';

function Session() {

    const initialState = { length: ''}
    const [formState, setFormState] = useState(initialState)
    // eslint-disable-next-line
    const [defaultValue, setDefaultValue] = useState(0)

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const handleChange = function(event) {
        setFormState({length: event.target.value})
        // console.log(formState)
    }

    const reviewClick = function(event) {
        event.preventDefault()
        let newSession = {"practice_sessions": [formState]}
        // axios.post('http://127.0.0.1:8000/history/', newSession)
        axios.post('https://flute-practice-app.herokuapp.com/history/', newSession)
        navigate('/Review')
    }

    return(
        <>  
            <div className = 'component-container'>
                <h3>Input your session!</h3>
                <form onSubmit={reviewClick}>
                    <div>Length of session?</div><br></br>
                    <input type='number' min={defaultValue} onChange={handleChange}/><br></br><br></br>
                    <button id='review-button-session' type="submit">Review</button>
                </form>
                <button id='home-button' onClick={initiateClick}>Back</button><br></br>
            </div>
        </>
    )
}

export default Session