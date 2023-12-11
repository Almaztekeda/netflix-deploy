const API_KEY = "61da0da14333e35a4d76bc983ce71acc"



const requests = {
    fetchTrending: `/trending/all/week?api_key=61da0da14333e35a4d76bc983ce71acc&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=61da0da14333e35a4d76bc983ce71acc&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=61da0da14333e35a4d76bc983ce71acc&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=61da0da14333e35a4d76bc983ce71acc&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=61da0da14333e35a4d76bc983ce71acc&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=61da0da14333e35a4d76bc983ce71acc&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=61da0da14333e35a4d76bc983ce71acc&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=61da0da14333e35a4d76bc983ce71acc&with_genres=99`,

}
export default requests

