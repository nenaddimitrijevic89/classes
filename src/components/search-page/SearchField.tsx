import { HTMLProps } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import search from '@/@@/assets/search.svg'

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string
}

export const SearchField = ({ className, ...props }: Props) => (
  <div className='flex items-center border-b border-[#2D2D2D] bg-black bg-opacity-65'>
    <Image src={search} alt='search icon' />
    <input
      type='text'
      className={twMerge(
        'bg-transparent px-4 text-white placeholder:text-[#BDBDBD] focus-visible:outline-none',
        className,
      )}
      placeholder='Search'
      {...props}
    />
  </div>
)
