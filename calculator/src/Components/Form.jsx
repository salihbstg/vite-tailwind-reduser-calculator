import { useReducer } from "react";
import {reduser,initialState} from "../Reduser/Redus";
const Form = () => {

  const [state, dispatch] = useReducer(reduser, initialState);
  return (
    <form className="w-96 gap-4 mx-auto bg-gray-500 text-white flex flex-col items-center justify-center h-96 p-5">
      <div className="border-b-2 gap-1 border-black w-full flex flex-col">
        <label className="mx-auto text-2xl" htmlFor="number1">
          SAYI 1
        </label>
        <div className=" text-center mb-3 mx-auto">
          <input
            onChange={(event) => {
              dispatch({ type: "TYPE1", payload: Number(event.target.value) });
            }}
            className="text-center text-black"
            type="number"
            id="number1"
          />
        </div>
      </div>
      <div className="border-b-2 gap-1 w-full border-black flex flex-col">
        <label className="mx-auto text-2xl" htmlFor="number2">
          SAYI 2
        </label>
        <div className="text-center mb-3 mx-auto">
          <input
            onChange={(event) => {
              dispatch({ type: "TYPE2", payload: Number(event.target.value) });
            }}
            type="number"
            className="text-center text-black"
            id="number2"
          />
        </div>
      </div>
      <div className="border-b-2 p-5 border-black w-full flex flex-col items-center">
        <button onClick={event=>{
          event.preventDefault();
          dispatch({type:"RESULT",payload:state.num1+state.num2})
        }} className="bg-yellow-700 w-72 py-3">Topla</button>
      </div>
      <div>
        <span className="text-5xl">{state.result}</span>
      </div>
    </form>
  );
};

export default Form;
