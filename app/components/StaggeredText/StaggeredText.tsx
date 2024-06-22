'use client'

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion';


export default function StaggeredText({text}:{text:string}) {



    const textVariant = {
        hidden: {
            opacity: 0,
            y:20
        },
        visible: {
            opacity: 1,
            y:0
        }
    }

  return (
    <div className='bg-neutral-900 p-2 shadow shadow-neutral-600 justify-center items-center flex'>
         <motion.span
                initial="hidden"
                animate="visible"
                transition={{staggerChildren: 0.2, repeat: Infinity, repeatDelay: 1}}
                className="flex  font-poppins overflow-clip whitespace-nowrap tracking-wide "
            >
                {
                    text.split("").map((char, i) => (
                        <motion.p
                            variants={textVariant}
                            key={i}
                            className="font-bold text-xl text-white">
                            {char}
                        </motion.p>)

                    )}
            </motion.span>
    </div>
  )
}
