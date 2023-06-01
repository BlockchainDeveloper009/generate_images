//import axios from 'axios';
let axios = require('axios')

interface MovieSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
}

class OMDBClient {
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseURL = 'http://www.omdbapi.com/';
  }

  async searchMovie(query: string): Promise<MovieSearchResult[] | null> {
    const params = {
      apikey: this.apiKey,
      s: query,
    };

    try {
      const response = await axios.get(this.baseURL, { params });
      const { data } = response;
      if (response.status === 200 && data.Response === 'True') {
        return data.Search;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error occurred during movie search:', error);
      return null;
    }
  }

  async getMovieDetails(imdbID: string): Promise<MovieDetails | null> {
    const params = {
      apikey: this.apiKey,
      i: imdbID,
    };

    try {
      const response = await axios.get(this.baseURL, { params });
      const { data } = response;
      if (response.status === 200 && data.Response === 'True') {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error occurred while fetching movie details:', error);
      return null;
    }
  }
}

// Usage example
const client = new OMDBClient('9b317bf7');
(async () => {
  const movies = await client.searchMovie('Harry Potter');
  if (movies) {
    for (const movie of movies) {
      const movieDetails = await client.getMovieDetails(movie.imdbID);
      if (movieDetails) {
        console.log(`Title: ${movieDetails.Title}`);
        console.log(`Year: ${movieDetails.Year}`);
        console.log(`IMDb Rating: ${movieDetails.imdbRating}`);
        console.log('---');
      }
    }
  }
})();

console.log(client);