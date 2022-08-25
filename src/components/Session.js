import '../App.css'
import { useNavigate } from 'react-router-dom'

function Session() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }
  
    const reviewClick = function(event) {
        event.preventDefault()
        console.log("Info will be submitted here")
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
            <h3>Session Component</h3>

            <form onSubmit={reviewClick}>
                <div>Length of session?</div><br></br>
                <input type='number'/><br></br><br></br>
                <button type="submit" onClick={reviewClick}>Review</button>
            </form><br></br><br></br>

            <button onClick={initiateClick}>Back</button><br></br>
            <button onClick={contactClick}>Contact</button><br></br>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default Session