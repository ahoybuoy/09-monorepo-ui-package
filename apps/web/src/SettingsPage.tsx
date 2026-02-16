import React from 'react';
import { Divider } from '@repo/ui';

export function SettingsPage() {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '32px 24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>Settings</h1>

      <section>
        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '12px' }}>Profile</h2>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Update your personal information.</p>
      </section>

      <Divider />

      <section>
        <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#374151', marginBottom: '12px' }}>Notifications</h2>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Configure how you receive notifications.</p>
      </section>
    </div>
  );
}
