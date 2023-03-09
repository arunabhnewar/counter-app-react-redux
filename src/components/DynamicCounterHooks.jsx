import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/dynamicCounter/dynamicActions";

const dynamicCounterHooks = ({ id }) => {
  const count2 = useSelector(state => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = value => {
    dispatch(increment(value));
    console.log(value);
  };

  const decrementHandler = value => {
    console.log(value);
    dispatch(decrement(value));
  };

  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      <div className='text-2xl font-semibold'>
        Dynamic Counter id number is {id}
      </div>
      <div className='text-2xl font-semibold'>{count2}</div>
      <div className='flex space-x-3'>
        <button
          className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
          onClick={() => incrementHandler(5)}>
          Increment
        </button>
        <button
          className='bg-red-400 text-white px-3 py-2 rounded shadow'
          onClick={() => decrementHandler(3)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default dynamicCounterHooks;
