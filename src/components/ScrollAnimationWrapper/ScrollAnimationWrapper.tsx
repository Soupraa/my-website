import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


const AnimatedSection = styled.section<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;



type ScrollAnimationProps = {
  children: React.ReactNode;
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <AnimatedSection ref={ref} $isVisible={isVisible}>
      {children}
    </AnimatedSection>
  );
};

export default ScrollAnimationWrapper;
