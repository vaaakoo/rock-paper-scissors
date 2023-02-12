import Image from "next/image";
import React, { useEffect, useState } from "react";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);

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
        } else if (choices[randomIndex] === "scissors") {
          setResult("You win");
        } else {
          setResult("Draw");
        }
        console.log(userChoice)
      } else if (userChoice === "paper") {
        if (choices[randomIndex] === "scissors") {
          setResult("You lose");
        } else if (choices[randomIndex] === "rock") {
          setResult("You win");
        } else {
          setResult("Draw");
        }
      } else if (userChoice === "scissors") {
        if (choices[randomIndex] === "rock") {
          setResult("You lose");
        } else if (choices[randomIndex] === "paper") {
          setResult("You win");
        } else {
          setResult("Draw");
        }
      }
    }, 1000);
  }, [userChoice]);

  const play = (choice: string) => {
    setUserChoice(choice);
  };

  return (
    <div className="h-screen w-full m-0 box-border bg-cyan-900">
      <div className="flex flex-col gap-8 md:gap-14 pt-6 mx-auto px-2 items-center box-border md:w-[600px]">
        <h1 className="text-2xl md:text-6xl font-extrabold text-slate-300">
          Rock-Paper-Scissors
        </h1>
        <div className="flex flex-row gap-4 md:gap-12">
          <Image
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 w-28 h-24 md:w-56 md:h-52"
            src="/rock.png"
            alt="Rock"
            width={150}
            height={70}
            onClick={() => play("rock")}
          />
          <Image
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 w-28 h-24 md:w-56 md:h-52"
            src="/paper.png"
            alt="Paper"
            width={150}
            height={70}
            onClick={() => play("paper")}
          />
          <Image
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 w-28 h-24 md:w-56 md:h-52"
            src="/scissors.png"
            alt="Scissors"
            width={150}
            height={70}
            onClick={() => play("scissors")}
          />
        </div>
        <div className="flex flex-row gap-4 md:gap-12">
          {userChoice && (
            <Image
            className=" w-28 h-24 md:w-56 md:h-52"
              src={`/${userChoice}.png`}
              alt="Rock"
              width={150}
              height={150}
            />
          )}

          <div>
            {thinking ? (
              <div
                className="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-purple-500 border-t-transparent"
              ></div>
            ) : (
              <div className="text-2xl text-center justify-center flex items-center text-slate-200 w-28 h-24 md:w-56 md:h-52">
          {result}
              </div>
            )}
          </div>

          {computerChoice && !thinking && (
            <Image
            className=" w-28 h-24 md:w-56 md:h-52"
              src={`/${computerChoice}.png`}
              alt="comp"
              width={150}
              height={150}
            />
          )}
        </div>
        <div>
          <p>Your choice: {userChoice}</p>
          <p>Computer`s choice: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
