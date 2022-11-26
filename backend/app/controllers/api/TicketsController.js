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
			const { patientName, priority, patientNumber, department, issueContext } = req.body;
			// Create new one.
			const ticket = await ticketFacade.register({
				patientName,
				priority,
				patientNumber,
				department,
				issueContext
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
			console.error("UsersController._create error: ", error);
			error.name = "UserAlreadyExists";
			return _processError(error, req, res);
		}
	}


	return {
		register: _register,
	}
}
