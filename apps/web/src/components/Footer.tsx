import React from 'react';
// Note: Not importing tokens - all hardcoded values (DRIFT)

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#111827',
        color: '#F9FAFB',
        padding: '48px 24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            Product
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Features</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Pricing</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Changelog</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            Company
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>About</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Blog</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            Resources
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Documentation</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>API Reference</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
          }}>
            Legal
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #374151',
          marginTop: '48px',
          paddingTop: '24px',
          textAlign: 'center',
          color: '#6B7280',
          fontSize: '14px',
        }}
      >
        &copy; 2024 Acme Corp. All rights reserved.
      </div>
    </footer>
  );
};
