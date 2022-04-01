import React from "react";
import classnames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'sm' | 'md' | 'lg'
}

function Button({ children, className, size, ...rest }: ButtonProps) {
  return (
    <button
      className={classnames(
        styles.button,
        size === 'md' && styles.medium,
        size === 'sm' && styles.small,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'lg'
}

export default Button;