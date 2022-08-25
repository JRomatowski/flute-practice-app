import '../App.css'
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
            <div>Contact Component</div>
            <h1 className="contact">Contact Us!</h1>
            <div className='contact-container'>
                <input type="text" className="name" placeholder="Name" name='name'></input><br></br><br></br>
                <input type="email" className="email" placeholder="Email" name='email'></input><br></br><br></br>
                <textarea className="message" placeholder="Your Message" type="text" rows="10" name="comments, questions?"></textarea><br></br>
                <button type='submit' className="send">Send</button>
            </div><br></br>
            <button onClick={initiateClick}>Home</button>
            <button onClick={loginClick}>Logout</button>
        </>
    )
}

export default Contact