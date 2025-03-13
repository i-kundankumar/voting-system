const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let votes = { OptionA: 0, OptionB: 0, OptionC: 0 };

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Send current votes to the client
    socket.emit('updateVotes', votes);

    // Handle vote submission
    socket.on('vote', (option) => {
        if (votes[option] !== undefined) {
            votes[option]++;
            io.emit('updateVotes', votes); // Broadcast updated votes to all clients
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
