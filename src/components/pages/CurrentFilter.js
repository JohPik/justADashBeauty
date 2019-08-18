import React, { Component, Fragment } from 'react'


export default class CurrentFilter extends Component {

filter = () => {
  const { skinType, prodType } = this.props

  if (skinType === "all" && prodType === "all") {
    return null
  } else if (skinType !== 'all') {
    if (prodType === 'all') {
      return (
        <Fragment>
          <h2>Your Current Filter</h2>
          <div className="filter">
            <span>Skin Type | {skinType}</span>
          </div>
        </Fragment>
      )
    } else {
      return(
        <Fragment>
          <h2>Your Current Filters</h2>
          <div className="filter">
            <span>Skin Type | {skinType}</span>
          </div>
          <div className="filter">
            <span>Product Type | {prodType}</span>
          </div>
        </Fragment>
        )
    }
  } else {
    return (
      <Fragment>
        <h2>Your Current Filter</h2>
        <div className="filter">
          <span>Product Type | {prodType}</span>
        </div>
      </Fragment>
    )
  }
}

render() {
  console.log("props", this.props);
    return (
      <Fragment>
        {this.filter()}
      </Fragment>
    )
  }
}
