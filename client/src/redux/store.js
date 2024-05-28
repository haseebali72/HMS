import {configureStore} from "@reduxjs/toolkit";
import appointmentDataSlice from "./slices/appointmentData.slice";

export const store = configureStore({
    reducer:{
        appointmentFormData : appointmentDataSlice,
    }
})