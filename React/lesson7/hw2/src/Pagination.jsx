import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, itemsPerPage, totalItems }) => {

    const isPrevPageAvailable = currentPage !== 0
        ? false
        : true
    const isNextPageAvailable = () => {
        if (totalItems % 3 === 0 && totalItems !== 0) {
            return false
        } else return true
    }


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
                disabled={isNextPageAvailable()}
                onClick={goNext}
            >
                {isNextPageAvailable() || '→'}
            </button>
        </div>
    )
}

export default Pagination;