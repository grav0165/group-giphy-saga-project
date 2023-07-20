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

function* searchGiphy() {
    
}

const sagaMiddleware = createSagaMiddleware();
// Create one store that all components can use
const store = createStore(
    combineReducers({
       
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
