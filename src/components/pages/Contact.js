import React from 'react';
import BreadCrumb from '../BreadCrumb'

const Contact = (props) => {
  return(
    <div>
      <BreadCrumb match={props.match}/>
      <h1 className="underline">
        Contact
      </h1>
    </div>
  )
}

export default Contact
