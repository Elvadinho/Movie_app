import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl p-5 max-w-lg w-11/12 transform scale-95 transition-all"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">{movie.title}</h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400"
          >
            &times;
          </button>
        </div>

        {/* Poster */}
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : "/no-movie.png"
          }
          className="rounded-lg mb-4"
        />

        <h3 className="text-xl font-bold text-gray-50 mb-1">Overview</h3>
        <p className="text-gray-300 mb-3">{movie.overview}</p>

        <p className="text-sm text-gray-400">
          Release: {movie.release_date} <br />
          Language: {movie.original_language.toUpperCase()} <br />
          Rating: ⭐ {movie.vote_average.toFixed(2)} ({movie.vote_count} votes)
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
