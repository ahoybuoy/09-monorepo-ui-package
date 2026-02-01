import React from 'react';
import { colors, spacing, borderRadius, fontSize, fontFamily } from '../tokens';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  label,
}) => {
  const borderColor = error ? colors.error.main : colors.neutral[300];
  const focusBorderColor = error ? colors.error.main : colors.primary[500];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
      {label && (
        <label
          style={{
            fontSize: fontSize.sm,
            fontWeight: 500,
            color: colors.neutral[700],
            fontFamily: fontFamily.sans,
          }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          padding: `${spacing[3]} ${spacing[4]}`,
          fontSize: fontSize.base,
          fontFamily: fontFamily.sans,
          borderRadius: borderRadius.md,
          border: `1px solid ${borderColor}`,
          backgroundColor: disabled ? colors.neutral[100] : colors.neutral[0],
          color: colors.neutral[900],
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = focusBorderColor;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = borderColor;
        }}
      />
    </div>
  );
};
