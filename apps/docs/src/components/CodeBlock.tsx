import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

/**
 * CodeBlock component for documentation
 * DRIFT: Uses completely different color palette than design system
 * This is a docs-specific component but should still align with tokens
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  return (
    <div
      style={{
        position: 'relative',
        marginBottom: '24px',
      }}
    >
      {language && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            // DRIFT: Custom purple not in design system
            backgroundColor: '#7C3AED',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 500,
            padding: '4px 8px',
            borderRadius: '0 8px 0 8px',
          }}
        >
          {language}
        </div>
      )}
      <pre
        style={{
          // DRIFT: Darker background than neutral.900
          backgroundColor: '#0F172A',
          // DRIFT: Different border radius
          borderRadius: '8px',
          padding: '20px',
          overflow: 'auto',
          margin: 0,
        }}
      >
        <code
          style={{
            // DRIFT: Different mono font
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            fontSize: '13px',
            lineHeight: 1.7,
            color: '#E2E8F0',
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};
