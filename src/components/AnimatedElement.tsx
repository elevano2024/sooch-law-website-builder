
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Prevent animations on mobile for better performance
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedElement = ({ children, delay = 0 }: AnimatedElementProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: shouldReduceMotion ? 0 : 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay: shouldReduceMotion ? 0 : delay 
          } 
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
