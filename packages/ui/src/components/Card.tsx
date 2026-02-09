import React from 'react';
import { colors, spacing, borderRadius, shadows } from '../tokens';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled' | 'highlight' | 'gradient';
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

  const variantStyles: Record<string, React.CSSProperties> = {
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
    highlight: {
      backgroundColor: '#EEF2FF',
      boxShadow: 'none',
      border: '1px solid #C7D2FE',
    },
    gradient: {
      background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      boxShadow: shadows.lg,
      border: 'none',
      color: '#FFFFFF',
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
