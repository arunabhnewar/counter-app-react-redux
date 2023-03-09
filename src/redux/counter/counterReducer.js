import { DECREMENT, INCREMENT } from "./actionType";

// Initial State Declaration
const initialState = {
    value: 10,
};


// Create reducer function
const counterReducer = (state = initialState, action) => {
    const newState = structuredClone(state);

    switch (action.type) {
        case INCREMENT:
            return {
                // ...state,
                value: newState.value + 10,
            };

        case DECREMENT:
            return {
                // ...state,
                value: newState.value - 5,
            };

        default:
            return state;
    }
}


export default counterReducer;