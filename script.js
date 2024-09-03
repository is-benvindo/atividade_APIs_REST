document.addEventListener('DOMContentLoaded', function () {
    // API da NASA
    document.getElementById('obter-foto').addEventListener('click', function () {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') // Use sua própria chave da API
            .then(response => response.json())
            .then(data => {
                const img = document.getElementById('foto-saida');
                const titulo = document.getElementById('foto-titulo');
                const descricao = document.getElementById('foto-descricao');

                img.src = data.url;
                img.style.display = 'block';
                titulo.textContent = data.title;
                titulo.style.display = 'block';
                descricao.textContent = data.explanation;
                descricao.style.display = 'block';
            })
            .catch(error => console.error('Erro ao obter foto da NASA:', error));
    });

    // API de Informações do Filme (Trakt)
    document.getElementById('obter-info').addEventListener('click', function () {
        fetch('https://api.trakt.tv/search/movie?query=before%20sunrise', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 2b3ee4e1d7f245075a1059b412117eda8b5b2bcfc67675f4cb976aefd27f3d11',
                'Trakt-API-Version': '2',
                'Trakt-API-Key': '94a0542e35a18c33f8892b0300fc2a43b6ca112342427c83a70712c69dbee6ef'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const movie = data[0].movie;
                    document.getElementById('filme-poster').src = movie.images?.poster?.full || '';
                    document.getElementById('filme-poster').style.display = movie.images?.poster?.full ? 'block' : 'none';
                    document.getElementById('filme-titulo').textContent = movie.title;
                    document.getElementById('filme-ano').textContent = `Ano: ${movie.year}`;
                    document.getElementById('filme-sinopse').textContent = movie.overview || 'Sinopse não disponível';
                    document.getElementById('filme-imdb').href = `https://www.imdb.com/title/${movie.ids.imdb}`;
                    document.getElementById('info-filme').style.display = 'block';
                } else {
                    console.error('Nenhum filme encontrado.');
                }
            })
            .catch(error => console.error('Erro ao obter informações do filme:', error));
    });

    // API dos Gatos
    document.getElementById('obter-imagem-gato').addEventListener('click', function () {
        fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {
                'x-api-key': 'live_WAzsYKBc0UgjoO3N3GBFB8iNN738gPegcSfa9VoT1kbghndhY1u0Kq5waSxdc3Zh' // Use sua chave da API
            }
        })
            .then(response => response.json())
            .then(data => {
                const img = document.getElementById('imagem-gato');
                img.src = data[0].url;
                img.style.display = 'block';
            })
            .catch(error => console.error('Erro ao obter a imagem do gato:', error));
    });
});
