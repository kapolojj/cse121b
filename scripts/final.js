const gamesSection = document.getElementById('games');

async function fetchGames() {
    try {
        const response = await fetch('games.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayGames(data);
    } catch (error) {
        console.error(error);
        gamesSection.textContent = 'Failed to fetch data.';
    }
}

function displayGames(games) {
    games.forEach((game) => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const gameDetails = `
            <div class="game-title">${game.title}</div>
            <div class="game-platform">${game.platform}</div>
            <div class="game-publisher">${game.publisher}</div>
            <div class="game-thumbnail"><img src="${game.thumbnail}" alt="${game.title} Thumbnail"></div>
        `;

        gameCard.innerHTML = gameDetails;
        gamesSection.appendChild(gameCard);
    });
}

fetchGames();
