import {createStore} from 'redux'
import rootReducer from '../reducers'
import {loadState} from "../localStorage/localStorage";

const persistedState = loadState();


const configureStore = preloadedState =>(
    createStore(
        rootReducer,
        persistedState,

    )
);

const store = configureStore({});

export default store;