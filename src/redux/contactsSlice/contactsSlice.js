import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

// reduser
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
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
  reducers: {
    addContact: (state, action) => {
      const contact = {
        id: nanoid(3),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.items.push(contact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    filterContact: (state, action) => {
      state.filter = action.payload.text;
    },
  },
});

// LS
const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
