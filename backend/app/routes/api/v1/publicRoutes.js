module.exports = {
	'POST /ticket/register': 'TicketsController.register',
	'POST /ticket/updateStatus': 'TicketsController.updateStatus',
	'POST /ticket/updateDepartment': 'TicketsController.updateDepartment',
	'GET /ticket/getTicketInfo/:ticketId': 'TicketsController.getTicketInfo'
};
