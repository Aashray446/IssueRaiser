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
    try {
        const response = await axios(options);
        // console.log(response);
        if (response.data) {
            return Promise.resolve(response.data.content.ticket[0]);
        }
    } catch (error) {
        if (error.response?.data?.error?.message) {
            return Promise.reject(error.response.data.error.message)
        }
        return Promise.reject("NETWORK ERROR")
    }
}

export const getTicket = async (ticketId) => {
    options.url = SERVER_URL + '/ticket/getTicketInfo/' + ticketId;
    options.method = 'GET';
    // Fetching the ticket info
    try {
        const response = await axios(options);
        if (response.data) {
            return Promise.resolve(response.data.content.ticket[0])
        }
    } catch (error) {
        return Promise.reject("Ticket Not Found")
    }

}

