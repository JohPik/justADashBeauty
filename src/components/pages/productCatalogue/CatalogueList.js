import React, { Component, Fragment } from 'react'
import { ProductConsumer } from '../../context'

// import SideBarFilter from './SideBarFilter'
import CurrentFilter from './CurrentFilter'
import ThumbnailProd from './ThumbnailProd'
import BreadCrumb from '../../BreadCrumb'


class CatalogueList extends Component {

  state = {
    nbrOfProd: 18,
    skinType: "all",
    prodType: "all",
    temp: {
      skinTypeTemp: "all",
      prodTypeTemp: "all"
    }
  }

  /* Make sure URL and State match in Order to Render correct List */
  componentWillMount(){
    const { skinId, prodId } = this.props.match.params
    const { skinType, prodType} = this.state
    const temp = { skinTypeTemp: skinId, prodTypeTemp: prodId }

    return (
      skinId === skinType && prodId === prodType ? null : this.setState({ skinType:skinId, prodType:prodId, temp })
    )
  }

  /* Make sure URL and State match in Order to Render correct List */
  componentDidUpdate(){
    const { skinId, prodId } = this.props.match.params
    const { skinType, prodType} = this.state
    const temp = { skinTypeTemp: skinId, prodTypeTemp: prodId }

    return (
      skinId === skinType && prodId === prodType ? null : this.setState({ skinType:skinId, prodType:prodId, temp })
    )

  }

  /* Handle Side Bar Search Inside the Form */
  handleChangeSkinType = (event) =>  {
    const temp = {...this.state.temp}
    temp.skinTypeTemp = event.target.value
    this.setState({ temp })
  }

  handleChangeProdType = (event) =>  {

    const temp = {...this.state.temp}
    temp.prodTypeTemp = event.target.value
    this.setState({ temp })
  }

  handleSubmit = (event) =>  {
    const skinType = this.state.temp.skinTypeTemp
    const prodType = this.state.temp.prodTypeTemp
    this.setState({ skinType, prodType})
    event.preventDefault();
    this.props.history.push(`/shop/skintype=${skinType}&prodtype=${prodType}`)
  }

/* Reset Filter when a Current filter is being closed (click on cross) */
  resetFilter = (type) => {
    const temp = { skinTypeTemp: "all", prodTypeTemp: "all" }

    if (type === "skinType" ) {
      const skinType = "all"
      const prodType = this.state.prodType
      this.setState({ skinType, prodType, temp })
      this.props.history.push(`/shop/skintype=${skinType}&prodtype=${prodType}`)
    } else {
      const skinType = this.state.skinType
      const prodType = "all"
      this.setState({ skinType, prodType, temp })
      this.props.history.push(`/shop/skintype=${skinType}&prodtype=${prodType}`)
    }
  }


  /* List Rendering */
  renderList = (value) => {
    if (this.state.skinType === "all" && this.state.prodType === "all" ) {
      return value.productList.map(prod => <ThumbnailProd prod={prod} key={prod.id}/>)
    } else if (this.state.prodType === "all") {
      return value.productList.filter( prod => prod.skinType.includes(this.state.skinType)).map(prod => <ThumbnailProd prod={prod} key={prod.id}/> )
    } else if (this.state.skinType === "all") {
      return value.productList.filter( prod => prod.productType.includes(this.state.prodType)).map(prod => <ThumbnailProd prod={prod} key={prod.id}/> )
    } else {
      const nbrOfProd = value.productList.filter( prod => prod.skinType.includes(this.state.skinType) && prod.productType.includes(this.state.prodType) )
      return nbrOfProd.length === 0 ? <p>Sorry no product match you research</p> : nbrOfProd.map(prod => <ThumbnailProd prod={prod} key={prod.id}/> )
    }
  }

  render(){
    return (
      <Fragment>
        <BreadCrumb match={this.props.match} shop={true} />
        <section className="shop">
          <h1 className="underline">Shop</h1>
          <section className="filter-container">
            <CurrentFilter
              skinType={this.state.skinType}
              prodType={this.state.prodType}
              temp={this.state.temp}
              handleChangeSkinType={this.handleChangeSkinType}
              handleChangeProdType={this.handleChangeProdType}
              handleSubmit={this.handleSubmit}
              resetFilter={this.resetFilter}
              />
          </section>
          <section className="shop-list">
            {this.renderList(this.props.value)}
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
          </section>
        </section>
      </Fragment>
    )
  }
}


export default React.forwardRef((props, ref) => (
  <ProductConsumer>
    {value => <CatalogueList {...props} value={value} ref={ref} />}
  </ProductConsumer>
));
