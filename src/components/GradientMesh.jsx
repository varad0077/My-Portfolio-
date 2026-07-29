import React from 'react';

export const GradientMesh = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* Primary warm blob — top right */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 168, 56, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift 20s ease-in-out infinite'
        }}
      />
      
      {/* Secondary cool blob — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 120, 200, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift2 25s ease-in-out infinite'
        }}
      />

      {/* Tertiary subtle blob — center */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 168, 56, 0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'meshDrift 30s ease-in-out infinite reverse'
        }}
      />

      {/* Grain overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
