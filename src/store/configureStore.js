import {createStore} from 'redux'

const configureStore = preloadedState =>{
    createStore(
        rootReducer,
        preloadedState,
        composeEnha
    )