import React from 'react';

interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

/**
 * PropsTable - displays component prop documentation
 * DRIFT: Table styling doesn't align with design system
 */
export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div
      style={{
        overflowX: 'auto',
        marginBottom: '32px',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
        }}
      >
        <thead>
          <tr
            style={{
              // DRIFT: Using Slate colors instead of Neutral
              backgroundColor: '#F1F5F9',
              borderBottom: '2px solid #CBD5E1',
            }}
          >
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>
              Prop
            </th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>
              Type
            </th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>
              Default
            </th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              style={{
                borderBottom: '1px solid #E2E8F0',
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFBFC',
              }}
            >
              <td style={{ padding: '12px 16px' }}>
                <code
                  style={{
                    // DRIFT: Different code styling
                    backgroundColor: '#FEF3C7',
                    color: '#92400E',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '13px',
                  }}
                >
                  {prop.name}
                </code>
                {prop.required && (
                  <span style={{ color: '#DC2626', marginLeft: '4px' }}>*</span>
                )}
              </td>
              <td style={{ padding: '12px 16px' }}>
                <code
                  style={{
                    // DRIFT: Different code styling for types
                    backgroundColor: '#DBEAFE',
                    color: '#1E40AF',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '13px',
                  }}
                >
                  {prop.type}
                </code>
              </td>
              <td style={{ padding: '12px 16px', color: '#64748B' }}>
                {prop.defaultValue || '-'}
              </td>
              <td style={{ padding: '12px 16px', color: '#475569' }}>
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
