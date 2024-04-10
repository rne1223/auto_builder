import React from 'react'

type Props = {}

const Templates = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative">
        <h1 className="flex text-4xl stick top-0 z-[10] 
            p-6 bg-background/50 backdrop-blur-lg 
            items-center border-b"
        >
            Templates
        </h1>
    </div>
  )
}

export default Templates