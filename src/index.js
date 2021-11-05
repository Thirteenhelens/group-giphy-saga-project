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
const gifReducer = (state = [{name: ``, image_url: ``}], action) => {
    switch (action.type) {
        case 'SET_GIF':
            console.log(`this is payload`, action.payload);
            return action.payload

        default:
            return state
    }
} //end gifReducer

const placeHolder = {
    url: "https://giphy.com/embed/cHMwfvqXeBszH2TohN/video"
}

const searchGifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_FOR_GIF':
            return action.payload
        default:
            return state
    }
} //end searchGifReducer


function* fetchSearchGif(action) {
    try {
        let search = action.payload

        const response = yield axios.get(`/api/search/${search}`);
        yield put({
            type: 'SEARCH_FOR_GIF',
            payload: response.data.data
        })
    } catch (err) {
        console.log('Err searching ->', err);
    }
} //end fetchSearchGif


//Fetch the gifs from the Fav database
function* fetchFavGif() {
    //get data from DB
    try {
        const response = yield axios.get('/api/favorite');
        //connect the response.data to the gifReducer
        console.log(response.data);

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
        yield put({
            type: 'SET_GIF',
            payload: action.payload
        })

    } catch (error) {
        console.log('ERROR IN POST', error);
        yield put({ type: 'POST_ERROR' })
    }
}//post gif


//change or add the category on the gif
function* putCategoryGif(action) {

    try {
        axios.put(`api/favorite/${action.payload.id}`, 
       { category_id: action.payload.categoryId})
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
    yield takeEvery('ADD_GIF', postGif);
    yield takeEvery('DELETE_GIF', deleteGif);
    yield takeEvery('FETCH_GIF', fetchFavGif);
    yield takeEvery('SEARCH_GIF', fetchSearchGif);
    yield takeEvery('CHANGE_CATEGORY', putCategoryGif);
}

const sagaMiddleware = createSagaMiddleware();


const storeInstance = createStore(
    combineReducers({
        gifReducer,
        searchGifReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
