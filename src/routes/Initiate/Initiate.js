import './Initiate.css'
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
            <div className='initiate-container'>
                <button id='practice-button' onClick={sessionClick}>Practice!</button><br></br><br></br>
                <button id='history-button' onClick={historyClick}>History</button><br></br><br></br>
                <button id='contact-button-initiate' onClick={contactClick}>Contact</button><br></br><br></br>
                <button id='logout-button' onClick={loginClick}>Log Out</button>
            </div>
        </>
    )
}

export default Initiate