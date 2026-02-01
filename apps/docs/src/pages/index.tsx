import React from 'react';
import { Button, Card, Typography } from '@repo/ui';
import { Sidebar } from '../components/Sidebar';
import { CodeBlock } from '../components/CodeBlock';

const installCode = `npm install @repo/ui
# or
pnpm add @repo/ui
# or
yarn add @repo/ui`;

const usageCode = `import { Button, Card, Typography } from '@repo/ui';
import { colors, spacing } from '@repo/ui/tokens';

function App() {
  return (
    <Card>
      <Typography variant="h2">Hello World</Typography>
      <Button>Click me</Button>
    </Card>
  );
}`;

export default function DocsHomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          // DRIFT: Different padding than web app
          padding: '40px 60px',
          maxWidth: '900px',
        }}
      >
        <Typography variant="h1">@repo/ui</Typography>

        <p
          style={{
            // DRIFT: Different text color than web app
            fontSize: '18px',
            color: '#475569',
            marginTop: '16px',
            marginBottom: '40px',
            lineHeight: 1.7,
          }}
        >
          A comprehensive React component library with built-in design tokens.
          Build consistent, beautiful interfaces with ease.
        </p>

        <Typography variant="h2">Installation</Typography>
        <div style={{ marginTop: '16px' }}>
          <CodeBlock code={installCode} language="bash" />
        </div>

        <Typography variant="h2">Quick Start</Typography>
        <div style={{ marginTop: '16px' }}>
          <CodeBlock code={usageCode} language="tsx" />
        </div>

        <Typography variant="h2">Features</Typography>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            // DRIFT: Different gap than web app
            gap: '20px',
            marginTop: '24px',
          }}
        >
          <Card variant="outlined">
            <h3 style={{
              // DRIFT: Different heading style
              fontSize: '16px',
              fontWeight: 600,
              color: '#1E293B',
              marginBottom: '8px',
            }}>
              Design Tokens
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              Consistent colors, spacing, and typography tokens.
            </p>
          </Card>

          <Card variant="outlined">
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1E293B',
              marginBottom: '8px',
            }}>
              TypeScript First
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              Full TypeScript support with detailed types.
            </p>
          </Card>

          <Card variant="outlined">
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1E293B',
              marginBottom: '8px',
            }}>
              Tree Shakeable
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              Import only what you need for smaller bundles.
            </p>
          </Card>

          <Card variant="outlined">
            <h3 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1E293B',
              marginBottom: '8px',
            }}>
              Accessible
            </h3>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              Built with accessibility best practices.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
