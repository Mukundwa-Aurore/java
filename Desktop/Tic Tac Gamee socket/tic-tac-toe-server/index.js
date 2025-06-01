require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const sequelize = require('./utils/database');
const User = require('./models/User');
const Game = require('./models/Game');
const Stats = require('./models/Stats');
const { createRoom, joinRoom, rooms } = require('./utils/roomManager');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

app.use(express.json());

// Routes would be defined here (authRoutes, gameRoutes, statsRoutes)

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected');
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    server.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err);
  });

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('join-game', ({ playerName }) => {
    // Logic to create or join a room
    // Emit 'game-start' event to both players when ready
  });

  socket.on('make-move', ({ roomId, index }) => {
    // Validate move, update board, check for winner
    // Emit 'move-made' and possibly 'game-over' events
  });

  socket.on('chat-message', ({ roomId, message }) => {
    // Broadcast chat message to the room
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    // Handle player disconnection
  });
});
