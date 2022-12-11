import { SERVER_URL } from './config';
import axios from 'axios';


// SERVER_URL = SERVER_URL + 'ticket/';
const options = {
    url: '',
    method: '',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {}
};


export const createTicket = async (ticket) => {
    options.url = SERVER_URL + '/ticket/register';
    options.method = 'POST';
    options.data = ticket;

    // Creating the ticket
    const response = await axios(options);
    if (response.data) {
        return Promise.resolve(response.data.content.ticket[0]);
    }
    else {
        return Promise.reject(response.message);
    }

}

export const getTicket = async (ticketId) => {
    options.url = SERVER_URL + '/ticket/getTicketInfo/' + ticketId;
    options.method = 'GET';
    // Fetching the ticket info
    const response = await axios(options);
    if (response.data) {
        console.log(response.data);
    }
}

