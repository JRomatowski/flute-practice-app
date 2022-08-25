import '../App.css'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const navigate = useNavigate();

    const historyClick = function() {
        navigate('/History')
    }

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const loginClick = function() {
        navigate('/')
    }

    return(
        <>  
            <div>Contact Component</div>
            <div>Contact Form Here</div>
            <button>Submit Contact</button>
            <button onClick={historyClick}>History</button>
            <button onClick={initiateClick}>Home</button>
            <button onClick={loginClick}>Logout</button>
        </>
    )
}

export default Contact