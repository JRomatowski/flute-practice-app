
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    return(
        <>  
            <div className='login-container'> 
                    <h2>Welcome!</h2>
                    <p>Enter in your information below:</p>
                    <div className='login-form-container'>
                        <input type="email" className="email" placeholder="Email" name='email'></input><br></br><br></br>
                        <input type="password" className="password" placeholder="Password" name="password"></input><br></br><br></br>
                        <button id='login-button' onClick={initiateClick}>Login</button>
                    </div><br></br>
                    <p>FluteTracker is a website developed specifically for flutists. After playing flute for almost 25 years, I decided enough is enough and it was time to make a quick, easy, effective, and modern way to track my practice habits. No more losing notebooks!  Whether you have a youth orchestra audition approaching, a high stakes competition, or the opportunity of a lifetime on the horizon, I believe that this app will help you reach your goals!</p>
                    <p>- Joshua Romatowski</p>
        </div>
        </>
    )
}

export default Login