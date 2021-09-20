import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
            
            <StarRating rating={movie.rating}/>
            <img src={movie.image}  alt="" />
            <h3> {movie.name} </h3>
            <p> {movie.date} </p>
            <Link to={`/movie/${movie.id}`}>
                <button>View Details</button>
            </Link>
            
        </div>
    )
}

export default MovieCard
