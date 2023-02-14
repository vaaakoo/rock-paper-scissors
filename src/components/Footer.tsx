import React from 'react'

interface interUser {
    userChoice: string | null,
    computerChoice: string | null,
    result: string | null
}

export const Footer = ({userChoice, computerChoice, result}:interUser) => {
  return (
    <div>
        <footer className="fixed w-full bottom-0 ">
        <div className="flex border-t-2 p-8 border-slate-400">
          <div className="flex flex-col mx-auto justify-center items-center gap-6 sm:flex-row text-left md:mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600 text-xl md:text-2xl">
            <p>Your choice: {userChoice}</p>
            <p>Computer`s choice: {computerChoice}</p>
            <p>Result: {result}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
