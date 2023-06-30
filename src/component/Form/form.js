import React, { useState } from 'react'
import Table from '../table'
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData} from '../Form/formSlice'
import { createDatas } from './formApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Form = () => {
    const navigation =useNavigate()
    const allCars = useSelector(getAllData);
    const dispatch = useDispatch()
    const unique_id = uuid();
    const [data, setData] = useState({})
    const [allData, setAllData] = useState([])
    const handleClick =async () => {
        // with out api using
        // setAllData([...allData, {...data,id:unique_id}])
        //api using 
    //    await axios.post('http://localhost:4000/data',data)
    //   dispatch(storeData({...data,id:unique_id}))

      dispatch(createDatas(data))

      navigation('/table')
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value,})
    }
    return (
        <>
            <input type='text' placeholder='firstName' name='firstName' onChange={(e) => handleChange(e)} />
            <input type='text' placeholder='lastName' name='lastName' onChange={(e) => handleChange(e)} />
            <button type='button' onClick={() => handleClick()}>submit</button>
            {/* <Table data={allData}/> */}
        </>
    )
}
export default Form;