import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg truncate">{movie.title}</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">⭐</span>
            <span className="ml-1">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;