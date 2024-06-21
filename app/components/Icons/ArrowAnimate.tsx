'use client'

import { FaArrowRight } from "react-icons/fa6";
import {motion} from 'framer-motion'

import React from 'react'

export default function ArrowAnimate() {
    const arrow = {
        initial: { rotate: 0, scale: 1 },
        animate: { rotate: 90, scale: 1.5 },
      }
  return (
    <div>
        <motion.span
        className="cursor-pointer"
       variants={arrow}
        >
        <FaArrowRight />
        </motion.span>
      
    </div>
  )
}
