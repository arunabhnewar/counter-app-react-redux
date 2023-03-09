import { DECREMENT, INCREMENT } from "./actionType";

// Increment Action Creators
export const increment = () => {
    return {
        type: INCREMENT,
        // payload: value,
    }
};


// Decrement Action Creators
export const decrement = () => {
    return {
        type: DECREMENT,
        // payload: value,
    }
};