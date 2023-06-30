import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

import { useSelector, useDispatch } from 'react-redux';
import { storeData, getAllData, getAllDataApi } from './Form/formSlice'
import {fetchALLDatas} from "./Form/formApi";
import axios from 'axios';
const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
];

export default function Table() {
    const allCars = useSelector(getAllData);
    const allDataApi=useSelector(getAllDataApi)
    const dispatch = useDispatch()
    // const [data, setdata] = useState([])
    // const rows = allCars
    const apiGet = async () => {

        dispatch(fetchALLDatas())

        // const api= await axios.get('http://localhost:4000/data')
        // setdata(api.data)
    }
    useEffect(() => {
        apiGet()
    }, []);
    console.log(allDataApi,"allDataApi");
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={allDataApi.length > 0 && allDataApi}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}