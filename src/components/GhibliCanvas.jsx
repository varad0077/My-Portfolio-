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

    // Particle definitions
    const particleCount = 45;
    const particles = [];

    // Create soot sprites & glowing star spores
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2, // slight upward drift
        type: i % 3 === 0 ? 'soot' : 'spore',
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        legOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Interaction with mouse
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Wrap boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (p.type === 'soot') {
          // Soot sprite (black fuzzy circle with white eyes)
          const radius = p.size * 2.5;
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = '#0f172a';
          ctx.fill();

          // Spiky fuzzy hairs
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = '#0f172a';
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
            const hairLen = radius + 2 + Math.sin(time * 3 + a) * 1.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.cos(a) * hairLen, p.y + Math.sin(a) * hairLen);
            ctx.stroke();
          }

          // Eyes (two white circles with dark pupils)
          const eyeOffset = radius * 0.4;
          const eyeRadius = radius * 0.35;
          
          // Left Eye
          ctx.beginPath();
          ctx.arc(p.x - eyeOffset, p.y - eyeOffset * 0.2, eyeRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x - eyeOffset, p.y - eyeOffset * 0.2, eyeRadius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#0f172a';
          ctx.fill();

          // Right Eye
          ctx.beginPath();
          ctx.arc(p.x + eyeOffset, p.y - eyeOffset * 0.2, eyeRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x + eyeOffset, p.y - eyeOffset * 0.2, eyeRadius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#0f172a';
          ctx.fill();

          ctx.restore();
        } else {
          // Glowing star spore
          const glowAlpha = Math.abs(Math.sin(time * p.pulseSpeed + p.legOffset)) * p.alpha;
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(250, 204, 21, ${glowAlpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(250, 204, 21, 0.8)';
          ctx.fill();
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
