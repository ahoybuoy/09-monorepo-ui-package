import React, { useState } from 'react';
import { Typography } from '@repo/ui';
import { colors, spacing } from '@repo/ui/tokens';

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

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed = false,
  onToggle,
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(navigation.map((n) => n.href))
  );

  const toggleSection = (href: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  return (
    <aside
      style={{
        width: isCollapsed ? spacing[16] : '280px',
        backgroundColor: colors.neutral[50],
        borderRight: `1px solid ${colors.neutral[200]}`,
        padding: spacing[6],
        height: '100vh',
        overflowY: 'auto',
        transition: 'width 200ms ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing[8],
        }}
      >
        {!isCollapsed && <Typography variant="h4">Documentation</Typography>}
        {onToggle && (
          <button
            onClick={onToggle}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: spacing[2],
              color: colors.neutral[500],
            }}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        )}
      </div>

      {!isCollapsed && (
        <nav>
          {navigation.map((section) => (
            <div key={section.href} style={{ marginBottom: spacing[6] }}>
              <button
                onClick={() => toggleSection(section.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: colors.neutral[500],
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: spacing[2],
                  padding: 0,
                }}
              >
                <span style={{ marginRight: spacing[2] }}>
                  {expandedSections.has(section.href) ? '▾' : '▸'}
                </span>
                {section.title}
              </button>

              {expandedSections.has(section.href) && section.items && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          color: colors.neutral[600],
                          padding: `${spacing[1.5]} 0`,
                          paddingLeft: spacing[5],
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
      )}
    </aside>
  );
};
