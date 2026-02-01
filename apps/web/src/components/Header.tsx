import React from 'react';
import { Button } from '@repo/ui';

/**
 * Header component - demonstrates DRIFT from design system tokens
 * Uses hardcoded values instead of importing from @repo/ui/tokens
 */
export const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // DRIFT: Should use spacing tokens from @repo/ui
        padding: '16px 24px',
        // DRIFT: Should use colors.neutral[0]
        backgroundColor: '#FFFFFF',
        // DRIFT: Should use shadows.sm from tokens
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        // DRIFT: Slightly different border than design system
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <div
        style={{
          // DRIFT: Should use fontFamily.sans
          fontFamily: 'Inter, system-ui, sans-serif',
          // DRIFT: Should use fontSize['xl']
          fontSize: '20px',
          // DRIFT: Should use fontWeight.bold
          fontWeight: 700,
          // DRIFT: Should use colors.primary[600]
          color: '#4F46E5',
        }}
      >
        Acme Corp
      </div>
      <nav
        style={{
          display: 'flex',
          // DRIFT: Should use spacing[4]
          gap: '16px',
        }}
      >
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="primary">Get Started</Button>
      </nav>
    </header>
  );
};
