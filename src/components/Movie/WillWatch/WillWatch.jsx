import React from 'react';
import './WillWatch.scss'

const WillWatch = props => {
    return (
        <div className={'WillWatch'}>
            <ul>
                {props.WillWatchList.map((movie => {
                    return (
                        <li key={ movie.id }>
                            { movie.original_title }
                        </li>
                        )
                }))}
            </ul>
        </div>
    )
}

export default WillWatch