import '../App.css'
import { useNavigate } from 'react-router-dom'

function Session() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }
    
    const reviewClick = function() {
        navigate('/Review')
    }

    const contactClick = function() {
        navigate('/Contact')
    }

    const loginClick = function() {
        navigate('/')
    }


    return(
        <>  
            <div>Session Component</div>
            <p>Form to enter in stats</p>
            <button onClick={initiateClick}>Back</button>
            <button onClick={reviewClick}>Review</button>
            <button onClick={contactClick}>Contact</button>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default Session