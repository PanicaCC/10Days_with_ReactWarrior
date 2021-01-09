import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem/MovieItem";
import "./App.scss"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: moviesData
        }

    }

    removeMoviesHandler = movie => {
        const currentMoviesList = this.state.movies.filter((item) => {
            return item.id !== movie.id
        })
        this.setState({
            movies: currentMoviesList
        })
    }

    render() {
        return (
            <div>
                <div className = {'movieList'}>
                    {this.state.movies.map((movie) => {
                        return (
                            <MovieItem
                                key = { movie.id }
                                movie = { movie }
                                removeMovieHandler = { this.removeMoviesHandler }
                            />
                        )
                    })
                    }
                </div>
                <div className={'movieFavorite'}>

                </div>
            </div>

        )
    }
}

export default App;
