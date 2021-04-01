import React, {useEffect, useState} from 'react';

function ClickCounter() {
    const[count, setCount] = useState(0);
    const[time, setTime] = useState(10);
    // const[started, setStarted] = useState(false);

    // const decrTime = () => {
    //     setTime(time - 1);
    // }

    const incrCount = () => {
        setCount(count + 1);
    }

    return (
        <div class = "p-5 text-center bg-white">
            <h1 class="mb-3">How Fast Can You Click?</h1>
            <h3>Time: {time}</h3>
            <h3>Click count: {count}</h3>
            <button class="btn btn-primary" onClick={incrCount}>Click Me!</button>
        </div>
    )
}

export default ClickCounter;