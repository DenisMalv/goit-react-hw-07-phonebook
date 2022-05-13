import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// LS
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const persistConfig = {
  key: 'contacts',
  storage,
};

// action
export const addContactR = createAction('contacts/addContactR');
export const deleteContactR = createAction('contacts/deleteContactR');
export const filteredContactsR = createAction('contacts/filteredContactR');

//reducer
const contactsReducer = createReducer(
  {
    items: [
      {
        id: '1',
        name: 'react',
        number: '+420122770',
      },
      {
        id: '2',
        name: 'js',
        number: '+420122770',
      },
      {
        id: '3',
        name: 'nodejs',
        number: '+420122770',
      },
      {
        id: '4',
        name: 'reactrouter',
        number: '+420122770',
      },
      {
        id: '5',
        name: 'es',
        number: '+420122770',
      },
      {
        id: '6',
        name: 'json',
        number: '+420122770',
      },
      {
        id: '7',
        name: 'next',
        number: '+420122770',
      },
    ],
    filter: '',
  },
  {
    [addContactR]: (state, action) => {
      console.log('addcontR state', state);
      const checkingAddedContact = outName => {
        const res = state.items.find(({ name }) => name === outName);
        return res;
      };
      console.log(action.payload);
      const newContact = checkingAddedContact(action.payload.name);

      const contact = {
        id: nanoid(3),
        // id: 23,
        name: action.payload.name,
        number: action.payload.number,
      };

      newContact
        ? alert(`${newContact.name} is already in contacts`)
        : state.items.push(contact);
    },
    [deleteContactR]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [filteredContactsR]: (state, action) => {
      state.filter = action.payload.text;
    },
  }
);
// LS
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// store
export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Selectors

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
