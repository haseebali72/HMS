import {createSlice} from "@reduxjs/toolkit"


const tableSlice = createSlice({
    name : "registrationTable",
    initialState  : [],
    reducers : {
        registrationTable : (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {registrationTable} = tableSlice.actions;
export default tableSlice.reducer