'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Profile() {
  const router = useRouter()
  console.log(router)
  return (
    <div className='flex flex-col grid-cols-1  items-center'>Profile page:
      <Link href={{
        pathname:"profile/1",
        query:{
          userName: 'Clint Tay',
          userID: 14,
          person: JSON.stringify({
            age: 31
          })
        }
      }}>Profile 1</Link>
      <button onClick={()=>router.push('/profile/2')}>Profile 2</button>
      <button onClick={()=>router.push('/profile/3')}>Profile 3</button>
      <a href="https:/clinttay.com">Clint Tay's website</a>
    </div>
  )
}
