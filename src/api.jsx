import axios from 'axios';

export const getUserData = (pageNumber) => axios.get(`https://stagingapi.enalo.in/inventory/get-items/?offset=${pageNumber}`);