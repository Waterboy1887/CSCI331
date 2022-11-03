import { useState } from "react";


const Counter = (props) => {

    console.log(props)

    const [count, setCount] = useState(0)

    function incCount() {
        setCount(count + props.incBy)
    }

    return (
        <div>
            <p>Count by {props.incBy}</p>
            <div>{count}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default Counter;