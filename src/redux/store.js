import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

// Create New Store
const store = createStore(counterReducer);

export default store;