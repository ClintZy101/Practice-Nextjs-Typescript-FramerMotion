'use client'

import { useParams, useRouter } from 'next/navigation'

import React from 'react'

export default function ProfileIDPage() {
  const params = useParams()
  let router = useRouter()
  console.log(params)
  return (
    <div>
      <div>My Profile Id Page: <strong>{params.id}</strong></div>  
      <button onClick={()=>router.push('/profile')}>Back to Main Profile Page</button>
    </div>
  )
}
