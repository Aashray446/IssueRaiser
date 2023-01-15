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
    options.url = SERVER_URL + 'building/tickets_post/';
    options.method = 'POST';
    options.data = ticket;
    // console.log(ticket)
    // Creating the ticket
    try {
        const response = await axios(options);
        if (response.data) {
            return Promise.resolve(response.data);
        }
    } catch (error) {
        if (error.response?.data) {
            return Promise.reject(error.response.data)
        }
        return Promise.reject("NETWORK ERROR")
    }
}

export const getTicket = async (ticketId) => {
    options.url = SERVER_URL + 'building/tickets_get/?ticket_no=' + ticketId;
    options.method = 'GET';
    // Fetching the ticket info
    try {
        const response = await axios(options);
        if (response.data) {
            return Promise.resolve(response.data[0])
        }
    } catch (error) {
        return Promise.reject("Ticket Not Found")
    }

}

export const updateStatus = async (ticketId, status) => {
    options.url = SERVER_URL + '/ticket/updateStatus/';
    options.method = 'POST';
    options.data = { status: status, ticketId: ticketId };
    // Updating the ticket status
    try {
        const response = await axios(options);
        if (response.status == 200) {
            return Promise.resolve()
        }
    } catch (error) {
        return Promise.reject("Ticket Not Found")
    }
}

export const deleteTicket = async (ticketId) => {
    options.url = SERVER_URL + '/ticket/deleteTicket/';
    options.method = 'POST';
    options.data = { ticketId: ticketId };
    // Deleting the ticket
    try {
        const response = await axios(options);
        if (response.status == 200) {
            return Promise.resolve()
        }
    } catch (error) {
        return Promise.reject("Ticket Not Found")
    }
}


export const getDepartments = async () => {
    options.url = SERVER_URL + '/building/get_department/';
    options.method = 'GET';
    // Fetching the departments
    try {
        const response = await axios(options);
        if (response.data) {
            return Promise.resolve(response.data)
        }
    } catch (error) {
        return Promise.reject("Departments Not Found")
    }
}