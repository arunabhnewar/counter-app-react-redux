import { DDECREMENT, DINCREMENT } from "./dynamicActionType";

// Initial State Declaration
const initialState = {
    value: 5,
};


// Create reducer function
const dynamicCounterReducer = (state = initialState, action) => {
    const cloneState = structuredClone(state);

    switch (action.type) {
        case DINCREMENT:
            return {
                // ...state,
                value: cloneState.value + action.payload,
            };

        case DDECREMENT:
            return {
                // ...state,
                value: cloneState.value - action.payload,
            };

        default:
            return state;
    }
}


export default dynamicCounterReducer;