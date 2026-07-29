import React, { useEffect, useRef } from 'react';

export const GhibliCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // High-DPI Retina Canvas Scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking with smooth interpolation
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    const smoothMouse = { x: mouse.x, y: mouse.y };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];

    // 1. Fireflies — small glowing dots that pulse and drift
    for (let i = 0; i < 25; i++) {
      particles.push({
        type: 'firefly',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2.5 + 1.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.25,
        glowPhase: Math.random() * Math.PI * 2,
        glowSpeed: Math.random() * 0.03 + 0.015,
        baseAlpha: Math.random() * 0.3 + 0.2,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 2. Floating Leaves — gentle drifting leaf shapes
    for (let i = 0; i < 8; i++) {
      particles.push({
        type: 'leaf',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 6,
        speedX: (Math.random() - 0.5) * 0.15 + 0.1,
        speedY: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        wobbleAmp: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.15 + 0.1,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 3. Translucent Anime Water Bubbles
    for (let i = 0; i < 10; i++) {
      particles.push({
        type: 'bubble',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 12 + 8,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.4 - 0.15,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        alpha: Math.random() * 0.2 + 0.15,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 4. Ghibli Kodama (Tree Spirits)
    for (let i = 0; i < 5; i++) {
      particles.push({
        type: 'kodama',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.3 + 0.85,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.2 - 0.05,
        tiltAngle: (Math.random() - 0.5) * 0.3,
        tiltSpeed: Math.random() * 0.02 + 0.008,
        alpha: Math.random() * 0.12 + 0.22,
        offset: Math.random() * Math.PI * 2
      });
    }

    // 5. Organic Soot Sprites (Susuwatari)
    for (let i = 0; i < 5; i++) {
      particles.push({
        type: 'soot',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 6 + 14,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.1 + 0.25,
        blinkTimer: Math.random() * 240 + 120,
        offset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Smooth mouse interpolation
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Interactive mouse push — smooth radius-based repulsion
        if (mouse.active) {
          const dx = smoothMouse.x - p.x;
          const dy = smoothMouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = p.type === 'firefly' ? 120 : 150;
          if (dist < pushRadius) {
            const force = (pushRadius - dist) / pushRadius;
            const strength = p.type === 'firefly' ? 0.8 : 1.5;
            p.x -= (dx / dist) * force * strength;
            p.y -= (dy / dist) * force * strength;
          }
        }

        // Screen boundary wrapping
        if (p.x < -60) p.x = width + 60;
        if (p.x > width + 60) p.x = -60;
        if (p.y < -60) p.y = height + 60;
        if (p.y > height + 60) p.y = -60;

        // ── FIREFLIES ──
        if (p.type === 'firefly') {
          p.glowPhase += p.glowSpeed;
          const glow = Math.sin(p.glowPhase) * 0.5 + 0.5;
          const alpha = p.baseAlpha * (0.3 + glow * 0.7);

          // Wandering drift
          p.speedX += (Math.random() - 0.5) * 0.02;
          p.speedY += (Math.random() - 0.5) * 0.02;
          p.speedX *= 0.99;
          p.speedY *= 0.99;

          ctx.save();
          ctx.globalAlpha = alpha;

          // Outer glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 6);
          gradient.addColorStop(0, 'rgba(201, 216, 197, 0.4)');
          gradient.addColorStop(0.3, 'rgba(139, 197, 164, 0.15)');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
          ctx.fill();

          // Core bright dot
          ctx.globalAlpha = alpha * 1.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#C9D8C5';
          ctx.fill();

          ctx.restore();
        }

        // ── FLOATING LEAVES ──
        else if (p.type === 'leaf') {
          p.rotation += p.rotSpeed;
          p.x += Math.sin(time * 0.8 + p.offset) * p.wobbleAmp;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          // Leaf shape — elongated ellipse with stem
          const s = p.size;
          ctx.beginPath();
          ctx.ellipse(0, 0, s * 0.4, s, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(139, 197, 164, 0.35)';
          ctx.fill();

          // Center vein
          ctx.beginPath();
          ctx.moveTo(0, -s * 0.9);
          ctx.lineTo(0, s * 0.9);
          ctx.strokeStyle = 'rgba(139, 197, 164, 0.5)';
          ctx.lineWidth = 0.6;
          ctx.stroke();

          // Side veins
          for (let v = -0.5; v <= 0.5; v += 0.35) {
            ctx.beginPath();
            ctx.moveTo(0, s * v);
            ctx.lineTo(s * 0.3, s * (v - 0.2));
            ctx.moveTo(0, s * v);
            ctx.lineTo(-s * 0.3, s * (v - 0.2));
            ctx.strokeStyle = 'rgba(139, 197, 164, 0.25)';
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }

          ctx.restore();
        }

        // ── TRANSLUCENT WATER BUBBLES ──
        else if (p.type === 'bubble') {
          p.x += Math.sin(time * 2 + p.offset) * 0.25;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          const r = p.radius;

          // Bubble body
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(139, 197, 164, 0.06)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(201, 216, 197, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Top-left highlight glint
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.72, Math.PI * 1.15, Math.PI * 1.65);
          ctx.strokeStyle = 'rgba(245, 245, 243, 0.8)';
          ctx.lineWidth = 1.6;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Bottom-right glint dot
          ctx.beginPath();
          ctx.arc(p.x + r * 0.45, p.y + r * 0.45, r * 0.12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(245, 245, 243, 0.6)';
          ctx.fill();

          ctx.restore();
        }

        // ── KODAMA TREE SPIRITS ──
        else if (p.type === 'kodama') {
          ctx.save();
          ctx.globalAlpha = p.alpha;

          const s = p.scale;
          const headW = 16 * s;
          const headH = 14 * s;
          const currentTilt = Math.sin(time * 1.2 + p.offset) * 0.12;

          ctx.translate(p.x, p.y);
          ctx.rotate(currentTilt);

          // Head
          ctx.beginPath();
          ctx.ellipse(0, 0, headW, headH, 0.1, 0, Math.PI * 2);
          ctx.fillStyle = '#C9D8C5';
          ctx.fill();
          ctx.strokeStyle = 'rgba(24, 36, 45, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Body
          ctx.beginPath();
          ctx.ellipse(0, headH * 0.9, headW * 0.55, headH * 0.75, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201, 216, 197, 0.85)';
          ctx.fill();

          // Asymmetric eyes
          ctx.beginPath();
          ctx.arc(-headW * 0.35, -headH * 0.1, 2.4 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(headW * 0.35, -headH * 0.05, 2.8 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          // Tiny mouth
          ctx.beginPath();
          ctx.arc(headW * 0.05, headH * 0.35, 1.8 * s, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          ctx.restore();
        }

        // ── SOOT SPRITES ──
        else if (p.type === 'soot') {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          const r = p.radius;

          // Fuzzy body
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = '#18242D';
          ctx.fill();

          // Outer puff blobs with animated wiggle
          const puffCount = 12;
          for (let a = 0; a < Math.PI * 2; a += (Math.PI * 2) / puffCount) {
            const puffDist = r * 0.85 + Math.sin(time * 3 + a + p.x) * 2;
            const px = p.x + Math.cos(a) * puffDist;
            const py = p.y + Math.sin(a) * puffDist;
            ctx.beginPath();
            ctx.arc(px, py, r * 0.35, 0, Math.PI * 2);
            ctx.fillStyle = '#18242D';
            ctx.fill();
          }

          // Anime eyes
          const eyeDist = r * 0.42;
          const eyeR = r * 0.38;
          const eyeY = p.y - r * 0.08;

          // Blink logic
          p.blinkTimer -= 1;
          const isBlinking = p.blinkTimer <= 0 && p.blinkTimer > -14;
          if (p.blinkTimer < -14) {
            p.blinkTimer = Math.random() * 260 + 130;
          }

          if (!isBlinking) {
            // Left eye + pupil
            ctx.beginPath();
            ctx.arc(p.x - eyeDist, eyeY, eyeR, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x - eyeDist + 0.6, eyeY, eyeR * 0.52, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();

            // Right eye + pupil
            ctx.beginPath();
            ctx.arc(p.x + eyeDist, eyeY, eyeR, 0, Math.PI * 2);
            ctx.fillStyle = '#F5F5F3';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x + eyeDist + 0.6, eyeY, eyeR * 0.52, 0, Math.PI * 2);
            ctx.fillStyle = '#0F1720';
            ctx.fill();
          } else {
            // Blink curves
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
