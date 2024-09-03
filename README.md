# APIs REST

Este repositório fornece uma visão geral de três APIs REST populares: NASA, Trakt.tv, e The Cat API.

## 1. API da NASA (Astronomy Picture of the Day - APOD)
A API da NASA APOD oferece imagens diárias de fenômenos astronômicos, acompanhadas de explicações fornecidas por astrônomos. É ideal para explorar imagens impressionantes do universo, junto com informações científicas.

### Principais Funcionalidades
- Obter a imagem do dia com descrições científicas.
- Especificar uma data para recuperar uma imagem anterior.

### Verbos HTTP Disponíveis
- **GET**: A principal operação suportada pela API da NASA. Você pode buscar imagens específicas (usando parâmetros como data) ou a imagem do dia.

### Possibilidades
- Criar um calendário de imagens astronômicas.
- Integrar com redes sociais para compartilhar a imagem do dia.
- Exibir imagens e descrições em um site de ciências ou educação.

### Comando `curl`
curl "https://api.nasa.gov/planetary/apod?api_key=YOUR_NASA_API_KEY"

### Resultado JSON
{
  "copyright": "Andrea Vanoni",
  "date": "2024-09-02",
  "explanation": "Why is there a triangle hovering over the Sun? Although the shape is unusual, the type of structure is not: it is part of an evolving solar prominence. Looping magnetic fields on the Sun channel the flow of energetic particles, sometimes holding glowing gaseous structures aloft for months. A prominence glows brightly because it contains particularly hot, dense, or opaque solar plasma. The surprising triangular structure occurred last week. Larger than our Earth, the iconic prominence was imaged by several solar photographers and documented by NASA's Solar Dynamic Observatory to form and violently dissipate in about a day. The featured image was captured in a color of red light emitted strongly by hydrogen. Below, solar fibrils carpet the Sun's chromosphere, while the background sky is so faint in comparison that no stars are visible. Our Sun's surface has been quite active this year.",
  "hdurl": "https://apod.nasa.gov/apod/image/2409/SunTriangle_Vanoni_960.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "A Triangular Prominence Hovers Over the Sun",
  "url": "https://apod.nasa.gov/apod/image/2409/SunTriangle_Vanoni_960.jpg"
}

## 2. API do Trakt.tv
O Trakt.tv é uma API que permite buscar informações sobre filmes e séries de TV. Ela é uma plataforma voltada para tracking de mídia, oferecendo informações detalhadas sobre filmes, séries, avaliações de usuários e listas de favoritos.

### Principais Funcionalidades
- Buscar informações sobre filmes ou séries (título, ano, sinopse, avaliações, etc.).
- Autenticação de usuários e gestão de listas pessoais (como assistir mais tarde, favoritos).

### Verbos HTTP Disponíveis
- **GET**: Buscar informações sobre filmes, séries, temporadas e episódios. Também pode ser usado para obter listas públicas.
- **POST**: Criar ou atualizar recursos, como adicionar itens à lista de "assistir mais tarde" ou marcar um filme como assistido.
- **PUT**: Atualizar recursos existentes, como editar listas de favoritos ou assistidos.
- **DELETE**: Excluir recursos, como remover um filme ou série de uma lista personalizada.

### Possibilidades
- Criar aplicativos de acompanhamento de mídia para rastrear o que foi assistido.
- Gerar recomendações de filmes e séries com base no histórico de visualizações.
- Integrar com plataformas sociais para compartilhar o progresso de visualizações ou listas de recomendações.

### Comando `curl`
curl --request GET \
  --url "https://api.trakt.tv/search/movie?query=before%20sunrise" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer YOUR_TRAKT_API_TOKEN" \
  --header "Trakt-API-Version: 2" \
  --header "Trakt-API-Key: YOUR_TRAKT_API_KEY"

### Resultado JSON
[
  {
    "type": "movie",
    "score": 105.89171,
    "movie": {
      "title": "Before Sunrise",
      "year": 1995,
      "ids": {
        "trakt": 46,
        "slug": "before-sunrise-1995",
        "imdb": "tt0112471",
        "tmdb": 76
      }
    }
  }
]

## 3. The Cat API
The Cat API oferece imagens aleatórias de gatos. É uma API simples, mas popular para quem deseja criar aplicações divertidas envolvendo fotos de gatos. Além disso, ela suporta a categorização de imagens e informações sobre raças de gatos.

### Principais Funcionalidades
- Obter imagens aleatórias de gatos.
- Filtrar por raças ou categorias de imagens (como gatos fofos ou engraçados).

### Verbos HTTP Disponíveis
- **GET**: Buscar imagens aleatórias de gatos ou imagens filtradas por raça.
- **POST**: Enviar imagens de gatos para o banco de dados da API (autenticado).
- **DELETE**: Remover uma imagem enviada anteriormente (autenticado).

### Possibilidades
- Criar um aplicativo de galeria de gatos, exibindo imagens aleatórias ou por categorias.
- Desenvolver uma funcionalidade de votação para eleger o gato mais fofo do dia.
- Integrar com outras APIs para criar um fluxo de imagens animado (ex: exibir gatos quando alguém interage com o site).

### Comando `curl`
curl --request GET \
  --url "https://api.thecatapi.com/v1/images/search" \
  --header "x-api-key: YOUR_CAT_API_KEY"

### Resultado JSON
[
  {
    "breeds": [],
    "id": "3on",
    "url": "https://cdn2.thecatapi.com/images/3on.gif",
    "width": 500,
    "height": 281
  }
]
