import { useEffect, useRef, useState } from 'react';

const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, clip = false, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -64px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motionClass = clip ? 'clip-reveal' : 'reveal-item';

  return (
    <Tag
      ref={ref}
      className={`${motionClass}${shown ? ' is-shown' : ''}${className ? ` ${className}` : ''}`}
      style={clip ? undefined : { transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
