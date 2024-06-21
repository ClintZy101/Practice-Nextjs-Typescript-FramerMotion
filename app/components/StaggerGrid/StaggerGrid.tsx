'use client'

import React from 'react'
import { motion } from 'framer-motion';


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}



export default function StaggerGrid() {
    return (
        <div>
            <motion.ol
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.li variants={item} />
                <motion.li variants={item} />
            </motion.ol>
        </div>
    )
}







