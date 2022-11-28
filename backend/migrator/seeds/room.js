// Facades.
const room = require('#models/room');


module.exports = {
    run: _run
}

async function _run() {
    try {
        const exampleTicketData = [
            {
                name: "Room 1",
            },
            {
                name: "Room 2",
            }
        ]

        for (const element of exampleTicketData) {
            await room.create(element);
        }

    }
    catch (error) {
        return Promise.reject(error);
    }
}
