import WorkflowButton from '@/app/(main)/(pages)/workflows/_components/workflow-button'
import React from 'react'

const WorkflowsPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
        <h1 
          className="text-4xl stick top-0 z-[10] 
            p-6 bg-background/50 backdrop-blur-lg 
            flex items-center border-b justify-between"
        >
           Workflows
           <WorkflowButton />
        </h1>
    </div>
  )
}

export default WorkflowsPage