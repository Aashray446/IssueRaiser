// Reference models.
const Ticket = require('#models/Ticket');
// JWT facade.

// Custom error.
const { Err } = require('#factories/errors');


module.exports = {

	register: _register,
	updateStatus: _updateStatus,
	delete: _delete,
	changeDepartment: _changeDepartment,
	getTicketInfo: _getTicketInfo
}


async function _register({ patientName, priority, patientNumber, department, issueContext, status, roomId }) {
	try {
		// Try to create new ticket

		console.log("ticketFacade.register: ", patientName, priority, patientNumber, department, issueContext, status, roomId);

		const ticket = await Ticket.create({
			patientName: patientName,
			priority: priority,
			patientNumber: patientNumber,
			department: department,
			issueContext: issueContext,
			status: status,
			RoomId: roomId
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

// update status
async function _updateStatus({ ticketId, status }) {
	try {
		// Try to update ticket status
		const result = await Ticket.update(
			{ status: status },
			{ where: { ticketId: ticketId } }
		);

		//  If Ticket not found, throw error with name UserNotFound:
		if (result == 0) {
			const err = new Err('Ticket not found');
			err.name = "TicketNotFound";
			throw err;
		}


	}
	catch (error) {
		return Promise.reject(error);
	}
}

// update ticket
async function _changeDepartment(ticket) {
	try {
		// Try to update ticket department
		const ticket = await Ticket.update(
			{ department: ticket.department },
			{ where: { ticketId: ticket.ticketId } }
		);
	}
	catch (error) {
		return Promise.reject(error);
	}
}


// get ticket info by ticketId
async function _getTicketInfo({ ticketId }) {
	try {
		// Try to get ticket info
		let ticket = await Ticket.findOne({
			where: {
				ticketId: ticketId
			}
		});

		//  If Ticket not found, throw error with name UserNotFound:
		if (ticket == null) {
			const err = new Err('Ticket not found');
			err.name = "TicketNotFound";
			throw err;
		}

		if (ticket.status == "Completed") {
			ticket.dataValues.responseTime = ticket.updatedAt - ticket.createdAt;
		}

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