import { createSlice, createAsyncThunk, isPending, isRejected } from "@reduxjs/toolkit";
import contactService from "../services/ContactService";

const initialState = {
    contacts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createContact = createAsyncThunk('contacts/create', async (contactData, thunkAPI) => {
    try{

        return await contactService.createContact(contactData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getContacts = createAsyncThunk('contacts/getcontacts', async (_, thunkAPI) => {
    try{
        return await contactService.getContact();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteContact = createAsyncThunk('contacts/delete', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.admin.token;
        return await contactService.deleteContact(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message
        || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        reset: state => { 
            state.isError = false,
            state.isSuccess = false,
            state.isLoading = false,
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.contacts.push(action.payload);
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.contacts = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.contacts = state.contacts.filter(contact => contact._id !== action.payload.id);
        })
        .addMatcher(isPending(createContact, getContacts, deleteContact), (state) => {
            state.isLoading = true;
        })
        .addMatcher(isRejected(createContact, getContacts, deleteContact), (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
