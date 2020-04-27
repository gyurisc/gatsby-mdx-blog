import React, {useState} from 'react'

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h3>click the button if you liked the post</h3>
            <h3>likes {count}</h3>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

export default Counter