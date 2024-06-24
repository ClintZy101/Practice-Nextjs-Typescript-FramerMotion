'use client'

import { useParams } from 'next/navigation'


export default function ProfileIDPostID() {
  const params = useParams()
  console.log('post params:', params)
  return (
    <div>ProfileIDPostID: {params.postID}</div>
  )
}
