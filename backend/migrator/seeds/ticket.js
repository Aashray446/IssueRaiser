// Facades.
const usersFacade = require('#facades/users');


module.exports = {
	run: _run
}

async function _run() {
	try {
		// const exampleTicketData = [
		// 	{

		// 	},
		// ]

		// for (const element of exampleTicketData) {
		// 	await ticketFacade.register(element)
		// }

	}
	catch (error) {
		return Promise.reject(error);
	}
}
