import React from 'react';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../tokens';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles = {
  primary: {
    backgroundColor: colors.primary[600],
    color: colors.neutral[0],
    border: 'none',
  },
  secondary: {
    backgroundColor: colors.neutral[0],
    color: colors.primary[600],
    border: `1px solid ${colors.primary[600]}`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.primary[600],
    border: 'none',
  },
};

const sizeStyles = {
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    fontSize: fontSize.sm,
  },
  md: {
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: fontSize.base,
  },
  lg: {
    padding: `${spacing[4]} ${spacing[6]}`,
    fontSize: fontSize.lg,
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        borderRadius: borderRadius.md,
        fontWeight: fontWeight.medium,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
};
