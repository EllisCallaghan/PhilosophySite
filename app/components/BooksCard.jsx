import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BooksCard = ({image,title,desc,bookLink}) => {
  return (
    <Link className='flex flex-col flex-wrap gap-[6px] h-[750px]' target='_blank'
    href={`${bookLink}`}>
        <Image src={image} className='w-[350px] h-[500px] rounded-xl'/>
        <h1 className='w-[70%] text-primary font-primary text-[32px]'>{title}</h1>
        <p className=' w-[70%] sm:w-full text-primary font-primary text-[18px]'>{desc}</p>
    </Link>
  )
}

export default BooksCard