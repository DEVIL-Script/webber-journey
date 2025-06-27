const footballTeam = {
  team: "Dream FC",
  year: 2023,
  headCoach: "Alex Ferguson",
  players: [
    {
      name: "John Smith",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Mike Johnson",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "David Williams",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Paul Brown",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "James Wilson",
      position: "forward",
      isCaptain: false
    }
  ]
};

document.getElementById('team').textContent = footballTeam.team;
document.getElementById('year').textContent = footballTeam.year;
document.getElementById('head-coach').textContent = footballTeam.headCoach;

function displayPlayers(players) {
  const playerCardsContainer = document.getElementById('player-cards');
  playerCardsContainer.innerHTML = '';

  players.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';

    const playerName = document.createElement('h2');
    playerName.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const playerPosition = document.createElement('p');
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);
    playerCardsContainer.appendChild(playerCard);
  });
}

displayPlayers(footballTeam.players);

document.getElementById('players').addEventListener('change', function() {
  const selectedPosition = this.value;
  
  if (selectedPosition === 'all') {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );
    displayPlayers(filteredPlayers);
  }
});
