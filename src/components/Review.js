import '../App.css'
import { useNavigate } from 'react-router-dom'

function Review() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const deleteClick = function() {
        navigate('/Review')
        // if form empty {
        //     navigate('/Initiate')
        // } else {
        //     return
        // }
    } 

    const historyClick = function() {
        navigate('/History')
    }

    const contactClick = function() {
        navigate('/Contact')
    }

    return(
        <>  
            <div>Review Component</div>
            <div>Summary of session</div>
            <button onClick={initiateClick}>Submit</button>
            <button>Share via Email</button>
            <button>Edit</button>
            <button onClick={deleteClick}>Delete</button>
            <button onClick={historyClick}>History</button>
            <button onClick={contactClick}>Contact</button>
        </>
    )
}

export default Review