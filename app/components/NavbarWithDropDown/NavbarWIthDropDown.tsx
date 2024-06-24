'use client'
import React, { useState } from 'react'


export default function NavbarWIthDropDown() {
    const [isOpen, setIsopen] = useState(false)
    const navItems =['Home', 'Products', 'ProductCart', 'About']
  return (
    <div className='flex'>
       {navItems.map((n,i)=>(
        <NavItems key={i} text={n} />
       ))}
    </div>
  )
}

const NavItems =({text}:{text: string}) => (
    <span className='font-bold text-lg'>
        {text}
    </span>
)
