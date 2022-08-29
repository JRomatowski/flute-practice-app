import './Initiate.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Initiate() {

    const [user, setUser] = useState('')

    useEffect(() => {
        // axios.get('http://127.0.0.1:8000/performers')
        axios.get('https://flute-practice-app.herokuapp.com/performers/')
            .then(res => {
                let name = res.data.performers[0].name
                setUser(name)
            })
    }, [])

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
            <div className='initiate-container component-container'>
                <h3 className='user-acknowledge'>Hello {user}!</h3>
                <button id='practice-button' onClick={sessionClick}>Practice!</button><br></br><br></br>
                <button id='history-button' onClick={historyClick}>History</button><br></br><br></br>
                <button id='contact-button-initiate' onClick={contactClick}>Contact</button><br></br><br></br>
                <button id='logout-button' onClick={loginClick}>Log Out</button>
            </div>
        </>
    )
}

export default Initiate