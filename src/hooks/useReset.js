import { useDispatch } from "react-redux";
import { reset } from "../features/counters/counterSlice";

const useReset = (ref) => {
  const dispatch = useDispatch();
   const  handleReset = () =>{
        dispatch(reset());
        if(ref.current) {
            ref.current.value = ''
            ref.current.focus();
        }
     }
     return handleReset;
};

export default useReset;