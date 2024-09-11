import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: []
    },
    reducers: {
        addContact: {
            prepare: (data) => {
                const newContact = {
                    ...data,
                    id: nanoid(),
                }
                return {
                    payload: newContact,
                }
            },
            reducer: (state, { payload }) => {
            state.items.push(payload)
        }
        },
        deleteContact: (state, { payload }) => {
            state.items = state.items.filter((el) => el.id !== payload)
        },
        
    }
    
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
