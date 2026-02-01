import React from 'react';
import { colors, spacing, borderRadius, shadows } from '../tokens';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
}) => {
  const paddingMap = {
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
  };

  const variantStyles = {
    elevated: {
      backgroundColor: colors.neutral[0],
      boxShadow: shadows.md,
      border: 'none',
    },
    outlined: {
      backgroundColor: colors.neutral[0],
      boxShadow: 'none',
      border: `1px solid ${colors.neutral[200]}`,
    },
    filled: {
      backgroundColor: colors.neutral[50],
      boxShadow: 'none',
      border: 'none',
    },
  };

  return (
    <div
      style={{
        ...variantStyles[variant],
        padding: paddingMap[padding],
        borderRadius: borderRadius.lg,
      }}
    >
      {children}
    </div>
  );
};
