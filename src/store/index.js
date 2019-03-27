import { createStore, applyMiddleware, compose, } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
    let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
    let persistor = persistStore(store);

    return {
        store,
        persistor,
    };
};
