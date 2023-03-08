import { DECREMENT, INCREMENT } from "./actionType";

// Increment Action Creators
export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
};


// Decrement Action Creators
export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
};