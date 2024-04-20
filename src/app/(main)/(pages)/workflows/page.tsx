import Workflow from '@/app/(main)/(pages)/workflows/_components/workflow'
import WorkflowButton from './_components/workflow-button'
import React from 'react'
import Workflows from '@/app/(main)/(pages)/workflows/_components';

const Page = () => {
  return (
    <div className="flex flex-col relative">
      <h1
        className="text-4xl stick top-0 z-[10] 
            p-6 bg-background/50 backdrop-blur-lg 
            flex items-center border-b justify-between"
      >
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows />
      <Workflows />
      <Workflows />
      <Workflows />
    </div>
  );
}

export default Page