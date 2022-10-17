import './History.css'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { useEffect, useState } from 'react';
import Chart1 from '../../components/Chart1';
import HistoryStats from '../../components/HistoryStats/HistoryStats';

function History() {

    // const [user, setUser] = useState('')

    // useEffect(() => {
    //     // axios.get('http://127.0.0.1:8000/performers')
    //     axios.get('https://flute-practice-app.herokuapp.com/performers/')
    //         .then(res => {
    //             let name = res.data.performers[0].name
    //             setUser(name)
    //         })
    // }, [])

    const navigate = useNavigate();

    const initiateClick = function() {
        navigate('/Initiate')
    }

    const contactClick = function() {
        navigate('/Contact')
    }

    const loginClick = function() {
        navigate('/')
    }

    return(
        <>  
            <div className='component-container'>
                <button id='home-button-history-top' onClick={initiateClick}>Go Home</button><br></br>
                {/* <h3 className='user-acknowledge'>Stats for {user}</h3> */}
                <h3 className='user-acknowledge'>Stats</h3>
                <Chart1 /><br></br>
                <HistoryStats /><br></br>
                <button id='home-button' onClick={initiateClick}>Go Home</button>
                {/* <button id='logout-button' onClick={loginClick}>Log Out</button><br></br> */}
                <button id='logout-button' onClick={loginClick}>Exit</button><br></br>
                <button id='contact-button' onClick={contactClick}>Contact</button>
            </div>
        </>
    )
}

export default History