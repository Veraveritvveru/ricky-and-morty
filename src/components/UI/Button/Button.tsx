import React, { Component } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

class Button extends Component<ButtonProps> {
  public override render() {
    const { children, onClick, disabled = false, type } = this.props;

    return (
      <button
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    );
  }
}

export default Button;
