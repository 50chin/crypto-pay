import React from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

export const Button = ({ children, size, variant, color }) => {
  return (
    <button
      className={clsx(s.button, {
        [s.button_large]: size === 'large',
        [s.button_small]: size === 'small',
        [s.button_fill]: variant === 'fill',
        [s.button_semiFill]: variant === 'semiFill',
        [s.button_empty]: variant === 'empty',
        [s.button_white]: color === 'white',
        [s.button_blue]: color === 'blue',
      })}
    >
      {children}
    </button>
  );
};
