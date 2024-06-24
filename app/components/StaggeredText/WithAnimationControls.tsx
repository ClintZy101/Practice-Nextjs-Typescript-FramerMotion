'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion';


export default function WithAnimationControls({ text = "Text Here", repeatDelay=1000, name }: { text: string | string[], repeatDelay: number, name?: string }) {

    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null)
    // 0.5 means half of the element is shown on screen
    const isInView = useInView(ref, { amount: 0.5 })
    const controls = useAnimationControls()
    const textVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        shown: {
            opacity: 1,
            y: 0
        },
    }


    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
          controls.start("shown");
          if (repeatDelay) {
            timeout = setTimeout(async () => {
              await controls.start("hidden");
              controls.start("shown");
            }, repeatDelay);
          }
        };
    
        if (isInView) {
          show();
        } else {
          controls.start("hidden");
        }
    
        return () => clearTimeout(timeout);
      }, [isInView]);

    return (
        <motion.span
            ref={ref}
            transition={{ staggerChildren: 0.1, repeat:Infinity }}
            initial="hidden"
            animate={controls}

            className='flex justify-center space-x-8 flex-wrap uppercase'
            >
            {textArray.map((line, i) =>
                <span
                    key={i}
                    className='block'>
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className='text-bold text-[50px] sm:text-[100px]  lg:text-[150px] inline-block '
                        >
                            {word.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={textVariants}
                                    className="inline-block "
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))} </span>)}
        </motion.span>
    )
}
