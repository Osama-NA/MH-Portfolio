import React from 'react';
import PageNotFoundStyle from './index.styled';
import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <PageNotFoundStyle>
      <main>
        <h1>404</h1>
        <h3>Page not found</h3>
      </main>
      <Link to="/">Back to portfolio</Link>
    </PageNotFoundStyle>
  )
}

export default PageNotFound;