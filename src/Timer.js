import React, {useEffect, useState} from 'react';

function Timer(props) {

    const[time, setTime] = useState(10);

    useEffect(() => {
        if(time > 0 && props.started) {  
            setTimeout(decrTime, 1000)
        }
    })

    const decrTime = () => {
         setTime(time - 1);
    }

    return (
        <div>
            <h3>Time: {time}</h3>
        </div>
    )
}

export default Timer