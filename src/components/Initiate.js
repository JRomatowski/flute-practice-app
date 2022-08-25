import '../App.css'
import { useNavigate } from 'react-router-dom'

function Initiate() {

    const navigate = useNavigate();

    const sessionClick = function() {
        navigate('/Session')
    }

    const historyClick = function() {
        navigate('/History')
    }

    const contactClick = function() {
        navigate('/Contact')
    }

    const loginClick = function() {
        navigate('/')
    }

    return(
        <>  
            <div>Initiate Component</div>

            <button onClick={sessionClick}>Practice </button>
            <button onClick={historyClick}>History</button>
            <button onClick={contactClick}>Contact</button>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default Initiate