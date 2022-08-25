import '../App.css'
import { useNavigate } from 'react-router-dom'

function History() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const contactClick = function() {
        navigate('/Contact')
    }

    const loginClick = function() {
        navigate('/')
    }

    return(
        <>  
            <h3>History Component</h3>
            <div>List of stats for the person logged in</div>
            <p>Practice Session 1: x minutes long</p>
            <button onClick={initiateClick}>Go Home</button><br></br>
            <button onClick={contactClick}>Contact</button><br></br>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default History