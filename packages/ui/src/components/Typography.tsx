import React from 'react';
import { colors, fontSize, fontWeight, fontFamily, lineHeight } from '../tokens';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';
  color?: 'primary' | 'secondary' | 'disabled';
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles = {
  h1: {
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },
  h2: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
  },
  h3: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
  },
  h4: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
  },
  body1: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
  },
  body2: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
  },
};

const colorStyles = {
  primary: colors.neutral[900],
  secondary: colors.neutral[600],
  disabled: colors.neutral[400],
};

const defaultElements: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  children,
  as,
}) => {
  const Component = as || defaultElements[variant];

  return React.createElement(
    Component,
    {
      style: {
        ...variantStyles[variant],
        color: colorStyles[color],
        fontFamily: fontFamily.sans,
        margin: 0,
      },
    },
    children
  );
};
