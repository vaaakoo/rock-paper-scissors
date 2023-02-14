import ChooseContent from "@/components/ChooseContent";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  const [counter, setCounter] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  const choices = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (!userChoice) return;
    setThinking(true);

    setTimeout(() => {
      setThinking(false);
      const randomIndex = Math.floor(Math.random() * choices.length);
      setComputerChoice(choices[randomIndex]);
      if (userChoice === "rock") {
        if (choices[randomIndex] === "paper") {
          setResult("You lose");
          setCounter2(counter2 + 1);
        } else if (choices[randomIndex] === "scissors") {
          setResult("You win");
          setCounter(counter + 1);
        } else {
          setResult("Draw");
        }
      } else if (userChoice === "paper") {
        if (choices[randomIndex] === "scissors") {
          setResult("You lose");
          setCounter2(counter2 + 1);
        } else if (choices[randomIndex] === "rock") {
          setResult("You win");
          setCounter(counter + 1);
        } else {
          setResult("Draw");
        }
      } else if (userChoice === "scissors") {
        if (choices[randomIndex] === "rock") {
          setResult("You lose");
          setCounter2(counter2 + 1);
        } else if (choices[randomIndex] === "paper") {
          setResult("You win");
          setCounter(counter + 1);
        } else {
          setResult("Draw");
        }
      }
      if (counter >= 3 || counter2 >= 3) {
        setCounter(0);
        setCounter2(0);
      }
    }, 1000);
  }, [userChoice]);

  const play = (choice: string) => {
    setUserChoice(choice);
  };

  const handleClick = (choice: string) => () => {
    play(choice);
  };

  const counterZero = () => {
    setCounter(0);
    setCounter2(0);
  };

  return (
    <div className=" min-h-screen w-full m-0 box-border bg-cyan-900">
      <Header />

      <div className="flex flex-col gap-14 md:gap-4 pt-6 mx-auto px-2 items-center box-border md:w-[600px]">
        {/* choose content */}

        <header className="flex flex-row gap-4 md:gap-6">
          <ChooseContent handleClick={handleClick} choice="rock" />
          <ChooseContent handleClick={handleClick} choice="paper" />
          <ChooseContent handleClick={handleClick} choice="scissors" />
        </header>
        {/* -|- */}

        {/* result content */}
        <main className="flex flex-row relative gap-4 mt-14 md:mt-6 md:gap-6 bottom-3 justify-center items-center">
          {userChoice && (
            <div className="max-w-full">
              <Image
                className=" w-24 h-20 md:w-40 md:h-40"
                src={`/${userChoice}.png`}
                alt="Rock"
                width={150}
                height={10}
              />
            </div>
          )}

          <div>
            {thinking ? (
              <div
                className="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-purple-500 border-t-transparent"
              ></div>
            ) : (
              <div className="text-2xl text-center justify-center flex items-center text-slate-200 w-28 h-24 md:w-56 md:h-52">
                <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700 text-xl md:text-4xl">
                  {result}
                </div>
              </div>
            )}
          </div>

          {computerChoice && !thinking && (
            <Image
              className=" w-24 h-20 md:w-48 md:h-40"
              src={`/${computerChoice}.png`}
              alt="comp"
              width={150}
              height={150}
            />
          )}
        </main>

        <div className="flex text-3xl md:text-5xl font-extrabold gap-5 flex-row justify-center items-center">
          {counter >= 0 || counter2 >= 0 ? (
            counter === 3 || counter2 === 3 ? (
              <div className="flex flex-col text-white">
                <p>End Game</p>
                <button onClick={counterZero}>Restart</button>
              </div>
            ) : (
                <div className=" flex gap-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 ">
                  <div>{counter}</div>
                  <div>:</div>
                  <div>{counter2}</div>
              </div>
            )
          ) : null}
        </div>
      </div>
      <Footer userChoice={userChoice} computerChoice={computerChoice} result={result}/>
    </div>
  );
};

export default RockPaperScissors;
