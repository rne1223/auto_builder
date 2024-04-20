import Workflow from '@/app/(main)/(pages)/workflows/_components/workflow'
import React from 'react'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="002asdlkfjasdk"
          publish={false}
        />
      </section>
    </div>
  );
}

export default Workflows