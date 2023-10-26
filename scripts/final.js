const gamesSection = document.getElementById('games');
const sortBySelect = document.getElementById('sortBy');

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
    gamesSection.innerHTML = '';

    const sortBy = sortBySelect.value;
    const sortedGames = [...games];
    sortedGames.sort((a, b) => {
        if (b[sortBy] < a[sortBy]) {
            return -1;
        } else if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        return 0;
    });

    sortedGames.forEach((game) => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const gameDetails = `
            <div class="game-title">${game.title}</div>
            <div class="game-platform">${game.platform}</div>
            <div class="game-publisher">${game.publisher}</div>
            <div class="game-thumbnail"><img src="${game.thumbnail}" alt="${game.title} Thumbnail"></div>
            <div class="game-release_date">${game.release_date}</div>
        `;

        gameCard.innerHTML = gameDetails;
        gamesSection.appendChild(gameCard);
    });


}

sortBySelect.addEventListener('change', fetchGames);
fetchGames();

    /* ARRAY METHODS - Functional Programming */
    let CategoryArray = ["Action","Shooter","Strategy","Sports","Racing"];
    /* Output Source Array */
    document.querySelector('#category_games').textContent = CategoryArray;
    
