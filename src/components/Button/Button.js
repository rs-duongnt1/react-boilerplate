import styled from '@emotion/styled';
import { forwardRef } from 'react';

const ButtonRoot = styled.button(({ color, variant }) => ({
  border: 'none',
  padding: '10px 15px',
  fontSize: '14px',
  borderRadius: '3px',
  outline: 'none',
  cursor: 'pointer',
  transition: 'background .25s',
  ...(color === 'default' &&
    variant === 'contained' && {
      backgroundColor: 'var(--default)',
      color: 'var(--black)',
      ':hover': {
        backgroundColor: 'var(--default-hover)',
      },
    }),
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: 'var(--primary)',
      color: 'var(--white)',
      ':hover': {
        backgroundColor: 'var(--primary-hover)',
      },
    }),
  ...(color === 'success' &&
    variant === 'contained' && {
      backgroundColor: 'var(--success)',
      color: 'var(--white)',
      ':hover': {
        backgroundColor: 'var(--success-hover)',
      },
    }),

  ...(color === 'default' &&
    variant === 'outlined' && {
      backgroundColor: 'transparent',
      border: '1px solid var(--default)',
      color: 'var(--black)',
      ':hover': {
        backgroundColor: 'var(--default-hover)',
      },
    }),
  ...(color === 'primary' &&
    variant === 'outlined' && {
      backgroundColor: 'transparent',
      border: '1px solid var(--primary)',
      color: 'var(--primary)',
      ':hover': {
        color: 'var(--primary-hover)',
        border: '1px solid var(--primary-hover)',
      },
    }),
  ...(color === 'success' &&
    variant === 'outlined' && {
      backgroundColor: 'var(--success)',
      color: 'var(--white)',
      ':hover': {
        backgroundColor: 'var(--success-hover)',
      },
    }),
}));

const Button = forwardRef(({ children, color, variant }, ref) => {
  return (
    <ButtonRoot color={color || 'default'} variant={variant || 'outlined'}>
      {children}
    </ButtonRoot>
  );
});

export default Button;
