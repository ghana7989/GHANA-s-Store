
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk'
import { persistStore } from "redux-persist"
import CreateSagaMiddleware from "redux-saga"

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = CreateSagaMiddleware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}



const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor };
