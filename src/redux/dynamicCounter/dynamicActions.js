import { DDECREMENT, DINCREMENT } from "./dynamicActionType";

// Increment Action Creators
export const increment = (value) => {
    console.log(value);
    return {
        type: DINCREMENT,
        payload: value,
    }
};


// Decrement Action Creators
export const decrement = (value) => {
    console.log(value);
    return {
        type: DDECREMENT,
        payload: value,
    }
};