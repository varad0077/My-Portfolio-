import { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, delay = 0, className = '', style = {} }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sr ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};
