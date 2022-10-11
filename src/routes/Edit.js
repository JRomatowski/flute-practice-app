import { useNavigate, useLocation } from 'react-router-dom'
import '../routes/Login/Login.css'
import { useEffect, useState } from 'react';
import axios from 'axios';




function Edit() {

    const initialState = { length: ''}
    const [formState, setFormState] = useState(initialState)
    // eslint-disable-next-line
    const [defaultValue, setDefaultValue] = useState(0)

    const [dataToEdit, setDataToEdit] = useState('')
    const {state} = useLocation();
    const {idToEdit} = state;

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/history/${idToEdit}`)
        // axios.get(`https://flute-practice-app.herokuapp.com/history/${idToEdit}`)
            .then(res => {
                let data = res.data.practice_sessions
                // console.log(data)
                setDataToEdit(data)
            })
    },[idToEdit])

    const navigate = useNavigate();

    const historyClick = function() {
        navigate('/History')
    }

    const handleChange = function(event) {
        setFormState({length: event.target.value})
        // console.log(formState)
    }

    const editClick = function(event) {
        event.preventDefault()
        let newLength = {"practice_sessions": [formState]}
        console.log(newLength)
        // Need request, session_id, newLength
        axios.patch(`http://127.0.0.1:8000/history/edit/${idToEdit}/`, idToEdit, newLength)
    }

    // console.log(idToEdit)
    // console.log(dataToEdit)

    return(
        <>  
            <div className='component-container'>
                <h2>Edit Component</h2>
                <p>{idToEdit} is the ID being tested</p>
                <h3>Length of Session:</h3>
                <p>Original Length: {dataToEdit} Minutes</p>
                <p>New Length Below:</p>
                <input type='number' min={defaultValue} onChange={handleChange} placeholder={dataToEdit + " Minutes"}/><br></br><br></br>      
                <button onClick={editClick}>Edit</button>     
                <button onClick={historyClick}>Return to History</button>
            </div>
        </>
    )
}

export default Edit