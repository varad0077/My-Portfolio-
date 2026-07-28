import React, { useEffect, useRef } from 'react';

export const GhibliCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];

    // 1. Ambient Sage Spores
    for (let i = 0; i < 10; i++) {
      particles.push({
        type: 'spore',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.2 - 0.05,
        alpha: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 2. Ghibli Soot Sprites (Susuwatari)
    for (let i = 0; i < 6; i++) {
      particles.push({
        type: 'soot',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 4, // 4px to 7px radius
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: 0.85,
        eyeAngle: Math.random() * Math.PI * 2,
        blinkTimer: Math.random() * 200 + 100
      });
    }

    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Subtle mouse deflection
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x -= (dx / dist) * force * (p.type === 'soot' ? 1.2 : 0.6);
            p.y -= (dy / dist) * force * (p.type === 'soot' ? 1.2 : 0.6);
          }
        }

        // Wrap boundaries
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        if (p.type === 'spore') {
          // Soft sage spore
          const currentAlpha = p.alpha + Math.sin(time * p.pulseSpeed + p.offset) * 0.08;
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 197, 164, ${Math.max(0.05, currentAlpha)})`;
          ctx.fill();
          ctx.restore();
        } else if (p.type === 'soot') {
          // Cute Ghibli Soot Sprite (Susuwatari)
          ctx.save();

          // Body (Charcoal fuzzy circle)
          const radius = p.size;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          // Tiny Fuzzy Hairs around edge
          ctx.strokeStyle = '#18242D';
          ctx.lineWidth = 1.2;
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
            const spikeLen = radius + 1.8 + Math.sin(time * 4 + a + p.x) * 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.cos(a) * spikeLen, p.y + Math.sin(a) * spikeLen);
            ctx.stroke();
          }

          // Cute Eyes (Two white circles with dark pupils)
          const eyeOffset = radius * 0.45;
          const eyeRadius = Math.max(1.8, radius * 0.38);

          // Blink logic
          p.blinkTimer -= 1;
          const isBlinking = p.blinkTimer <= 0 && p.blinkTimer > -12;
          if (p.blinkTimer < -12) {
            p.blinkTimer = Math.random() * 250 + 120;
          }

          if (!isBlinking) {
            // Left Eye White
            ctx.beginPath();
            ctx.arc(p.x - eyeOffset, p.y - eyeOffset * 0.2, eyeRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Left Eye Pupil
            ctx.beginPath();
            ctx.arc(p.x - eyeOffset + 0.3, p.y - eyeOffset * 0.2, eyeRadius * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();

            // Right Eye White
            ctx.beginPath();
            ctx.arc(p.x + eyeOffset, p.y - eyeOffset * 0.2, eyeRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Right Eye Pupil
            ctx.beginPath();
            ctx.arc(p.x + eyeOffset + 0.3, p.y - eyeOffset * 0.2, eyeRadius * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();
          } else {
            // Blink lines
            ctx.strokeStyle = '#F5F5F3';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x - eyeOffset - eyeRadius, p.y);
            ctx.lineTo(p.x - eyeOffset + eyeRadius, p.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(p.x + eyeOffset - eyeRadius, p.y);
            ctx.lineTo(p.x + eyeOffset + eyeRadius, p.y);
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
        zIndex: 1,
        opacity: 0.8
      }}
    />
  );
};


