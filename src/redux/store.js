import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import myLogger from "./middleware/myLogger";
import rootReducer from "./rootReducer";


// Create New Store
// const store = createStore(rootReducer, applyMiddleware(myLogger));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));

export default store;