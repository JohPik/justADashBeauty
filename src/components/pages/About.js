import React, {Fragment} from 'react';
import BreadCrumb from '../BreadCrumb'

const About = (props) => {

  const renderMe = () => {
    return (
    <Fragment>
      <BreadCrumb match={props.match}/>
        <section className="about-page">
          <div className="text-box">
            <h1 className="underline">About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="img-container">
           <img src= "/images/Model-shoot-1.jpg" alt="Model Picture - About Page"/>
          </div>
        </section>
    </Fragment>
    )
  }

  return(
    renderMe()
  )
}

export default About
