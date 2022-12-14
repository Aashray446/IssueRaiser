// Facades:
const ticketFacade = require('#facades/ticket');

// Reponse protocols.
const {
	createOKResponse,
	createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');


module.exports = TicketsController;

function TicketsController() {

	const _processError = (error, req, res) => {
		// Default error message.
		let errorMessage = error?.message ?? 'Internal server error';
		// Default HTTP status code.
		let statusCode = 500;

		switch (error.name) {
			case ('TicketNotFound'):
				errorMessage = "Ticket not found";
				statusCode = 400;
				break;
			case ('RoomNotFound'):
				errorMessage = "Room not found";
				statusCode = 400;
				break;
			// Perform your custom processing here...

			default:
				break;
		}

		// Send error response with provided status code.
		return createErrorResponse({
			res,
			error: {
				message: errorMessage
			},
			status: statusCode
		});
	}


	const _register = async (req, res) => {

		try {
			// Extract request input:
			const { patientName, priority, patientNumber, department, issueContext, status, roomId } = req.body;
			// Create new one.
			const ticket = await ticketFacade.register({
				patientName,
				priority,
				patientNumber,
				department,
				issueContext,
				status,
				roomId
			});


			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					ticket
				}
			});
		}
		catch (error) {
			console.error("TicketController._create error: ", error);
			return _processError(error, req, res);
		}
	}

	const _updateStatus = async (req, res) => {

		try {
			// Extract request input:
			const { ticketId, status } = req.body;
			// Create new one.
			const ticket = await ticketFacade.updateStatus({
				ticketId,
				status
			});

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					ticket
				}
			});
		}
		catch (error) {
			console.error("TicketController._create error: ", error);
			return _processError(error, req, res);
		}
	}

	const _updateDepartment = async (req, res) => {

		try {
			// Extract request input:
			const { ticketId, department } = req.body;
			// Create new one.
			const ticket = await ticketFacade.changeDepartment({
				ticketId,
				department
			});

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					ticket
				}
			});
		}
		catch (error) {
			console.error("TicketController._create error: ", error);
			return _processError(error, req, res);
		}
	}

	const _getTicketInfo = async (req, res) => {

		try {
			// Extract request input:
			const ticketId = req.params.ticketId
			// Create new one.
			const ticket = await ticketFacade.getTicketInfo({
				ticketId
			});

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					ticket
				}
			});
		}
		catch (error) {
			console.error("TicketController._create error: ", error);
			return _processError(error, req, res);
		}
	}

	const _deleteTicket = async (req, res) => {


		const { ticketId } = req.body;

		try {

			const result = await ticketFacade.delete({
				ticketId
			});

			return createOKResponse({
				res,
				content: {
					result
				}
			})

		}
		catch (error) {
			console.error("TicketController._deleteTicket error: ", error);
			return _processError(error, req, res);
		}
	}


	return {
		register: _register,
		updateStatus: _updateStatus,
		updateDepartment: _updateDepartment,
		getTicketInfo: _getTicketInfo,
		deleteTicket: _deleteTicket
	}
}
