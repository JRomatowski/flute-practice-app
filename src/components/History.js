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
            <div>History Component</div>
            <p>List of stats for the person logged in</p>
            <button onClick={initiateClick}>Go Home</button>
            <button onClick={contactClick}>Contact</button>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default History