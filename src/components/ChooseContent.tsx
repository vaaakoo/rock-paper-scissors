import Image from 'next/image'
import React from 'react'


const ChooseContent:React.FC<{ handleClick: (choice: string) => () => void, choice:string }> = ({ handleClick, choice }) =>  {
  return (
          <Image
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 w-24 h-20 md:w-48 md:h-40"
            src={`/${choice}.png`}
            alt="Rock"
            width={100}
            height={50}
            onClick={handleClick(choice)}
          />
  )
}

export default ChooseContent