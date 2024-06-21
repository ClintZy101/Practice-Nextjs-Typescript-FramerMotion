'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion';
import NavigationLink from './NavigationLink';
import { ChartBarIcon, ChartPieIcon, DocumentCheckIcon, Square2StackIcon, UsersIcon } from '@heroicons/react/24/outline';

const containerVariants = {
    close: {
        width: '5rem',
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5,
        }
    },
    open: {
        width: '16rem',
        transition: {
            type: 'spring',
            damping: 15,
            duration: 0.5
        }
    }
}

const svgVariants = {
    close: {
        rotate: 360,
    },
    open: {
        rotate: 180,
    }
}


export default function () {

    const [isOpen, setIsopen] = useState(false)
    const containerControls = useAnimationControls()
    const svgControls = useAnimationControls()
    const navTextControls = useAnimationControls()

    const handleIsOpen = () => {
        setIsopen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open")
            svgControls.start("open")
            navTextControls.start("open")
        } else {
            containerControls.start("close")
            svgControls.start("close")
            navTextControls.start("close")
        }
    }, [isOpen])
    return (
        <motion.nav
            variants={containerVariants}
            initial="close"
            animate={containerControls}
            className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600">
            <div className='flex flex-row w-full justify-between place-items-center'>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full" />
                <button
                    onClick={() => handleIsOpen()}
                    className='p-1 rounded-full flex'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-8 h-8 stroke-neutral-200"
                    >
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={svgVariants}
                            animate={svgControls}
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                </button>
            </div>

                                {/* Navigation Links */}
            <div>
                <NavigationLink name="Dashboard" navTextControls={navTextControls}>
                    <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                </NavigationLink>
                <NavigationLink name="Projects" navTextControls={navTextControls}>
                    <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                </NavigationLink>
                <NavigationLink name="Tasks" navTextControls={navTextControls}>
                    <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                </NavigationLink>
                <NavigationLink name="Reporting" navTextControls={navTextControls}>
                    <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                </NavigationLink>
                <NavigationLink name="Users" navTextControls={navTextControls}>
                    <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
                </NavigationLink>
            </div>
            
        </motion.nav>
    )
}
