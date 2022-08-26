
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    return(
        <>  
            <div id='home-screen-container'> 
                <section id='home-screen-text'>
                    <h2 id='home-title-text'>Flute Practice App</h2>
                    <div id='blurb'>
                        <p>Enter in your information below:</p>
                        <div className='login-container'>
                            <input type="email" className="email" placeholder="Email" name='email'></input><br></br><br></br>
                            <input type="password" className="password" placeholder="Password" name="password"></input><br></br><br></br>
                            <button onClick={initiateClick}>Login</button>
                        </div><br></br>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Login