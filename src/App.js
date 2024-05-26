import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  }; 

  const resetHandler = () => {
    setValue(0);
  }

  return (
    <div class="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10">
      <div class="text-[#0398d4] font-medium text-[20px]">
        Increment and Decrement
      </div>
      <div class="bg-white flex text-[25px] text-[#344151] rounded-sm gap-12 p-3 px-5">
        <button class="border-r-2 border-[#bfbfbf] pr-5" onClick={decrement}>
          <i class="fa-solid fa-minus"></i>
        </button>
        <div class="font-bold">{value}</div>
        <button class="border-l-2 border-[#bfbfbf] pl-5" onClick={increment}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        className="bg-[#0398d4] text-white font-bold p-2 px-4 hover:bg-sky-600"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
