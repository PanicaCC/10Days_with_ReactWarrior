import React, {Component} from 'react';
import './Movie.scss'
import MovieList from "./MovieList/MovieList";
import WillWatch from "./WillWatch/WillWatch";
import MovieTab from "./MovieTab/MovieTab";
import PaginationMovie from "./PaginationMovie/PaginationMovie";
import {API_KEY, API_URL} from '../../Utils/api'

//UI = (state, props)
class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total_pages: null,
            page_num: 1,
            isLoaded: false,
            movies: [],
            willWatchArr: [],
            sort: 'popularity.desc'
        }

    }

    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sort !== this.state.sort){
            this.getMovies()
        }
    }

    getMovies = () => {
        fetch(`${API_URL}discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort}&page=${this.state.page_num}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.results,
                        total_pages: result.total_pages,
                        page_num: result.page
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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

    updateSortBy = value => {
        this.setState({
            sort: value
        })
    }

    prevPageHandler = () => {
        if (this.state.page_num > 1) {
            this.setState({
                page_num: this.state.page_num--
            },
                () => { this.getMovies() })
        }
    }

    nextPageHandler = () => {
        if (this.state.page_num > this.state.total_pages) {
            this.setState({
                page_num: this.state.page_num +=1
            },
            () => {
                this.getMovies()
            })
        }
    }

    render() {

        return (
            <div className={'Movie'}>
                <div className="row">
                    <div className="col-12">
                        <div className="Movie__header">
                            <div className="col-9">
                                <MovieTab
                                    sort = { this.state.sort }
                                    updateSortBy = { this.updateSortBy }
                                />
                            </div>
                            <div className="col-3 text-right">
                                <span className={'w-100'}>Will watch - {this.state.willWatchArr.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <MovieList
                            moviesData = { this.state.movies }
                            removeMovies = { this.removeMoviesHandler }
                            addWillWatch = { this.addWillWatchHandler }
                            removeWillWatch = { this.removeWillWatchHandler }
                        />

                        <PaginationMovie
                            pages = { this.state.page_num }
                            total_pages = { this.state.total_pages }
                            prevPage = { this.prevPageHandler }
                            nextPage = { this.nextPageHandler }
                        />
                    </div>
                    <div className="col-3">
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