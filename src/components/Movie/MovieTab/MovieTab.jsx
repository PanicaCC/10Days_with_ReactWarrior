import React from 'react'
import './MovieTab.scss'

const sortItems = [
    ['popularity.desc', 'Most popular'],
    ['release_date.desc', 'Release date'],
    ['vote_average.desc', 'Vote average']
]

// 'popularity.desc', 'release_date.desc', 'vote_average.desc'

const MovieTab = props => {
    return (
        <ul className="nav nav-pills nav-fill">
            {sortItems.map((key,index) => {
                return (
                    <li key={index} className="nav-item">
                        <button
                            type={'button'}
                            className={`nav-link ${props.sort === sortItems[index][0] ? "active" : ''}`}
                            onClick={props.updateSortBy.bind(this, sortItems[index][0])}
                        >
                            {sortItems[index][1]}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieTab

