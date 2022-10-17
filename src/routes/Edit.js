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
        // axios.get(`http://127.0.0.1:8000/history/${idToEdit}`)
        axios.get(`https://flute-practice-app.herokuapp.com/history/${idToEdit}`)
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
        if (window.confirm("Are you sure you want to update this entry?")) {
            let newLengthArray = formState
            let newLengthAmount = newLengthArray.length
            // axios.patch(`http://127.0.0.1:8000/history/edit/${idToEdit}/${newLengthAmount}/`)
            axios.patch(`https://flute-practice-app.herokuapp.com/history/edit/${idToEdit}/${newLengthAmount}/`)
            alert(`Updated to ${newLengthAmount} Minutes!`)
            navigate('/History')
        } 
    }

    const deleteClick = function() {
        if (window.confirm("Are you sure you want to delete this entry?  You cannot undo this.")) {
        // axios.delete(`http://127.0.0.1:8000/history/${idToEdit}/`)
        axios.delete(`https://flute-practice-app.herokuapp.com/history/${idToEdit}/`);
        alert("This entry is now permanently gone!")
        navigate('/History')
        } 
    
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
                <button onClick={editClick}>Update</button><br></br><br></br>
                <button onClick={deleteClick}>Delete</button><br></br><br></br>     
                <button onClick={historyClick}>Return to History</button>
            </div>
        </>
    )
}

export default Edit