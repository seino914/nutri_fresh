"use client";

import { useEffect, useState } from "react";

interface MotionProps {
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  children: React.ReactNode;
  className?: string;
}

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    whileInView, 
    viewport, 
    children, 
    className = "" 
  }: MotionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!ref || !whileInView) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsVisible(false);
          }
        },
        {
          threshold: 0.1,
          rootMargin: viewport?.margin || "0px",
        }
      );

      observer.observe(ref);

      return () => {
        if (ref) observer.unobserve(ref);
      };
    }, [ref, whileInView, viewport]);

    const getStyles = () => {
      if (whileInView) {
        return isVisible ? whileInView : initial;
      }
      return animate || {};
    };

    const styles = getStyles();
    const transitionStyles = {
      transition: `all ${transition?.duration || 0.3}s ${
        transition?.delay ? `${transition.delay}s` : "0s"
      } ease-out`,
    };

    return (
      <div
        ref={setRef}
        className={className}
        style={{
          ...transitionStyles,
          opacity: styles.opacity,
          transform: `translateY(${styles.y || 0}px) translateX(${
            styles.x || 0
          }px) scale(${styles.scale || 1})`,
        }}
      >
        {children}
      </div>
    );
  }
};