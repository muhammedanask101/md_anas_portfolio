import axios from 'axios';
const API_URL = '/api/contact/';

const createContact = async (contactData) => {
    
    const response = await axios.post(API_URL, contactData);
    return response.data;
}

const getContact = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const deleteContact = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config);
    return response.data;
} 

const contactService = { createContact, getContact, deleteContact };
export default contactService;