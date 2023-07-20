import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//saga
function* rootSaga() {
    yield takeLatest('SEARCH_GIPHY', searchGiphy)
}

function* searchGiphy(action) {
    console.log('searchGiphy:', action)
    try {
        giphyResponse = yield axios.get('/api/search')
        yield put({ type: 'SET_GIPHY', payload: giphyResponse.data})
    } catch (error) {
        console.log('error searchGiphy:', error)
      }
}

const giphy = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIPHY':
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
    applyMiddleware(logger),
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
