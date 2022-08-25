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
                        <form>Username</form>
                        <form>PW</form>
                        <button onClick={initiateClick}>Login</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login