import React from 'react';
import { Card } from '@repo/ui';

interface StatItem {
  label: string;
  value: string | number;
  change?: number;
}

const stats: StatItem[] = [
  { label: 'Total Users', value: '12,345', change: 12.5 },
  { label: 'Revenue', value: '$45,678', change: -3.2 },
  { label: 'Active Sessions', value: '1,234', change: 8.1 },
  { label: 'Conversion Rate', value: '3.2%', change: 0.5 },
];

export const DashboardStats: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        padding: '32px',
      }}
    >
      {stats.map((stat) => (
        <Card key={stat.label} variant="outlined" padding="lg">
          <div style={{ marginBottom: '8px' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {stat.label}
            </span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
            {stat.value}
          </div>
          {stat.change !== undefined && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 500,
                backgroundColor: stat.change >= 0 ? '#D1FAE5' : '#FEE2E2',
                color: stat.change >= 0 ? '#065F46' : '#991B1B',
              }}
            >
              <span>{stat.change >= 0 ? '↑' : '↓'}</span>
              <span>{Math.abs(stat.change)}%</span>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
