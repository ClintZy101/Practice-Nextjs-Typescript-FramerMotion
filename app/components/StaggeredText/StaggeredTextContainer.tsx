import React from 'react'

export default function StaggeredTextContainer({children}:{children: React.ReactNode}) {
  return (
    <div className='w-full h-[700px] bg-black text-white items-center justify-center flex'>{children}</div>
  )
}
