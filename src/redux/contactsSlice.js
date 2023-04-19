import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    add: (state, action) => {
      state.contacts.unshift(action.payload);
    },
    remove: (state, action) => {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { add, remove } = contactsSlice.actions;
