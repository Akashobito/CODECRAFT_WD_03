import { useEffect, useRef, useState } from "react";
import "@fontsource-variable/montserrat/wght.css";
import "./App.css";
import { checkWin } from "./logic";

function App() {
  const [boxValue, setBoxValue] = useState("x");
  const [clickCount, setClickCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [moveCount, setMoveCount] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [result, setResult] = useState("");
  const [array, setArray] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleClick = (event, first, second) => {
    // console.log(event.currentTarget)
    // console.log(first,second)
    // const xoIcon = event.currentTarget.lastChild;
    const index = event.target.innerText;
    clickCount[index] = 1;
    setClickCount([...clickCount]);

    setMoveCount((prev) => prev + 1);

    if (boxValue === "x") {
      array[first][second] = "x";
      setArray([...array]);
      // xoIcon.classList.add(`fa-${array[first][second]}`);
      // xoIcon.classList.remove("fa-o");
      setBoxValue("o");
    } else {
      array[first][second] = "o";
      setArray([...array]);
      // xoIcon.classList.remove("fa-x");
      // xoIcon.classList.add("fa-o");
      setBoxValue("x");
    }
  };

  // const handleCPUMove = ()=>{
  //   const {first} = randomNumbers();
  //   const {second} = randomNumbers();

  //   function randomNumbers(){
  //      let first;
  //      let second;
  //     const randomNumber1 = Number(Math.random().toFixed(1));
  //     if(randomNumber1 >0 && randomNumber1 <= 0.3){
  //       first = 0
  //     }else if(randomNumber1 >0.3 && randomNumber1 <= 0.6){
  //       first = 1
  //     }else{
  //       first = 2
  //     }
    
  //     const randomNumber2 = Number(Math.random().toFixed(1));
  //     if(randomNumber2 >0 && randomNumber2 <= 0.3){
  //       second = 0;
  //     }else if(randomNumber2 >0.3 && randomNumber2 <= 0.6){
  //       second = 1;
  //     }else{
  //       second = 2;
  //     }
  //     return {first,second}
  //   }
  //   return {first,second}
  // } 
  
  // useEffect(()=>{
  //   const findOMove = ()=>{
  //     const {first} = handleCPUMove();
  //     const {second} = handleCPUMove();
  //     if(array[first][second] != 'x'){
  //       array[first][second] = 'o'
  //       setArray([...array])
  //     }else {
  //       findOMove();
  //     }
  //   }
  //   findOMove();
  // },[clickCount])


  const handleReset = () => {
    const empty = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    setArray(empty);
    setIsEnd(false);
    setClickCount([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setMoveCount(0);
    setBoxValue("x");
  };

  useEffect(() => {
    if (moveCount > 4) {
      const result = checkWin(array, moveCount);
      // console.log(result);
      if (result === "x win") {
        setClickCount([1, 1, 1, 1, 1, 1, 1, 1, 1]);
        setResult("You Win");
        setIsEnd(true);
        setMoveCount(0);
        setBoxValue("x");
      } else if (result === "o win") {
        setClickCount([1, 1, 1, 1, 1, 1, 1, 1, 1]);
        setResult("You Loose");
        setIsEnd(true);
        setMoveCount(0);
        setBoxValue("x");
      } else if (result === "draw") {
        setClickCount([1, 1, 1, 1, 1, 1, 1, 1, 1]);
        setResult("Draw");
        setIsEnd(true);
        setMoveCount(0);
        setBoxValue("x");
      }
    }
  }, [moveCount]);

  return (
    <>
      {isEnd && (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 w-full h-[100vh] backdrop-blur-2xl">
          <div className="bg-gray-600 w-60 h-50 rounded-2xl text-white flex flex-col justify-center items-center space-y-3 font-Roboto font-semibold tracking-wider">
            <p className="text-xl">Match Ended!!</p>
            <p>{result}</p>
            <button
              onClick={handleReset}
              className="bg-orange-300 mt-3 px-5 py-1 rounded-sm cursor-pointer"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center w-full h-[100vh]">
        <p className="text-black font-Roboto text-3xl font-semibold mb-10">TIC-TAC-TOE</p>
        <div className="flex space-x-10 mb-8">
        <p className="border-2 text-black font-Roboto font-semibold mt-3 px-5 py-1 rounded-sm cursor-pointer">You: X</p>
        <p className="border-2 text-black font-Roboto font-semibold mt-3 px-5 py-1 rounded-sm cursor-pointer">Appo: O</p>
        </div>
        <div className="grid grid-cols-3 w-80 h-70 [&_div]:cursor-pointer [&_div]:border-1 border-2">
          <div
            onClick={
              clickCount[0] < 1
                ? (event) => {
                    handleClick(event, 0, 0);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">0</span>
            <i className="fa-solid">{array[0][0]}</i>
          </div>
          <div
            onClick={
              clickCount[1] < 1
                ? (event) => {
                    handleClick(event, 0, 1);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">1</span>
            <i className="fa-solid">{array[0][1]}</i>
          </div>
          <div
            onClick={
              clickCount[2] < 1
                ? (event) => {
                    handleClick(event, 0, 2);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">2</span>
            <i className="fa-solid">{array[0][2]}</i>
          </div>
          <div
            onClick={
              clickCount[3] < 1
                ? (event) => {
                    handleClick(event, 1, 0);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">3</span>
            <i className="fa-solid">{array[1][0]}</i>
          </div>
          <div
            onClick={
              clickCount[4] < 1
                ? (event) => {
                    handleClick(event, 1, 1);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">4</span>
            <i className="fa-solid">{array[1][1]}</i>
          </div>
          <div
            onClick={
              clickCount[5] < 1
                ? (event) => {
                    handleClick(event, 1, 2);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">5</span>
            <i className="fa-solid">{array[1][2]}</i>
          </div>
          <div
            onClick={
              clickCount[6] < 1
                ? (event) => {
                    handleClick(event, 2, 0);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">6</span>
            <i className="fa-solid">{array[2][0]}</i>
          </div>
          <div
            onClick={
              clickCount[7] < 1
                ? (event) => {
                    handleClick(event, 2, 1);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">7</span>
            <i className="fa-solid">{array[2][1]}</i>
          </div>

          <div
            onClick={
              clickCount[8] < 1
                ? (event) => {
                    handleClick(event, 2, 2);
                  }
                : null
            }
            className="box flex justify-center items-center"
          >
            <span className="opacity-0">8</span>
            <i className="fa-solid">{array[2][2]}</i>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="bg-orange-300 text-black font-Roboto font-semibold mt-3 px-5 py-1 rounded-sm cursor-pointer"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
