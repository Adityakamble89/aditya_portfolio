import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const { isDark } = useTheme();

  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Dot follows immediately
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorElem = target.closest('[data-cursor]');
      const clickable = target.closest('a, button, [role="button"], input, textarea, select');

      if (cursorElem) {
        const type = cursorElem.getAttribute('data-cursor');
        const customText = cursorElem.getAttribute('data-cursor-text');
        
        setIsHovered(true);
        if (type === 'hover' || type === 'view') {
          setCursorText(customText || 'VIEW');
        } else if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else if (clickable) {
        setIsPointer(true);
        setIsHovered(false);
        setCursorText('');
      } else {
        setIsHovered(false);
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setIsPointer(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Lerp loop for trailing outer ring/pill
    const render = () => {
      const lerpFactor = 0.16;
      pos.x += (mouse.x - pos.x) * lerpFactor;
      pos.y += (mouse.y - pos.y) * lerpFactor;

      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Precision inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'scale-0' : 'scale-100'}`}
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: isDark ? '#10B981' : '#059669',
          boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)',
        }}
      />

      {/* Smooth Trailing Follower / Interactive Pill */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border-color,opacity,border-radius] duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-24 h-24 rounded-full bg-accent text-black shadow-[0_0_30px_rgba(16,185,129,0.5)]'
            : isPointer
            ? 'w-12 h-12 rounded-full border border-accent/70 bg-accent/10 backdrop-blur-xs'
            : 'w-8 h-8 rounded-full border border-fg/30 bg-transparent'
        }`}
      >
        {isHovered && cursorText && (
          <span className="font-mono text-[11px] font-bold tracking-widest uppercase select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
