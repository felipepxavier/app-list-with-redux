/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default( reducers: any) => {
    const persistedReducer = persistReducer(
        {
            key: 'listUsers',
            storage,
            whitelist: ['users'],
        },
        reducers
    );

    return persistedReducer;
};
