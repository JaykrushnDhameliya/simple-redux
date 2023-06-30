
import {configureStore} from '@reduxjs/toolkit';
import fromReducer from '../component/Form/formSlice'
export const store =configureStore({
    reducer:{
        form:fromReducer
    }
})