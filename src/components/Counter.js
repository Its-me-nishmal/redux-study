import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,degrement } from "../features/counters/counterSlice";
import useReset from "../hooks/useReset";
import useVoiceCommands from "../hooks/useCommand";
import useClass from "../hooks/useClass";





function Counter() {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    const ref = useRef();
    const handleReset = useReset(ref)
    useVoiceCommands();
    const handleZero = () => {
        if ( isNaN(Number(ref.current.value)) || Number(ref.current.value) < 0 || ref.current.value.includes(".")) {
            ref.current.value = 0;
        }
    }

    return (
        <div className={useClass(count)}>
            <div>
            <p className="count">{count}</p>
            </div>
           
            <div>
            <button onClick={()=>dispatch(increment(ref.current.value))} className="increment">increment</button>
            <button onClick={handleReset} className="reset">reset</button>
            <button onClick={()=>dispatch(degrement(ref.current.value))} className="degrement" disabled={count <= 0}>degrement</button>
            <input type="text" placeholder="enter defualt value" ref={ref} className="resetInput" onChange={handleZero}/>
            </div>
        </div>
    )
}
export default Counter;