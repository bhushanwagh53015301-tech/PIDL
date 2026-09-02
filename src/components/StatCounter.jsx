import React, { useState, useEffect, useRef } from 'react';

export const StatCounter = ({ value, label, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const numericTarget = parseFloat(value.toString().replace(/[^0-9.]/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(numericTarget)) return;

    let startTime = null;
    const isDecimal = numericTarget % 1 !== 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out quad formula
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = numericTarget * easedProgress;

      setCount(isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericTarget, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline justify-center">
        {prefix && <span className="text-[#F7A400] mr-1">{prefix}</span>}
        <span className="text-white">{isVisible ? count : "0"}</span>
        {suffix && <span className="text-[#F7A400] ml-0.5">{suffix}</span>}
      </div>
      <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-2 max-w-[180px]">
        {label}
      </div>
    </div>
  );
};
