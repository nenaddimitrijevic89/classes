import Image from 'next/image';
import close from '@/@@/assets/close.svg';
import { twMerge } from 'tailwind-merge';

interface Props {
  filter: string;
  onClick: () => void;
  className?: string;
}

export const FilterItem = ({ filter, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'flex cursor-pointer gap-2 bg-white px-3 py-2 text-black transition duration-300 ease-in-out hover:bg-orange',
        className,
      )}
    >
      <span className='font-medium'>{filter}</span>
      <Image src={close} className='w-2' alt='close icon' />
    </div>
  );
};
