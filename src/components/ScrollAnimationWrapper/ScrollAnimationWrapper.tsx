import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const AnimatedSection = styled.section<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(70px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 👈 only animate once
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection ref={ref} $isVisible={isVisible}>
      {children}
    </AnimatedSection>
  );
};

export default ScrollAnimationWrapper;

//re fire method
// import React, { useRef, useEffect, useState } from 'react';
// import styled from 'styled-components';

// const AnimatedSection = styled.section<{ $isVisible: boolean }>`
//   opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
//   transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(70px)')};
//   transition: opacity 0.8s ease-out, transform 0.8s ease-out;
// `;

// type ScrollAnimationProps = {
//   children: React.ReactNode;
// };

// const ScrollAnimationWrapper: React.FC<ScrollAnimationProps> = ({ children }) => {
//   const ref = useRef<HTMLElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.15, // fire when 15% of the element is visible
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <AnimatedSection ref={ref} $isVisible={isVisible}>
//       {children}
//     </AnimatedSection>
//   );
// };

// export default ScrollAnimationWrapper;
