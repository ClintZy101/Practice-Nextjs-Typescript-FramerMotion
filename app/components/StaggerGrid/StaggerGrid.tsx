'use client'

import React from 'react'
import { motion } from 'framer-motion';


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}



export default function StaggerGrid() {
    return (
        <div className='w-full px-auto justify-center flex'>
            <motion.ol
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-10 grid-cols-4 m-5"
            >
                <motion.li variants={item} className="border-neutral-500/50 h-60  bg-neutral-800/20 rounded border w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60 bg-neutral-800/20 rounded border  w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60  bg-neutral-800/20 rounded border w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60 bg-neutral-800/20 rounded border  w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60  bg-neutral-800/20 rounded border w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60 bg-neutral-800/20 rounded border  w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60  bg-neutral-800/20 rounded border w-[300px] " />
                <motion.li variants={item} className="border-neutral-500/50 h-60 bg-neutral-800/20 rounded border  w-[300px] " />
            </motion.ol>
        </div>
    )
}







