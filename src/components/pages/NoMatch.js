import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const NoMatch = (props) => {
  return (
    <Fragment>
      <section className="404-page">
        <h1 className="underline">Error 404</h1>
        <p>Ooops Wrong page!</p>
        <button className="smart">
          <Link to="/">RETURN TO THE HOME PAGE</Link>
        </button>
      </section>
    </Fragment>
  )
}

export default NoMatch
