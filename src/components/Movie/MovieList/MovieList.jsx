import React from 'react';
import './MovieList.scss'
import MovieItem from "./MovieItem/MovieItem";

const MovieList = props => {
    return (
        <ul className={'MovieList'}>
            {props.moviesData.map((movie) => {
                return (
                    <MovieItem
                        key = { movie.id }
                        movie = { movie }
                        removeMovies = { props.removeMovies }
                        addWillWatch = { props.addWillWatch }
                        removeWillWatch = { props.removeWillWatch }
                    />
                )
            })}

        </ul>
    )
}

export default MovieList