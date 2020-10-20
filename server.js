const express = require("express");
const path = require('path')
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const PORT = process.env.port || 4040;


app.use(express.static(path.join(__dirname, 'webcam', 'build' )))
const users = {};

io.on('connection', socket => {
    if (!users[socket.id]) {
        users[socket.id] = socket.id;
        console.log(users);
    }
  
    socket.emit("yourID", socket.id);

    io.sockets.emit("allUsers", users);
    
    socket.on('disconnect', () => {
        delete users[socket.id];
        console.log("discoonected"+ users );
    },users)

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
    })

    socket.on("acceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
});

server.listen(PORT, () => console.log(`server is running on port ${PORT}.`));