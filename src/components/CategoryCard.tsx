import Link from 'next/link'

import { TCategory } from '../types'
import { VIDEOS } from '../constants/videos'
import { DiagonalArrow } from './DiagonalArrow'

interface Props {
  category: TCategory
  index: number
}

export const CategoryCard = ({ category, index }: Props) => {
  const justify = index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
  const translate =
    index % 2 === 0
      ? 'translate-y-0 xl:translate-y-[20%]'
      : '-translate-y -xl:translate-y-[20%]'

  const numberOfClasses =
    category.classes.length > 1
      ? `${category.classes.length} classes`
      : `${category.classes.length} class`

  return (
    <Link href={`/search?category=${category.slug}`}>
      <div className={`${justify} transform ${translate} mx-[15%]`}>
        <div className='group relative w-fit cursor-pointer'>
          <div className='absolute z-10 flex -translate-x-[50%] translate-y-[100%] transform flex-col gap-4 font-bold'>
            <h1 className='text-4xl uppercase text-white transition-colors duration-300 ease-in-out group-hover:text-orange'>
              {category.title}
            </h1>
            <div className='flex flex-col gap-2'>
              <p className='text-[#BDBDBD]'>{numberOfClasses}</p>
              <DiagonalArrow className='opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100' />
            </div>
          </div>
          <div className='h-[400px] w-[400px] overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105 min-[1800px]:h-[600px] min-[1800px]:w-[600px]'>
            <video
              className='h-full w-full object-cover'
              src={VIDEOS[category.slug as keyof typeof VIDEOS]}
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
