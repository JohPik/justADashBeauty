import React, { Component, Fragment } from 'react'


export default class CurrentFilter extends Component {

  state = {
    showForm: false
  }


  /* Display the Current Filter*/
  displayCurrentFilter = () => {
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
            <button onClick={() => this.props.resetFilter("skinType")}>x</button>
            </div>
          </Fragment>
        )
      } else {
        return(
          <Fragment>
            <h2>Your Current Filters</h2>
              <div className="single-filter">
              Skin Type <span>| {skinType}</span>
            <button onClick={() => this.props.resetFilter("skinType")}>x</button>
            </div>
            <div className="single-filter">
              Product Type <span>| {prodType}</span>
            <button onClick={() => this.props.resetFilter("prodType")}>x</button>
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
          <button onClick={() => this.props.resetFilter("prodType")}>x</button>
          </div>
        </Fragment>
      )
    }
  }

  /* Manage Drop Down Form */
  displayForm = () => {
    const { temp, handleChangeSkinType, handleChangeProdType } = this.props
    return (
      // DONT TOUCH MOTHER FUCKER

      // ORIGINAL FORM

      <Fragment>
        <h3>Filter Products</h3>
        <span className="close-form" onClick={ () => this.setState({ showForm: false}) }>x</span>
        <form onSubmit={this.props.handleSubmit}>

          <div className="form-select form-radio">
           <p className="form-subheading">Skin Type</p>
               <label className="radio-container">All
                <input type="radio" name="skin-type" id="all" value="all" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "all"}/>
                <span className="checkmark"></span>
               </label>
               <label className="radio-container">Oily
                  <input type="radio" name="skin-type" id="oily" value="oily" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "oily"}/>
                  <span className="checkmark"></span>
               </label>
               <label className="radio-container">Problematic
                 <input type="radio" name="skin-type" id="problematic" value="problematic" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "problematic"}/>
                <span className="checkmark"></span>
               </label>
               <label className="radio-container">Sensitive
                <input type="radio" name="skin-type" id="sensitive" value="sensitive" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "sensitive"}/>
                <span className="checkmark"></span>
               </label>
               <label className="radio-container">Normal
                  <input type="radio" name="skin-type" id="normal" value="normal" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "normal"}/>
                  <span className="checkmark"></span>
               </label>
               <label className="radio-container">Dry
                 <input type="radio" name="skin-type" id="dry" value="dry" onChange={handleChangeSkinType} checked={temp.skinTypeTemp === "dry"}/>
                <span className="checkmark"></span>
               </label>
           </div>

           <div className="form-select form-radio">
            <p className="form-subheading">Skin Type</p>
                <label className="radio-container">All
                  <input type="radio" name="prod-type" id="all" value="all" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "all"}/>
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Cleanser
                  <input type="radio" name="prod-type" id="cleanser" value="cleanser" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "cleanser"}/>
                <span className="checkmark"></span>
                </label>
                <label className="radio-container">Toning Mist
                  <input type="radio" name="prod-type" id="toningMist" value="toningMist" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "toningMist"}/>
                <span className="checkmark"></span>
                </label>
                <label className="radio-container">Exfoliant
                  <input type="radio" name="prod-type" id="exfoliant" value="exfoliant" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "exfoliant"}/>
                <span className="checkmark"></span>
                </label>
                <label className="radio-container">Serum
                  <input type="radio" name="prod-type" id="serum" value="serum" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "serum"}/>
                <span className="checkmark"></span>
                </label>
                <label className="radio-container">Moisturiser
                  <input type="radio" name="prod-type" id="moisturiser" value="moisturiser" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "moisturiser"}/>
                <span className="checkmark"></span>
                </label>
                <label className="radio-container">Treatment
                  <input type="radio" name="prod-type" id="treatment" value="treatment" onChange={handleChangeProdType} checked={temp.prodTypeTemp === "treatment"}/>
                <span className="checkmark"></span>
                </label>
            </div>

            <div className="form-submit-container">
              <button className="form-submit"  type="submit" onClick={ () =>  this.setState({showForm: false}) }><span>Filter</span></button>
            </div>
        </form>
      </Fragment>
 )}


render() {
    return (
      <Fragment>
        {/* Current Filter */}
        {this.state.showForm ? null :
          <div className="current-filters">
            {this.displayCurrentFilter()}
            <div className="show-form-button-container">
              {this.props.prodType === "all" && this.props.skinType === "all" ?
              <button className="show-form" onClick={ () => this.setState({ showForm: true })}>Add Filter</button>
                :
              <button className="show-form" onClick={ () => this.setState({ showForm: true })}>Edit Current Filters</button>
              }
            </div>
          </div>
        }
        {/* FORM */}
        <div className="sidebar-filter" style={ this.state.showForm ? null :{ display: 'none'} }>
          {this.displayForm()}
        </div>

    </Fragment>
    )
  }
}
