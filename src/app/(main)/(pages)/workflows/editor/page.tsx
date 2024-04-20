


import React from 'react'

type Props = {
  id: string
}

const Page = ({params}:{params : {slug: string}}) => {
  return (
    <div>Page {params.slug}</div>
  )
}

export default Page