import React from "react";
import "./MovieItem.scss"

function Image (props) {
  return (
      <img width="100%" src={props.src} alt={props.alt} />
  )
}

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            like: false,
            willWatch: false
        }
    }

    ToggleOverviewHandler = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    ToggleLikeHandler = () => {
        this.setState({
            like: !this.state.like,
        })
    }

  render() {
    return (
        <li className={' movieCard '}>
            <Image src={`https://image.tmdb.org/t/p/w500${this.props.movie.backdrop_path || this.props.movie.poster_path}`} alt={this.props.movie.title} />
            <div className={'movieCard__content'}>
                <p>{this.props.movie.title}</p>
                <div className={'movieCard__rank'}>
                    <span>Rating - <b>{this.props.movie.vote_average}</b></span>
                    <button type={"button"}
                            className={`LikeButton ${this.state.like ? 'LikeButton__success' : ' '}`}
                            onClick={this.ToggleLikeHandler}>
                        Like
                    </button>
                </div>
                <div className={""}>
                    {this.state.willWatch ?
                        <button
                            type={"button"}
                            className={'WillWatchButton remove'}
                            onClick={() => {
                                this.setState({
                                    willWatch: false
                                })
                                this.props.removeWillWatch(this.props.movie)
                            }}>
                            Remove Will Watch
                        </button>:
                        <button
                            type={"button"}
                            className={'WillWatchButton'}
                            onClick={() => {
                                this.setState({
                                    willWatch: true
                                })
                                this.props.addWillWatch(this.props.movie)
                            }}>
                            Add will watch
                        </button>
                    }
                </div>
                <div className="mt-4">
                    <button
                        type={'button'}
                        className={"RemoveMovie"}
                        onClick={this.props.removeMovies.bind(this, this.props.movie)}>
                        Remove movie
                    </button>
                    <button type="button" className={"btn btn-success w-100 mt-2"}
                            onClick={this.ToggleOverviewHandler}>
                        {this.state.show ? "Close overview" : "Open overview"}
                    </button>
                </div>
                <p>{this.state.show ? this.props.movie.overview : null}</p>
            </div>
        </li>
    )
  }
}

export default MovieItem;
