import { configureStore } from "@testing-library/react";
import userSlise from "./useerSlice";

const store = configureStore({
    reducer: {
        users: userslice
    }
})

export default store;