
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
                        <button onClick={initiateClick}>Login</button>
                    </div><br></br>
        </div>
        </>
    )
}

export default Login