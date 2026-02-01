import React from 'react';
// DRIFT: Using relative import instead of @repo/ui
// This creates inconsistent import patterns across the monorepo
import { Typography } from '../../../../packages/ui/src/components/Typography';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    items: [
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Components',
    href: '/docs/components',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Input', href: '/docs/components/input' },
    ],
  },
  {
    title: 'Tokens',
    href: '/docs/tokens',
    items: [
      { title: 'Colors', href: '/docs/tokens/colors' },
      { title: 'Spacing', href: '/docs/tokens/spacing' },
      { title: 'Typography', href: '/docs/tokens/typography' },
    ],
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: '280px',
        // DRIFT: Uses different background than web app
        backgroundColor: '#F8FAFC',
        borderRight: '1px solid #E2E8F0',
        padding: '24px',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h4">Documentation</Typography>
      </div>

      <nav>
        {navigation.map((section) => (
          <div key={section.href} style={{ marginBottom: '24px' }}>
            <a
              href={section.href}
              style={{
                display: 'block',
                // DRIFT: Different font styling than main app
                fontSize: '13px',
                fontWeight: 600,
                // DRIFT: Different gray shade
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                textDecoration: 'none',
              }}
            >
              {section.title}
            </a>

            {section.items && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      style={{
                        display: 'block',
                        // DRIFT: Different sizing
                        fontSize: '14px',
                        color: '#475569',
                        padding: '6px 0',
                        textDecoration: 'none',
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};
