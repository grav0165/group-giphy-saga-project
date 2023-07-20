import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

//saga
function* rootSaga() {
    yield takeLatest('SEARCH_GIPHY', searchGiphy)
}

function* searchGiphy(action) {
    console.log('searchGiphy:', action)
    try {
        let giphyResponse = yield axios.get(`/api/search/${action.payload}`)
        // yield console.log('giphyResponse', giphyResponse.data);
        // put = dispatch
        yield put({ type: 'SET_GIPHY', payload: giphyResponse.data})
    } catch (error) {
        console.log('error searchGiphy:', error)
    }
}

const giphy = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIPHY':
            console.log('action', action);
            return action.payload
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const store = createStore(
    combineReducers({
    giphy
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);