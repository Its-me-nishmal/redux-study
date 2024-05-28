import { useEffect } from "react";
import { useDispatch } from "react-redux";
import annyang from "annyang";
import { increment, degrement,reset } from "../features/counters/counterSlice";

const useVoiceCommands = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (annyang) {
      const commands = {
        'increment *num': (num) => {
          dispatch(increment(num || 1));
        },
        'decrement *num': (num) => {
          dispatch(degrement(num || 1));
        },
        'stop': () => {
          annyang.abort();
        },
        'reset': () => {
          console.log("reset");
          dispatch(reset());
        },
      };

      annyang.addCommands(commands);
      annyang.start();
      console.log('Voice commands started');
    } else {
      console.log("Annyang not available");
    }

    return () => {
      if (annyang) {
        annyang.abort();
        console.log('Voice commands stopped');
      }
    };
  }, [dispatch]);
};

export default useVoiceCommands;
