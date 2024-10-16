
import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../reducers/Reducer';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage'

let store;

const isClient = typeof window !== 'undefined';

if (isClient) {
  const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    //blacklist: ['countries'] // to ignore from persisting data
  }

  const persistedReducer = persistReducer(persistConfig, Reducer)

  store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  (store as any).__PERSISTOR = persistStore(store);
} else {

  store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

}

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store};

export type RootState = ReturnType<typeof store.getState>

