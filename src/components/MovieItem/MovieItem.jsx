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
            like: false
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
        <div className={"movieCard"}>
          <Image src={`https://image.tmdb.org/t/p/w500${this.props.backdrop}`} alt={this.props.title} />
          <p>{this.props.name}</p>
          <p>Rank - {this.props.rank}</p>
            <div className={"movieCard__btn"}>
                <button type="button" className={"btn btn-secondary"}
                        onClick={this.ToggleOverviewHandler}>
                    {this.state.show ? "Close overview" : "Open overview"}
                </button>
                <button type={"button"}
                        className={ this.state.like ? "btn-primary btn": "btn btn-secondary"}
                        onClick={this.ToggleLikeHandler}>
                    Like
                </button>
            </div>
          <p>{this.state.show ? this.props.overview : null}</p>
        </div>
    )
  }
}

export default MovieItem;
