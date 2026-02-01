import React from 'react';
import { Button, Typography, Card } from '@repo/ui';

/**
 * HeroSection - Mix of proper token usage and drift
 */
export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        // DRIFT: Should use spacing tokens
        padding: '80px 40px',
        textAlign: 'center',
        // DRIFT: Should use colors.neutral[50]
        backgroundColor: '#F9FAFB',
      }}
    >
      <Typography variant="h1">
        Build Better Products Faster
      </Typography>

      <p
        style={{
          // DRIFT: Should use fontSize.lg and colors.neutral[600]
          fontSize: '18px',
          color: '#6B7280',
          maxWidth: '600px',
          margin: '24px auto',
          // DRIFT: lineHeight should use token
          lineHeight: 1.6,
        }}
      >
        The all-in-one platform for modern development teams.
        Ship faster with our integrated toolchain.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <Button size="lg">Start Free Trial</Button>
        <Button variant="secondary" size="lg">Watch Demo</Button>
      </div>

      {/* Feature cards with drift */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          // DRIFT: Should use spacing[6]
          gap: '24px',
          marginTop: '64px',
        }}
      >
        <Card>
          <h3 style={{
            // DRIFT: Various hardcoded values
            fontSize: '20px',
            fontWeight: 600,
            color: '#111827',
            marginBottom: '8px',
          }}>
            Lightning Fast
          </h3>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Built for speed from the ground up.
          </p>
        </Card>

        <Card>
          <h3 style={{
            // DRIFT: Slightly different values
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#1F2937',
            marginBottom: '0.5rem',
          }}>
            Secure by Default
          </h3>
          <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
            Enterprise-grade security built in.
          </p>
        </Card>

        <Card>
          <h3 style={{
            // Another inconsistent approach
            fontSize: 20,
            fontWeight: 600,
            color: 'rgb(17, 24, 39)',
            marginBottom: 8,
          }}>
            Always Available
          </h3>
          <p style={{ color: 'rgb(107, 114, 128)', fontSize: 14 }}>
            99.99% uptime guaranteed.
          </p>
        </Card>
      </div>
    </section>
  );
};
