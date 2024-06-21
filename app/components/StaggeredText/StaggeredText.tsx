'use client'

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion';


export default function StaggeredText() {

    const text = "CLINTON"

    const textVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

  return (
    <div className='bg-neutral-900 p-2 shadow shadow-neutral-600 '>
         <motion.span
                initial="hidden"
                animate="visible"
                transition={{staggerChildren: 0.3}}
                className="flex text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide "
            >
                {
                    text.split("").map((char, i) => (
                        <motion.p
                            variants={textVariant}
                            key={i}
                            className="font-bold text-xl">
                            {char}
                        </motion.p>)

                    )}
            </motion.span>
    </div>
  )
}
