import React from "react";
import './PaginationMovie.scss'

const PaginationMovie = props => {
    return (
        <div className="PaginationMovie">
            <button
                type={"button"}
                onClick={ () => props.prevPage() }
            >
                Prev
            </button>
            <button
                type={"button"}
                onClick={ () =>  props.nextPage() }
            >
                Next
            </button>
        </div>
    )
}

export default PaginationMovie