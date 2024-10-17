import Input02 from '@/components/input-01'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div className='flex flex-col gap-y-4'>
        <Input02 />
        <Input02 />
        <Input02 />
      </div>
    </div>
  )
}

