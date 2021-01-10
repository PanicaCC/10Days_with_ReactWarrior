import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem/MovieItem";
import "./App.scss"

//UI = (state, props)

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: moviesData,
            willWatchArr: []
        }

    }

    addWillWatchHandler = movie => {

        const willWatchUpdate = [...this.state.willWatchArr]
        const found = willWatchUpdate.some((el) => {
            return el.id === movie.id
        })

        if (!found) {
            willWatchUpdate.push(movie)
        }

        this.setState({
            willWatchArr: willWatchUpdate
        })
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
                <div className = {'container'}>
                    <div className="row">
                        <div className="col-9 d-flex flex-wrap">
                            {this.state.movies.map((movie) => {
                                return (
                                    <MovieItem
                                        key = { movie.id }
                                        movie = { movie }
                                        removeMovieHandler = { this.removeMoviesHandler }
                                        addWillWatchHandler = { this.addWillWatchHandler }
                                    />
                                )
                            })
                            }
                        </div>
                        <div className="col-3">
                            <p>Will watch - {this.state.willWatchArr.length}</p>
                        </div>
                    </div>
                </div>
                <div className={'movieFavorite'}>

                </div>
            </div>

        )
    }
}

export default App;
