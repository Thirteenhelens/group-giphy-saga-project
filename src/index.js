import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

//reducer to hold the gifs in redux state,
//not sure yet what we are going to need returned, or if we need other action.payloads
//add as needed
const gifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIF':
            return action.payload

        default:
            return state
    }
} //end gifReducer




//Fetch the gifs from the Fav database
function* fetchFavGif() {


}//end fetchGif


//Post the gif to the fav DB
function* postGif() {



}//post gif


//change or add the category on the gif
function* putCategoryGif() {



}//end putGif


//remove the gif from the fav DB
function* deleteGif() {



}//end deleteGif

function* rootSaga() {
    yield takeEvery('FETCH_GIF', fetchFavGif);
    yield takeEvery('ADD_GIF', postGif);
    yield takeEvery('CHANGE_CATEGORY', putCategoryGif);
    yield takeEvery('DELETE_GIF', deleteGif);
}

const sagaMiddleware = createSagaMiddleware();


const storeInstance = createStore(
    combineReducers({
        gifReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
