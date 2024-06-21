'use client'

import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion'
export default function ArrowTwo() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <motion.svg
               className ="w-max"
                whileHover={{
                    rotate: 90,
                }}
            >
                <FaArrowRight />
            </motion.svg>
            <motion.div
                className="block bg-black w-max mx-auto"
                onClick={() => setIsActive(!isActive)}
                animate={{
                    rotate: isActive ? 45 : 0
                }}
            >
                <FaArrowRight className='text-white ' height={50}/>
            </motion.div>
        </div>
    )
}
