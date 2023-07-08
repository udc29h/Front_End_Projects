const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector("#moviebox");

const getMovies = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        showMovies(data.results);
    } catch (error) {
        console.log("Error fetching movies:", error);
    }
};

const getGenres = async (genreIds) => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1");
        const data = await response.json();
        const genres = data.genres.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name);
        return genres;
    } catch (error) {
        console.log("Error fetching genres:", error);
        return [];
    }
};

const showMovies = (results) => {
    movieBox.innerHTML = "";
    results.forEach(async (result) => {
        const imagePath = result.poster_path ? IMGPATH + result.poster_path : "./missing-image";
        const genres = await getGenres(result.genre_ids);
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${imagePath}" alt="" />
            <div class="overlay">
                <div class="title">
                    <h3>${result.original_title}</h3>
                    <span class="rating">${result.vote_average}</span>
                </div>
                <h4>Genres:</h4>
                <p>${genres.join(", ")}</p>
            </div>
        `;
        movieBox.appendChild(box);
    });
};

const searchMovies = (query) => {
    const url = SEARCHAPI + query;
    getMovies(url);
};

document.querySelector("#search").addEventListener("keyup", (event) => {
    const query = event.target.value.trim();
    if (query !== "") {
        searchMovies(query);
    } else {
        getMovies(APIURL);
    }
});

getMovies(APIURL);
