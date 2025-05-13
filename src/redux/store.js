import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notification-clice";
import indebtednessReducer from "./indebtedness-slice"
import timerReducer from "./timer-slice"
export const store = configureStore({
    reducer:{
        notificationReducer,
        indebtednessReducer,
        timerReducer
    }
})

export default store;