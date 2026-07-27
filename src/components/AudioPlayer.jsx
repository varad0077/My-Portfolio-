import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Studio Ghibli Pentatonic Scale Frequencies (F Major / D minor warmth: F3, A3, C4, D4, F4, G4, A4, C5)
  const notes = [174.61, 220.00, 261.63, 293.66, 349.23, 392.00, 440.00, 523.25];

  const playChime = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Random note selection from pentatonic scale
    const note = notes[Math.floor(Math.random() * notes.length)];
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note, ctx.currentTime);

    // Warm bell-like envelope decay
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.6);
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      setIsPlaying(true);
      playChime();

      // Schedule random gentle chimes every 2-4 seconds
      timerRef.current = setInterval(() => {
        if (Math.random() > 0.3) {
          playChime();
        }
      }, 2800);
    } else {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="btn-ghibli-outline"
      style={{
        padding: '0.5rem 1rem',
        fontSize: '0.88rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        cursor: 'pointer'
      }}
      title="Toggle Studio Ghibli Relaxing Chimes Ambience"
    >
      {isPlaying ? (
        <>
          <Volume2 size={16} className="animate-pulse-glow" style={{ color: 'var(--accent-primary)' }} />
          <span>Ghibli Ambience ON</span>
        </>
      ) : (
        <>
          <VolumeX size={16} style={{ opacity: 0.7 }} />
          <span>Soundscape OFF</span>
        </>
      )}
    </button>
  );
};
