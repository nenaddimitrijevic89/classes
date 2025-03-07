import { twMerge } from 'tailwind-merge'
import { CATEGORY_COLORS } from '../constants/categoryColors'
import { ECategorySlug } from '../types'

interface Props {
  categorySlug: ECategorySlug
  className?: string
}

export const CategoryColorBullet = ({ categorySlug, className }: Props) => {
  const backgroundColor = CATEGORY_COLORS[categorySlug]
  return (
    <div
      className={twMerge('h-[14px] w-[14px] rounded-full', className)}
      style={{ backgroundColor: backgroundColor }}
    />
  )
}
