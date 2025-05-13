import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start, stop, reset,tick } from  "../../redux/timer-slice";
const Timer = () => {
    const dispatch = useDispatch()
    const { time, running } = useSelector((state) => state.timerReducer)
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(tick());
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);
    return (
        <div>
            <h2>{time}</h2>
                <button onClick={() => dispatch(stop())}>Pause</button>
                <button onClick={() => dispatch(start())}>Start</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Timer;
