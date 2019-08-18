import React, { Component, Fragment } from 'react'


export default class CurrentFilter extends Component {

  state = {
    showForm: false
  }

showCurrentFilter = () => {
  const { skinType, prodType } = this.props

  if (skinType === "all" && prodType === "all") {
    return null
  } else if (skinType !== 'all') {
    if (prodType === 'all') {
      return (
        <Fragment>
          <h2>Your Current Filter</h2>
          <div className="single-filter">
            Skin Type <span>| {skinType}</span>
          {/*<button onClick={() => this.props.resetFilter(skinType)}>x</button>*/}
          </div>
        </Fragment>
      )
    } else {
      return(
        <Fragment>
          <h2>Your Current Filters</h2>
            <div className="single-filter">
            Skin Type <span>| {skinType}</span>
          </div>
          <div className="single-filter">
            Product Type <span>| {prodType}</span>
          </div>
        </Fragment>
        )
    }
  } else {
    return (
      <Fragment>
        <h2>Your Current Filter</h2>
          <div className="single-filter">
          Product Type <span>| {prodType}</span>
        </div>
      </Fragment>
    )
  }


}

render() {
  console.log("props", this.props);
    return (
      <Fragment>

        {this.state.showForm ? null :
          <div className="current-filters">
            {this.showCurrentFilter()}
            <div className="show-form-button-container">
              <button className="show-form" onClick={ () => this.setState({ showForm: true })}>Show Filters</button>
            </div>
          </div>
        }

        {this.state.showForm ? (
          <div className="sidebar-filter" style={ this.state.showForm ? null :{ display: 'none'} }>
               <form onSubmit={this.props.handleSubmit}>

                 <div className="form-select">
                  <label>Select a Skin Type:</label>
                  <select name="skinType" value={this.props.temp.skinTypeTemp} onChange={this.props.handleChangeSkinType}>
                    <option value="all">All</option>
                    <option value="oily" defaultValue >Oily</option>
                    <option value="problematic">Problematic</option>
                    <option value="sensitive">Sensitive</option>
                    <option value="normal">Normal</option>
                    <option value="dry">Dry</option>
                  </select>
                  </div>

                <div className="form-select">
                  <label>Select a Product Type:</label>
                  <select name="prodType" value={this.props.temp.prodTypeTemp} onChange={this.props.handleChangeProdType}>
                    <option value="all">All</option>
                    <option value="cleanser">Cleanser</option>
                    <option value="toningMist">Toning Mist</option>
                    <option value="exfoliant">Exfoliant</option>
                    <option value="serum">Serum</option>
                    <option value="moisturiser">Moisturiser</option>
                    <option value="treatment">Treatment</option>
                  </select>
                </div>

                <input type="submit" value="Filter" onClick={ () =>  this.setState({showForm: false}) }/>
              </form>
          </div>
        ) : null}


    </Fragment>
    )
  }
}
