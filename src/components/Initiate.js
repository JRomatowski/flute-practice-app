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
            <button onClick={sessionClick}>Practice!</button><br></br><br></br>
            <button onClick={historyClick}>History</button><br></br><br></br>
            <button onClick={contactClick}>Contact</button><br></br><br></br>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default Initiate