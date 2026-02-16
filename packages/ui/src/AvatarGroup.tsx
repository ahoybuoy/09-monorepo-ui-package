import React from 'react';

interface AvatarGroupProps {
  avatars: { src: string; alt: string }[];
  max?: number;
}

export function AvatarGroup({ avatars, max = 4 }: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {visible.map((avatar, i) => (
        <img
          key={i}
          src={avatar.src}
          alt={avatar.alt}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '2px solid #ffffff',
            marginLeft: i > 0 ? '-10px' : '0',
            objectFit: 'cover' as const,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        />
      ))}
      {remaining > 0 && (
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#f3f4f6',
          border: '2px solid #ffffff',
          marginLeft: '-10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 600,
          color: '#6b7280',
        }}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
