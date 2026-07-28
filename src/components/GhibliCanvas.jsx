import React, { useEffect, useRef } from 'react';

export const GhibliCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // High-DPI Retina (4K) Canvas Scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];

    // 1. Glowing Ambient Sage Spores
    for (let i = 0; i < 12; i++) {
      particles.push({
        type: 'spore',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.25 - 0.08,
        alpha: Math.random() * 0.35 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 2. High-Definition Faded Ghibli Soot Sprites (Susuwatari)
    for (let i = 0; i < 7; i++) {
      particles.push({
        type: 'soot',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 16, // 16px to 24px crisp radius
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35 - 0.1,
        fadeAlpha: Math.random() * 0.12 + 0.22, // Faded background opacity (0.22 to 0.34)
        blinkTimer: Math.random() * 220 + 120,
        floatOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY + Math.sin(time + p.floatOffset) * 0.15;

        // Interactive mouse avoidance
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * (p.type === 'soot' ? 1.5 : 0.8);
            p.y -= (dy / dist) * force * (p.type === 'soot' ? 1.5 : 0.8);
          }
        }

        // Screen boundary wrapping
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        if (p.type === 'spore') {
          // Soft ambient sage spore
          const currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed + p.offset) * 0.1;
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 197, 164, ${Math.max(0.08, currentAlpha)})`;
          ctx.fill();
          ctx.restore();
        } else if (p.type === 'soot') {
          // 4K High-Definition Ghibli Soot Sprite (Faded Background Character)
          ctx.save();
          ctx.globalAlpha = p.fadeAlpha;

          const r = p.size;

          // Outer Soft Glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 1.25, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(24, 36, 45, 0.4)';
          ctx.fill();

          // Fluffy Spiky Rays (Crisp vector-style Susuwatari spikes)
          ctx.strokeStyle = '#1d2c38';
          ctx.lineWidth = 1.8;
          const spikeCount = 14;
          for (let a = 0; a < Math.PI * 2; a += (Math.PI * 2) / spikeCount) {
            const spikeLen = r + 3.5 + Math.sin(time * 3 + a + p.x) * 1.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.cos(a) * spikeLen, p.y + Math.sin(a) * spikeLen);
            ctx.stroke();
          }

          // Main Body Circle
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();
          ctx.strokeStyle = 'rgba(139, 197, 164, 0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Cute Big Expressive Eyes
          const eyeDistance = r * 0.42;
          const eyeRadius = r * 0.35;
          const eyeY = p.y - r * 0.1;

          // Blink Logic
          p.blinkTimer -= 1;
          const isBlinking = p.blinkTimer <= 0 && p.blinkTimer > -14;
          if (p.blinkTimer < -14) {
            p.blinkTimer = Math.random() * 260 + 130;
          }

          if (!isBlinking) {
            // Left Eye (White)
            ctx.beginPath();
            ctx.arc(p.x - eyeDistance, eyeY, eyeRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Left Pupil (Dark + Pupil Shine)
            ctx.beginPath();
            ctx.arc(p.x - eyeDistance + 0.8, eyeY, eyeRadius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();

            // Left Eye Catchlight Shine
            ctx.beginPath();
            ctx.arc(p.x - eyeDistance - eyeRadius * 0.25, eyeY - eyeRadius * 0.25, eyeRadius * 0.2, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();

            // Right Eye (White)
            ctx.beginPath();
            ctx.arc(p.x + eyeDistance, eyeY, eyeRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Right Pupil (Dark + Pupil Shine)
            ctx.beginPath();
            ctx.arc(p.x + eyeDistance + 0.8, eyeY, eyeRadius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();

            // Right Eye Catchlight Shine
            ctx.beginPath();
            ctx.arc(p.x + eyeDistance - eyeRadius * 0.25, eyeY - eyeRadius * 0.25, eyeRadius * 0.2, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();
          } else {
            // Cute Blink Curve Lines
            ctx.strokeStyle = '#F5F5F3';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.arc(p.x - eyeDistance, eyeY, eyeRadius * 0.8, 0, Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(p.x + eyeDistance, eyeY, eyeRadius * 0.8, 0, Math.PI);
            ctx.stroke();
          }

          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};



