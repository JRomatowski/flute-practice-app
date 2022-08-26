import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart } from 'react-chartjs-2'
import axios from 'axios'

const Chart1 = () => {

    // const [sessionHistory, setSessionHistory] = useState([])
    const [graphHistory, setGraphHistory] = useState([])
    const [dateHistory, setDateHistory] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/history')
            .then(res => {
                let data = res.data.practice_sessions
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

    // console.log(graphHistory)

    // const [data] = useState({
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // datasets: [
    //     {
    //     label: 'Practice Amount',
    //     backgroundColor: 'rgba(194, 116, 161, 0.5)',
    //     borderColor: 'rgb(194, 116, 161)',
    //     // data: [65, 59, 90, 81, 56, 55, 40],
    //     data: graphHistory
    //     },
    //     // {
    //     // label: 'My Second dataset',
    //     // backgroundColor: 'rgba(71, 225, 167, 0.5)',
    //     // borderColor: 'rgb(71, 225, 167)',
    //     // data: [28, 48, 40, 19, 96, 27, 100],
    //     // },
    // ],
    // });

    return (
    <CDBContainer>
        {/* <h3 className="mt-5">Line Chart</h3> */}
        <Line 
            data={{
                labels: dateHistory,
                datasets: [
                    {
                        label: 'Practice Amount',
                        backgroundColor: 'rgba(194, 116, 161, 0.5)',
                        borderColor: 'rgb(194, 116, 161)',
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