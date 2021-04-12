import React, {useState, useEffect} from 'react';

function ClickCounter() {
    const[count, setCount] = useState(0);
    const[started, setStarted] = useState(false);
    const[time, setTime] = useState(10);

    useEffect(() => {
        if(time > 0 && started) {  
            setTimeout(decrTime, 1000);
        } 
    })

    const decrTime = () => {
        setTime(time - 1);
        if(time === 0) {
            setStarted(false);
        }
    } 

    const start = () => {
        if(time === 10) { 
            setStarted(true);
        }
    }

    const incrCount = () => {
        setCount(count + 1);
    }

    return (
        <div class = "p-5 text-center bg-white">
            <h1 class="mb-3">How Fast Can You Click?</h1>
            <h3>Time: {time}</h3>
            <h3>Click count: {count}</h3>
            <button class="btn btn-primary" onClick={started ? incrCount : start}>Click Me!</button>
        </div>
    )
}

export default ClickCounter;