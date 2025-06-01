const rooms = {};

function createRoom(playerSocket, playerName) {
  const roomId = generateRoomId();
  rooms[roomId] = {
    players: [playerSocket],
    playerNames: [playerName],
    board: Array(9).fill(null),
    currentTurn: 'X',
  };
  playerSocket.join(roomId);
  return roomId;
}

function joinRoom(roomId, playerSocket, playerName) {
  if (rooms[roomId] && rooms[roomId].players.length === 1) {
    rooms[roomId].players.push(playerSocket);
    rooms[roomId].playerNames.push(playerName);
    playerSocket.join(roomId);
    return true;
  }
  return false;
}

function generateRoomId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  createRoom,
  joinRoom,
  rooms,
};
