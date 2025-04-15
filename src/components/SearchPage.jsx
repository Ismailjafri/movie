import { useState } from 'react';
import MovieCard from './MovieCard';

const API_KEY = 'your_api_key_here';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => setResults(data.results));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Movies</h1>
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="flex-grow p-3 rounded-l-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={searchMovies}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-r-lg transition"
          >
            Search
          </button>
        </div>
      </div>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No results found</p>
      )}
    </div>
  );
};

export default SearchPage;