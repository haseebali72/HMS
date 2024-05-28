import {createSlice} from "@reduxjs/toolkit"

const appointmentDataSlice = createSlice({
    name : "appointmentFormData",
    initialState : null,
    reducers : {
        addData : (state, action)=>{
            return {...action.payload}
        }
    }
})

export const { addData } = appointmentDataSlice.actions
export default appointmentDataSlice.reducer  