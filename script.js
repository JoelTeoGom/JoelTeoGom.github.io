const username = 'JoelTeoGom';
const repoList = document.getElementById('repo-list');

async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        repos.slice(0, 5).forEach(repo => { // Muestra solo los primeros 5 repositorios
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || 'No hay descripción disponible.'}</p>
                <p><strong>Estrellas:</strong> ${repo.stargazers_count} | <strong>Forks:</strong> ${repo.forks_count}</p>
            `;
            repoList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener los repositorios:', error);
    }
}

fetchRepos();
