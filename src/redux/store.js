import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from 'redux/filterSlice';
import { contactsSlice } from 'redux/contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    filterValue: filterSlice.reducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
