import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import Typewriter from "typewriter-effect";

function Mybio() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const slideIn = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { duration: 1000 },
  });

  const transitionleft = useSpring({
    from: { x: -100 },
    to: { x: 0 },
    config: { duration: 1000 },
  });
  const transitionright = useSpring({
    from: { x: 100 },
    to: { x: 0 },
    config: { duration: 1000 },
  });
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 200, friction: 20 },
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div>
      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
      <div className="w-full h-full">
        <animated.div style={slideIn}>
          <h1 className="text-blue-500 font-[jaro] font-bold text-[65px]">
            Welcome
          </h1>
        </animated.div>

        <animated.div>
          <h1 className="text-indigo-500 text-[45px] flex">
            I am
            <div className="ml-5">
              <Typewriter
                options={{
                  strings: ["junior developer", "programmer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
        </animated.div>

        <animated.div style={transitionright}>
          <h1 className="text-blue-500 font-[jose] text-[25px] mt-3">
            This is my first project.
          </h1>
        </animated.div>

        <animated.div style={props} ref={ref}>
          <p className="text-white font-[jose] text-[25px] mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            placeat, ipsam ipsum ex nemo voluptates?
          </p>
        </animated.div>
      </div>
    </div>
  );
}

export default Mybio;
