import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducers } from './root-reducer';
import persistReducer from './persist-reducer';
import { persistStore  } from 'redux-persist';
const middleware = [...getDefaultMiddleware({
  serializableCheck: false,
}
), logger];

const persistedReducer = persistReducer(reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware
});

const persistor = persistStore(store);

export{ persistor, store };