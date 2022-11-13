import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Records from './components/Records';
import Pagination from './components/Pagination';
import {ExportToExcel} from './jsontoexcel';

function App() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(50);


    const URL = 'https://jsonplaceholder.typicode.com/comments';
    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                setData(response);
                setLoading(false);
                
            })

    }
    // useEffect(() => {
    //     axios.get("/")
    //         .then(res => {
    //                 setData(res.data);
    //                 setLoading(false);
    //             })
    //             .catch(() => {
    //                 alert('There was an error while retrieving the data')
    //             })
    // }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2> Data</h2>
            <Records data={currentRecords}/>
            <ExportToExcel finalDataDetail={data}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;


     
