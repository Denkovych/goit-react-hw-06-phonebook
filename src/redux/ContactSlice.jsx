import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';


const initialState = {
  items: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
     return state.items.map(state.items => state.items.name).includes(action.payload.name) 
     ? alert(`${action.payload.name} is already in contacts`)
     : state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    
  },
  
});


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

console.log();