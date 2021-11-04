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
    //get data from DB
    try {
        const response = yield axios.get('/api/favorite');
        //connect the response.data to the gifReducer
        yield put({
            type: 'SET_GIF',
            payload: response.data
        })
        //catch your errors!
    } catch (error) {
        console.log('ERROR IN GET', error);
        yield put({ type: 'GET_ERROR' })
    }
}//end fetchGif


//Post the gif to the fav DB
function* postGif(action) {

    try {
        axios.post('/api/favorite',
            action.payload)
        yield put({ type: 'SET_GIF' })

    } catch (error) {
        console.log('ERROR IN POST', error);
        yield put({ type: 'POST_ERROR' })
    }
}//post gif


//change or add the category on the gif
function* putCategoryGif(action) {

    try {
        axios.put(`api/favorite/${action.payload}`)
        yield put({ type: 'SET_GIF' })

    } catch (error) {
        console.log('ERROR IN PUT', error);
        yield put({ type: 'PUT_ERROR' })
    }
}//end putGif


//remove the gif from the fav DB
function* deleteGif(action) {

    try {
        axios.delete(`api/favorite/${action.payload}`)
        yield put({ type: 'SET_GIF' })
    } catch (error) {
        console.log('ERROR IN DELETE', error);
        yield put({ type: 'DELETE_ERROR' })
    }
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
