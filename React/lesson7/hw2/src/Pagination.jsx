import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, itemsPerPage, totalItems }) => {
    const isPrevPageAvailable = currentPage !== 0
        ? false
        : true
    return (
        <div className="pagination">
            <button className="btn"
                disabled={isPrevPageAvailable}
                onClick={goPrev}
            >
                {isPrevPageAvailable || '←'}
            </button>
            <span className="pagination__page">{currentPage + 1}</span>
            <button className="btn" onClick={goNext}>→</button>
        </div>
    )
}

export default Pagination;