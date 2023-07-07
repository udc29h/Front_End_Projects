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

const showMovies = (results) => {
    movieBox.innerHTML = "";
    results.forEach((result) => {
        const imagePath = result.poster_path ? IMGPATH + result.poster_path : "img/image-missing.png";
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${imagePath}" alt="" />
            <div class="overlay">
                <div class="title">
                    <h2>${result.title}</h2>
                    <span>${result.vote_average}</span>
                </div>
                <h3>Overview:</h3>
                <p>${result.overview}</p>
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
