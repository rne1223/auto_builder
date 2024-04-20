import { ConnectionsProvider } from '@/providers/connections-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

type Props = {
  id: string
}

const Page = ({params}:{params : {slug: string}}) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>  
      </EditorProvider>
    </div>
  )
}

export default Page