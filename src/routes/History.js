import '../App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Chart1 from '../components/Chart1';
import HistoryStats from '../components/HistoryStats';

function History() {

    const [user, setUser] = useState('')

    useEffect(() => {
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

    return(
        <>  
            <h3>Stats for {user}</h3>
            <button onClick={initiateClick}>Go Home</button><br></br>
            <Chart1 /><br></br>
            <HistoryStats /><br></br>
            <button onClick={initiateClick}>Go Home</button><br></br>
            <button onClick={contactClick}>Contact</button><br></br>
            <button onClick={loginClick}>Log Out</button>
        </>
    )
}

export default History