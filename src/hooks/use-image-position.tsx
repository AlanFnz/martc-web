import React, { useState } from 'react';

export const useImagePosition = () => {
  const [paddingTop, setPaddingTop] = useState('0');

  const getPaddingTop = ({ target }: any) => {
    const { naturalWidth, naturalHeight } = target as HTMLImageElement;
    setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
  };

  return {
    getPaddingTop,
    paddingTop,
  };
};

