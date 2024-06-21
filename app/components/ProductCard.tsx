import React from 'react'
import { StringDecoder } from 'string_decoder'

type ProductData<T> = {
  title: T
  description: T
  price: number
  // sizes: T[]
}

export default function ProductCard<T extends React.ReactNode>({ title, description, price }: ProductData<T>) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
