import React, {Component} from 'react';
import './Movie.scss'
import MovieList from "./MovieList/MovieList";
import WillWatch from "./WillWatch/WillWatch";
import { moviesData } from "../../moviesData";

//UI = (state, props)

class Movie extends Component {
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

    removeWillWatchHandler = movie => {
        const currentMoviesWillWatch = this.state.willWatchArr.filter((item) => {
            return item.id !== movie.id
        })

        this.setState({
            willWatchArr: currentMoviesWillWatch
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
            <div className={'Movie'}>
                <div className="row">
                    <div className="col-9">
                        <MovieList
                            moviesData = { this.state.movies }
                            removeMovies = { this.removeMoviesHandler }
                            addWillWatch = { this.addWillWatchHandler }
                            removeWillWatch = { this.removeWillWatchHandler }
                        />
                    </div>
                    <div className="col-3">
                        <p>Will watch - {this.state.willWatchArr.length}</p>
                        <WillWatch
                            WillWatchList={this.state.willWatchArr}
                        />
                    </div>
                </div>
            </div>
        )
    }


}

export default Movie