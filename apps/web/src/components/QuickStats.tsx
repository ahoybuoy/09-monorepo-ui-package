import React from 'react';

interface StatProps {
  label: string;
  value: string | number;
  change?: number;
}

export function QuickStats({ stats }: { stats: StatProps[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: '24px' }}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>{stat.label}</p>
          <p style={{ fontSize: '28px', fontWeight: 700, color: '#111827' }}>{stat.value}</p>
          {stat.change !== undefined && (
            <p style={{ fontSize: '13px', color: stat.change >= 0 ? '#16a34a' : '#dc2626', marginTop: '4px' }}>
              {stat.change >= 0 ? '+' : ''}{stat.change}%
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuickStats;
