import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Page not found 404</title>
      </Helmet>
      Not found
    </div>
  )
}
