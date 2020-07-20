import React, { useState } from "react";
import Clock from "./Clock.jsx"

const App = () => {
    const [visible, setVisible] = useState(true)
    const toggle = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            <div>{visible && <Clock location="New York" offset={-5} />}</div>
            <div>{visible && <Clock location="Kyiv" offset={2} />}</div>
            <div>{visible && <Clock location="London" offset={0} />}</div>
        </div>
    )
}

export default App;