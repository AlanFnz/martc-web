import React from 'react';
import { InfoSvg } from '@constants/.';

export const PosterInfoButton = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className='cursor-pointer w-10 h-10 rounded-md text-sm p-2 text-center bg-white'
    >
      <InfoSvg className='flex w-6 h-6 items-center' />
    </div>
  );
};
