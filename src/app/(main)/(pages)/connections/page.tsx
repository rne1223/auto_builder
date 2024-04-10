import ConnectionCard from '@/app/(main)/(pages)/connections/_components/connection-card'
import { CONNECTIONS } from '@/lib/constants'
import React from 'react'

type Props = {
  searchParams?: {[key: string]: string | undefined}
}

//WIP: Connections to be completed

const ConnectionsPage = ( {searchParams}: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
        <h1 className="sticky top-0 z-[10] flex items-center 
          justify-between border-b bg-background/50 
          p-6 text-4xl backdrop-blur-lg" 
        >
            Connections 
        </h1>
        <div className="relative flex flex-col gap-4">
          <section className="flex flex-col gap-4 p-6 text-muted-foreground">
            Connect all your apps directly
            { CONNECTIONS.map((connection) => (
              <ConnectionCard 
                key={connection.title} 
                type={connection.title} 
                icon={connection.image} 
                title={connection.title} 
                description={connection.description}
                // connected={connections}              
              />
              )) 
            }
          </section>
        </div>
    </div>
  )
}

export default ConnectionsPage