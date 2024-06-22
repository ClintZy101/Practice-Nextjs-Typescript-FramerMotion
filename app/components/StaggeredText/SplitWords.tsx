'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SpanStatus } from 'next/dist/trace'

export default function SplitWords({ text = "TEXT HERE" }: { text: string }) {
    // 0.5 means half of the element is shown on screen
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })
    const textVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        shown: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.span
            ref={ref}
            transition={{ staggerChildren: 0.2 }}
            initial="hidden"
            animate={isInView ? "shown" : "hidden"}
            className='flex justify-center space-x-5 flex-wrap uppercase'>
            {text.split(" ").map((word, i) => (
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
            ))}
        </motion.span>
    )
}
