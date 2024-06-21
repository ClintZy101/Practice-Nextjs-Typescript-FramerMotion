'use client'

import React, { useState } from 'react'



type ThemeOptionProps<T> = {
    themeOptions: T[]
    selectedTheme: T
    onThemeClick: (theme: T)=> void
}


export default function SampleComp() {
    const [selectedTheme, setSelectedTheme] = useState('light')
    const themeOptions = ['light', 'dark', 'system']
    return (
        <div>
            <ThemeOptions themeOptions={themeOptions} selectedTheme={selectedTheme} onThemeClick={(theme)=> setSelectedTheme(theme)}  />
            <div className='text-white'>SELECTED THEME: {selectedTheme}</div>
        </div>
    )
}


function ThemeOptions<T extends React.ReactNode >({ themeOptions, selectedTheme, onThemeClick }: ThemeOptionProps<T>) {

    return (
        <ul>
            {themeOptions.map((theme, index) => (<li key={index}>
                <button
                onClick={()=>onThemeClick(theme)}
                className={`${theme === selectedTheme ? 'font-bold': 'font-regular' }`} 
                   >
                    {theme}
                </button> 
            </li>))}

        </ul>
    )
}
