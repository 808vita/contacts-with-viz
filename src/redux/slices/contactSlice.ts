import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ContactData {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

export interface ContactList {
  contactList: ContactData[] | any[];
}

const initialState: ContactList = {
  contactList: [],
};
/**
 * contactSlice to hold contact related data
 *
 * Redux Toolkit's createReducer and createSlice automatically use Immer internally
 * to let you write simpler immutable update logic using "mutating" syntax.
 * This helps simplify most reducer implementations.
 *
 * https://redux-toolkit.js.org/usage/immer-reducers
 *
 */
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    /**
     *
     * @param state
     * @param action
     * add contact data to the contactList[]
     */
    addContact: (state, action: PayloadAction<ContactData>) => {
      state.contactList.push(action.payload);
    },
    /**
     *
     * @param state
     * @param action
     * edit contact data in contactList[] using id
     */
    editContact: (state, action: PayloadAction<ContactData>) => {
      const { firstName, lastName, status, id } = action.payload;

      state.contactList = state.contactList.map((contact: ContactData) => {
        if (contact.id === id) {
          return { ...contact, firstName, lastName, status };
        } else {
          return contact;
        }
      });
    },
    /**
     *
     * @param state
     * @param action
     * delete contact data in contactList[] using id
     */
    deleteContact: (state, action: PayloadAction<ContactData>) => {
      const deleteContactId = action.payload;
      const prevContactList = state.contactList;
      state.contactList = prevContactList.filter(
        (contact) => contact.id !== deleteContactId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
