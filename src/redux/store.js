import { createStore } from "redux";
import rootReducer from "./rootReducer";


// Create New Store
const store = createStore(rootReducer);

export default store;