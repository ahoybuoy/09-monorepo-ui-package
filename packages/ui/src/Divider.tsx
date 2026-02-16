import React from 'react';

interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ label, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return <div style={{ width: '1px', backgroundColor: '#e5e7eb', alignSelf: 'stretch' }} />;
  }

  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '16px 0' }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }} />
        <span style={{ fontSize: '12px', fontWeight: 500, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }} />
      </div>
    );
  }

  return <hr style={{ border: 'none', height: '1px', backgroundColor: '#e5e7eb', margin: '16px 0' }} />;
}
