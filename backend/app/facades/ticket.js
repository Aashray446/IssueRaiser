// Reference models.
const Ticket = require('#models/Ticket');
// JWT facade.

// Custom error.
const { Err } = require('#factories/errors');


module.exports = {

	register: _register,

	delete: _delete,
}


async function _register({ patientName, priority, patientNumber, department, issueContext }) {
	try {
		// Try to create new ticket

		const ticket = await Ticket.create({
			patientName: patientName,
			priority: priority,
			patientNumber: patientNumber,
			department: department,
			issueContext: issueContext
		});

		// Prepare output.
		const result = [
			ticket
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch (error) {
		return Promise.reject(error);
	}
}

// Delete
async function _delete(ticket) {
	try {
		// Try to find user.
		const result = await Ticket.destroy({
			where: {
				ticketId: ticket.ticketId
			}
		});



		//  If Ticket not found, throw error with name UserNotFound:
		if (result == 0) {
			const err = new Err('Ticket not found');
			err.name = "TicketNotFound";
			throw err;
		}

		// Send output.
		return Promise.resolve([result]);
	}
	catch (error) {
		return Promise.reject(error);
	}
}