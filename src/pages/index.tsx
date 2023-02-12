import React, { useState } from "react";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choices = ["rock", "paper", "scissors"];

  const play = (choice: string) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);

    if (choice === "rock") {
      if (choices[randomIndex] === "paper") {
        setResult("You lose");
      } else if (choices[randomIndex] === "scissors") {
        setResult("You win");
      } else {
        setResult("Draw");
      }
    } else if (choice === "paper") {
      if (choices[randomIndex] === "scissors") {
        setResult("You lose");
      } else if (choices[randomIndex] === "rock") {
        setResult("You win");
      } else {
        setResult("Draw");
      }
    } else if (choice === "scissors") {
      if (choices[randomIndex] === "rock") {
        setResult("You lose");
      } else if (choices[randomIndex] === "paper") {
        setResult("You win");
      } else {
        setResult("Draw");
      }
    }
  };

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <div>
        <img
          src="/rock.png"
          alt="Rock"
          onClick={() => play("rock")}
        />
        <img
          src="/paper.png"
          alt="Paper"
          onClick={() => play("paper")}
        />
        <img
          src="./scissors.png"
          alt="Scissors"
          onClick={() => play("scissors")}
        />
      </div>
      <div>
        <p>Your choice: {userChoice}</p>
        <p>Computer`s choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;
