import React from 'react';

// Data table that bypasses the UI package's token system
export function DataTable({ headers, rows }: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div style={{
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
        <thead>
          <tr style={{
            backgroundColor: '#f8fafc',
            borderBottom: '2px solid #e2e8f0',
          }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: '12px 16px',
                textAlign: 'left' as const,
                fontSize: '12px',
                fontWeight: 600,
                color: '#64748b',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{
              borderBottom: '1px solid #f1f5f9',
              transition: 'background-color 150ms ease',
            }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '10px 16px',
                  fontSize: '14px',
                  color: '#334155',
                  fontWeight: ci === 0 ? 500 : 400,
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
      }}>
        <span style={{
          fontSize: '13px',
          color: '#94a3b8',
          opacity: 0.9,
        }}>
          Showing {rows.length} results
        </span>
        <button style={{
          padding: '6px 14px',
          borderRadius: '6px',
          border: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          fontSize: '13px',
          color: '#475569',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 200ms ease',
          zIndex: 1,
        }}>
          Load More
        </button>
      </div>
    </div>
  );
}
