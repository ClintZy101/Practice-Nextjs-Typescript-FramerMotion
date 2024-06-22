'use client'
import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'

export default function BoldText({text="TEXT HERE"}:{text: string}) {
    // 0.5 means half of the element is shown on screen
    const ref = useRef(null)
    const isInView = useInView(ref,{amount: 0.5})
    const textVariants = {
        hidden:{
            opacity: 0,
            y:-20
        },
        shown: {
            opacity:1,
            y:0
        }
    }
  return (
    <motion.span 
    ref={ref}
    transition={{staggerChildren: 0.2, repeat: Infinity, repeatDelay: 1}}
    initial="hidden"
    animate={isInView? "shown": "hidden"}
    className='flex justify-center'>
        {text.split("").map((char, i) => (
            <motion.h1
            key={i} 
            
            variants={textVariants}
            className='text-bold text-[100px] sm:text-[150px]  lg:text-[200px]'>{char}</motion.h1>
        ))}
    </motion.span>
  )
}
