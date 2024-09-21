import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/task/taskSlice";

const store = configureStore({
  reducer: { task: taskReducer },
});

export default store;
