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

    // 1. Translucent Anime Water Bubbles
    for (let i = 0; i < 10; i++) {
      particles.push({
        type: 'bubble',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 12 + 8, // 8px to 20px bubble radius
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.4 - 0.15, // float upward
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        alpha: Math.random() * 0.2 + 0.15,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 2. Ghibli Kodama (Tree Spirits)
    for (let i = 0; i < 5; i++) {
      particles.push({
        type: 'kodama',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.3 + 0.85, // 0.85 to 1.15 scale
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.2 - 0.05,
        tiltAngle: (Math.random() - 0.5) * 0.3,
        tiltSpeed: Math.random() * 0.02 + 0.008,
        alpha: Math.random() * 0.12 + 0.22,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 3. Organic Ghibli Soot Sprites (Susuwatari)
    for (let i = 0; i < 5; i++) {
      particles.push({
        type: 'soot',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 6 + 14, // 14px to 20px
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.1 + 0.25,
        blinkTimer: Math.random() * 240 + 120,
        offset: Math.random() * Math.PI * 2
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
        p.y += p.speedY;

        // Interactive mouse push
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Screen boundary wrapping
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        // ----------------------------------------------------
        // RENDER 1: Translucent Anime Water Bubbles
        // ----------------------------------------------------
        if (p.type === 'bubble') {
          p.x += Math.sin(time * 2 + p.offset) * 0.25; // bubble horizontal wobble

          ctx.save();
          ctx.globalAlpha = p.alpha;

          const r = p.radius;

          // Bubble Body Outer Ring (Sage/Teal Translucent)
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(139, 197, 164, 0.06)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(201, 216, 197, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Top-Left Curved Highlight Glint
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.72, Math.PI * 1.15, Math.PI * 1.65);
          ctx.strokeStyle = 'rgba(245, 245, 243, 0.8)';
          ctx.lineWidth = 1.6;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Bottom-Right Secondary Glint Dot
          ctx.beginPath();
          ctx.arc(p.x + r * 0.45, p.y + r * 0.45, r * 0.12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(245, 245, 243, 0.6)';
          ctx.fill();

          ctx.restore();
        }

        // ----------------------------------------------------
        // RENDER 2: Authentic Ghibli Kodama Spirit
        // ----------------------------------------------------
        else if (p.type === 'kodama') {
          ctx.save();
          ctx.globalAlpha = p.alpha;

          const s = p.scale;
          const headW = 16 * s;
          const headH = 14 * s;
          const currentTilt = Math.sin(time + p.offset) * 0.12;

          ctx.translate(p.x, p.y);
          ctx.rotate(currentTilt);

          // Kodama Head (Oval, slightly irregular anime shape)
          ctx.beginPath();
          ctx.ellipse(0, 0, headW, headH, 0.1, 0, Math.PI * 2);
          ctx.fillStyle = '#C9D8C5'; // soft sage-white
          ctx.fill();
          ctx.strokeStyle = 'rgba(24, 36, 45, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Kodama Body (Small pear shape below head)
          ctx.beginPath();
          ctx.ellipse(0, headH * 0.9, headW * 0.55, headH * 0.75, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201, 216, 197, 0.85)';
          ctx.fill();

          // Asymmetric Anime Eyes (Dark hollow dots)
          ctx.beginPath();
          ctx.arc(-headW * 0.35, -headH * 0.1, 2.4 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(headW * 0.35, -headH * 0.05, 2.8 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          // Tiny Mouth Dot
          ctx.beginPath();
          ctx.arc(headW * 0.05, headH * 0.35, 1.8 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          ctx.restore();
        }

        // ----------------------------------------------------
        // RENDER 3: Organic Organic Soot Sprite (Susuwatari)
        // ----------------------------------------------------
        else if (p.type === 'soot') {
          ctx.save();
          ctx.globalAlpha = p.alpha;

          const r = p.radius;

          // Organic Fuzzy Body made of overlapping soft circles
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          // Outer Fluffy Puff Blobs (Realistic hand-drawn fuzz)
          const puffCount = 12;
          for (let a = 0; a < Math.PI * 2; a += (Math.PI * 2) / puffCount) {
            const puffDist = r * 0.85 + Math.sin(time * 3 + a + p.x) * 1.5;
            const px = p.x + Math.cos(a) * puffDist;
            const py = p.y + Math.sin(a) * puffDist;
            ctx.beginPath();
            ctx.arc(px, py, r * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = '#18242D';
            ctx.fill();
          }

          // Large Anime Eyes
          const eyeDist = r * 0.42;
          const eyeR = r * 0.38;
          const eyeY = p.y - r * 0.08;

          // Blink Logic
          p.blinkTimer -= 1;
          const isBlinking = p.blinkTimer <= 0 && p.blinkTimer > -14;
          if (p.blinkTimer < -14) {
            p.blinkTimer = Math.random() * 260 + 130;
          }

          if (!isBlinking) {
            // Left Eye
            ctx.beginPath();
            ctx.arc(p.x - eyeDist, eyeY, eyeR, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Left Pupil
            ctx.beginPath();
            ctx.arc(p.x - eyeDist + 0.6, eyeY, eyeR * 0.52, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();

            // Right Eye
            ctx.beginPath();
            ctx.arc(p.x + eyeDist, eyeY, eyeR, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();

            // Right Pupil
            ctx.beginPath();
            ctx.arc(p.x + eyeDist + 0.6, eyeY, eyeR * 0.52, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();
          } else {
            // Cute Blink Curve Lines
            ctx.strokeStyle = '#F5F5F3';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.arc(p.x - eyeDist, eyeY, eyeR * 0.8, 0, Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(p.x + eyeDist, eyeY, eyeR * 0.8, 0, Math.PI);
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




