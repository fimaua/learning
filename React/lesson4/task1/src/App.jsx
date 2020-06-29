import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
    return (
        <>
            <Counter start={0} interval={10000} />
            <Counter start={17} interval={1000} />
            <Counter start={-60} interval={100} />
        </>
    );
}

export default App;