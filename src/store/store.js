import {configureStore} from "@reduxjs/toolkit"
import tableReducer from "./slices/registrationTable.slice"
import {} from "react-persist"


export const store = configureStore({
    reducer : {
        table : tableReducer
    } 
})