import { useNavigate, useLocation } from 'react-router-dom'
import '../routes/Login/Login.css'
import { useEffect, useState } from 'react';
import axios from 'axios';




function Edit() {

    // let dataToEdit = ''

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

    // console.log(idToEdit)
    // console.log(dataToEdit)

    return(
        <>  
            <div className='component-container'>
                <h2>Edit Component</h2>
                <p>{idToEdit} is the ID being tested</p>
                <h3>Length of Session:</h3>
                <p>{dataToEdit} Minutes</p>           
                <button onClick={historyClick}>Return to History</button>
            </div>
        </>
    )
}

export default Edit