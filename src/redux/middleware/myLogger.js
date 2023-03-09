import rootReducer from "../rootReducer";

// Create first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action:${JSON.stringify(action)}`);
    console.log(`Before:${JSON.stringify(store.getState())}`);

    // Upcoming state
    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    // Action pass
    return next(action);
}


export default myLogger;