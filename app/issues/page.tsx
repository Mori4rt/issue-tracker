import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new" className="btn btn-primary">New Issue</Link>
    </div>
  )
}

export default IssuesPage