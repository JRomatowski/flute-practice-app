import '../App.css'
import { useNavigate } from 'react-router-dom'

function Review() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const sessionClick = function() {
        navigate('/Session')
    }

    const deleteClick = function() {
        navigate('/Review')
        // if form empty {
        //     navigate('/Initiate')
        // } else {
        //     return
        // }
    } 

    return(
        <>  
            <h3>Review Component</h3>
            <div className='review-container'>
                <h4>Summary of Session</h4>
                <p>Length:</p>
                <button onClick={initiateClick}>Submit/Home</button><br></br><br></br>
                <button>Share via Email</button><br></br><br></br>
                <button onClick={sessionClick}>Edit</button><br></br><br></br>
                <button onClick={deleteClick}>Delete</button>
            </div>
        </>
    )
}

export default Review