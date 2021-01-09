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
    render() {
        return (
            <div>
                <div className = {'movieList'}>
                    {this.state.movies.map((movie, index) => {
                        return (
                            <MovieItem
                                key = { index }
                                name = { movie.original_title }
                                alt = { movie.title }
                                overview = { movie.overview }
                                backdrop = { movie.backdrop_path }
                                rank = { movie.vote_average }
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
