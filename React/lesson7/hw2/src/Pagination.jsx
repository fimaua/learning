import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, itemsPerPage, totalItems }) => {

    const isPrevPageAvailable = currentPage !== 0
        ? false
        : true
    const isNextPageAvailable = totalItems.length < itemsPerPage
        ? true
        : false

    return (
        <div className="pagination">
            <button className="btn"
                disabled={isPrevPageAvailable}
                onClick={goPrev}
            >
                {isPrevPageAvailable || '←'}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button className="btn"
                disabled={isNextPageAvailable}
                onClick={goNext}
            >
                {isNextPageAvailable || '→'}
            </button>
        </div>
    )
}

export default Pagination;