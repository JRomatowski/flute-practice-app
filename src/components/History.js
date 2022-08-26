import '../App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Chart1 from './Chart1';


function History() {

    const [sessionHistory, setSessionHistory] = useState([])
    const [user, setUser] = useState('')


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
            .then(res => {
                let data = res.data.practice_sessions
                // Not sure why thing needs an arrow => to thing again.  This works though.
                let reversedData = data.map(thing => thing).reverse();
                setSessionHistory(reversedData)
            })
        axios.get('http://127.0.0.1:8000/performers')
            .then(res => {
                let name = res.data.performers[0].name
                setUser(name)
            })
    }, [])

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

    // console.log(sessionHistory)
    // console.log(user)

    return(
        <>  
            <h3>Stats for {user}</h3>
            <Chart1 />
            <div className='history-list'>
                {sessionHistory.map((historyThing, index) => (
                    <p key={index}>{historyThing.date}: You practiced for {historyThing.length} minutes.</p>
                ))}
            </div>
            <button onClick={initiateClick}>Go Home</button><br></br>
            <button onClick={contactClick}>Contact</button><br></br>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default History