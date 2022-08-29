import './Contact.css'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const loginClick = function() {
        navigate('/')
    }

    return(
        <>  
            <div className='component-container'>
                <h3>Email me!</h3>
                <form className='contact-form' action="https://formsubmit.co/joshuaromatowski@gmail.com" method="POST" >
                    <input type="text" placeholder="Name" name='name'></input><br></br><br></br>
                    <input type="email" placeholder="Email" name='email'></input><br></br><br></br>
                    <input type="hidden" name="_next" value="http://localhost:3000/Initiate"></input>
                    <textarea placeholder="Your Message" type="text" rows="10" name="comments"></textarea><br></br>
                    <p id='loading-text'>This may take a moment!</p>
                    <button id='send-button' type='submit'>Send</button>

                </form><br></br>
                <button id='home-button' onClick={initiateClick}>Home</button>
                <button id='logout-button' onClick={loginClick}>Logout</button>
            </div>
        </>
    )
}

export default Contact