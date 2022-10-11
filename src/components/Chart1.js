import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart } from 'react-chartjs-2'
import axios from 'axios'

const Chart1 = () => {

    // eslint-disable-next-line
    const [sessionHistory, setSessionHistory] = useState([])
    const [graphHistory, setGraphHistory] = useState([])
    const [dateHistory, setDateHistory] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
        // axios.get('https://flute-practice-app.herokuapp.com/history/')
            .then(res => {
                let data = res.data.practice_sessions
                setSessionHistory(data)
                let lengthArray = []
                let dateArray = []
                for(let i=0; i < data.length; i+=1) {
                    lengthArray.push(data[i].length)
                    dateArray.push(data[i].date)
                }
                setGraphHistory(lengthArray)
                setDateHistory(dateArray)
            })
    }, [])
    // Have "[sessionHistory] above after the comma".  This causes an infinite loop.  This is fine for review page.  

    return (
    <CDBContainer>
        <Line 
            data={{
                labels: dateHistory,
                datasets: [
                    {
                        label: 'Practice Amount',
                        backgroundColor: '#ff1361',
                        borderColor: '#ff1361',
                        data: graphHistory
                    },
                ],
            }} 
            options={{ responsive: true }}
        />
    </CDBContainer>
    );
};

export default Chart1;