import { configureStore } from "@reduxjs/toolkit"
import expensesReducer from "./slices/expensesSlice";
import incomesReducer from "./slices/incomesSlice";

const myStore = configureStore({
    reducer : {
        expenses : expensesReducer,
        incomes : incomesReducer,
    },
})


export default myStore;