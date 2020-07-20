import React, { useState, useEffect } from "react";

const Dimensions = () => {
    const [demencions, setDimencions] = useState({
        width: null,
        height: null,
    })
    useEffect(() => {
        const { innerHeight, innerWidth } = window;

        setDimencions({
            width: innerWidth,
            height: innerHeight,
        });

        const handleResize = e => {
            const { innerWidth, innerHeight } = e.target
            setDimencions({
                width: innerWidth,
                height: innerHeight,
            });
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const { width, height } = demencions
    return <div className="dimensions">
        {`${width}px - ${height}px`}
    </div>
}

export default Dimensions;