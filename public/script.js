const socket = io();

document.getElementById('options').innerHTML = `
  <button onclick="vote('OptionA')">Option A</button>
  <button onclick="vote('OptionB')">Option B</button>
  <button onclick="vote('OptionC')">Option C</button>
`;

function vote(option) {
    socket.emit('vote', option);
    document.getElementById('status').textContent = `You voted for ${option}`;
}

// Update votes in real-time
socket.on('updateVotes', (votes) => {
    document.getElementById('status').textContent = '';
    const results = Object.entries(votes)
        .map(([key, value]) => `${key}: ${value}`)
        .join('<br>');
    document.getElementById('status').innerHTML = `<h2>Current Results:</h2>${results}`;
});
