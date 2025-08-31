import { configureStore } from "@reduxjs/toolkit"
import expensesReducer from "./slices/expensesSlice";
import incomesReducer from "./slices/incomesSlice";
import authReducer from "./slices/authSlice";

const myStore = configureStore({
    reducer : {
        expenses : expensesReducer,
        incomes : incomesReducer,
        auth : authReducer,
    },
})


export default myStore;