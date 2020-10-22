const API_KEY = "6c3739650bac4adda84d23b443d8c007";

// here we store the url for each movie category in a property
// we will use these properties in results.js
export default {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	//the property fetchTrending stores the url for trending movies
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	//the property fetchTopRated  stores the url for Top Rated
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	//the property fetchActionMovies  stores the url for Action Movies
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	//the property fetchComedyMovies  stores the url for Comedy Movies
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	//the property fetchHorrorMovies  stores the url for Horror Movies
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	//the property fetchRomanceMovies  stores the url for Romance Movies
	fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	//the property fetchMysteryMovies stores the url for Mystery movies
	fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	//the property fetchSciFiMovies  stores the url for SciFi Movies
	fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	//the property fetchWesternMovies  stores the url for Western Movies
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	//the property fetchAnimationMovies  stores the url for Animation Movies
	fetchTvMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
	//the property fetchTvMovies  stores the url for Tv Movies
};
