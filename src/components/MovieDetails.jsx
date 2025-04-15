import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'ed834efddee23023ecaf80bf196d54a0';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded mr-3">
              {movie.vote_average.toFixed(1)}
            </span>
            <span>{movie.release_date.split('-')[0]} • {movie.runtime} mins</span>
          </div>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <div className="flex flex-wrap gap-2">
            {movie.genres.map(genre => (
              <span key={genre.id} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
