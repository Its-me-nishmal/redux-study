import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,degrement } from "../features/counters/counterSlice";
import useReset from "../hooks/useReset";
import useVoiceCommands from "../hooks/useCommand";




function Counter() {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    const ref = useRef();
    const handleReset = useReset(ref)
    useVoiceCommands();
    
    let backgroundClass = "container";
    if (count >= 20) {
        backgroundClass += " background-thousand";
    } else if (count >= 10) {
        backgroundClass += " background-hundred";
    }

    return (
        <div className={backgroundClass}>
            <div>
            <p className="count">{count}</p>
            </div>
           
            <div>
            <button onClick={()=>dispatch(increment(ref.current.value))} className="increment">increment</button>
            <button onClick={handleReset} className="reset">reset</button>
            <button onClick={()=>dispatch(degrement(ref.current.value))} className="degrement">degrement</button>
            <input type="text" placeholder="enter defualt value" ref={ref} className="resetInput"/>
            </div>
        </div>
    )
}
export default Counter;