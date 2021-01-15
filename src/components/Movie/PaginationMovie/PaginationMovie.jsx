import React from "react";
import './PaginationMovie.scss'

const PaginationMovie = props => {
    return (
        <div className="PaginationMovie d-flex justify-content-between">
            <div className="PaginationMovie__buttons">
                <button
                    type={"button"}
                    onClick={ () => props.prevPage() }
                >
                    Prev
                </button>
                <button
                    className={'ml-2'}
                    type={"button"}
                    onClick={ () =>  props.nextPage() }
                >
                    Next
                </button>
            </div>
            <span><b>{props.pages} of {props.total_pages}</b></span>
        </div>
    )
}

export default PaginationMovie