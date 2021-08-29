import React, {useState, useEffect} from 'react';

function ClickCounter() {
    const[count, setCount] = useState(0);
    const[started, setStarted] = useState(false);
    const[time, setTime] = useState(10);

    useEffect(() => {
        if(time > 0 && started) {  
            setTimeout(decrTime, 1000);
        } else if (time === 0) {
            stop();
        }
    })

    const decrTime = () => {
        setTime(time - 1);
    } 

    const start = () => {
        if(time === 10) { 
            incrCount(count + 1);
            setStarted(true);
        }
    }

    const stop = () => {
        setStarted(false);
    }

    const incrCount = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
        setTime(10);
    }

    return (
        <div class = "p-5 text-center bg-white">
            <h1 class="mb-3">How Fast Can You Click?</h1>
            
            <h3>
                
                {/* <button class="btn btn-danger" onClick={reset} style={{margin:'5px', fontSize:'25px'}}>--</button>
                <button class="btn btn-danger" onClick={reset} style={{margin:'5px', fontSize:'25px'}}>-</button> */}
                Time: 
                <span style={{color: (started ? "green" : "black")}}> {time}</span>
                {/* <button class="btn btn-success" onClick={reset} style={{margin:'5px', fontSize:'25px'}}>+</button>
                <button class="btn btn-success" onClick={reset} style={{margin:'5px', fontSize:'25px'}}>++</button> */}
            </h3>
            

            <h3>Click count: {count}</h3>
            <button class="btn btn-danger" onClick={started ? stop : reset}>{started ? "Stop" : "Reset"}</button>
            <button class="btn btn-primary" onClick={started ? incrCount : start} >Click Me!</button>
        </div>
    )
}

export default ClickCounter;