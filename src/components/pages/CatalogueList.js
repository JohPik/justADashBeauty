import React, { Component } from 'react'
import { ProductConsumer } from '../context'

// import SideBarFilter from './SideBarFilter'
import ThumbnailProd from './ThumbnailProd'


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

  componentWillMount(){
    const { skinId, prodId } = this.props.match.params
    const { skinType, prodType} = this.state

    if( skinId === skinType && prodId === prodType ) {
      console.log("ALL G BRO");
    } else {
      console.log("NEED TO DO SMTH");
      const temp = { skinTypeTemp: skinId, prodTypeTemp: prodId,}
      this.setState({ skinType:skinId, prodType:prodId, temp })
    }
  }

  componentDidUpdate(prevProps){
    const { skinId, prodId } = this.props.match.params
    const { skinType, prodType} = this.state

    const temp = { skinTypeTemp: skinId, prodTypeTemp: prodId,}

    if (skinId === skinType && prodId === prodType ) {
      console.log("DONT't Worry");
    } else {
      const temp = { skinTypeTemp: skinId, prodTypeTemp: prodId,}
      this.setState({ skinType:skinId, prodType:prodId, temp })
    }
  }

  /* HANDLE SIDE BAR SERACH*/
  handleChangeSkinType = (event) =>  {
    const temp = {...this.state.temp}
    temp.skinTypeTemp = event.target.value;
    this.setState({ temp })
  }

  handleChangeProdType = (event) =>  {

    const temp = {...this.state.temp}
    temp.prodTypeTemp = event.target.value;
    this.setState({ temp })
  }

  handleSubmit = (event) =>  {
    const skinType = this.state.temp.skinTypeTemp
    const prodType = this.state.temp.prodTypeTemp
    this.setState({ skinType, prodType})
    event.preventDefault();
    this.props.history.push(`/shop/skintype=${skinType}&prodtype=${prodType}`)
  }


  /* List Rendering*/
  renderList = (value) => {
    if (this.state.skinType === "all" && this.state.prodType === "all" ) {
      return value.productList.map(prod => <ThumbnailProd prod={prod} key={prod.id}/>)
    } else if (this.state.prodType === "all") {
      return value.productList.filter( prod => prod.skinType.includes(this.state.skinType)).map(prod => <ThumbnailProd prod={prod} key={prod.id}/> )
    } else if (this.state.skinType === "all") {
      return value.productList.filter( prod => prod.productType.includes(this.state.prodType)).map(prod => <ThumbnailProd prod={prod} key={prod.id}/> )
    } else {
      const nbrOfProd = value.productList.filter( prod => prod.skinType.includes(this.state.skinType) && prod.productType.includes(this.state.prodType) )
      return nbrOfProd.length === 0 ? <p>Sorry no product match you research</p> : nbrOfProd.map(prod => <ThumbnailProd prod={prod} key={prod.id}/>)
    }
  }

  render(){
    //console.log(this.state);
    return (
      <section className="shop">
        <h1 className="underline">Shop</h1>
          <section className="sidebar-filter">
               <form onSubmit={this.handleSubmit}>
                <select name="skinType" value={this.state.temp.skinTypeTemp} onChange={this.handleChangeSkinType}>
                  <option value="all">All</option>
                  <option value="oily" defaultValue >Oily</option>
                  <option value="problematic">Problematic</option>
                  <option value="sensitive">Sensitive</option>
                  <option value="normal">Normal</option>
                  <option value="dry">Dry</option>
                </select>

                <select name="prodType" value={this.state.temp.prodTypeTemp} onChange={this.handleChangeProdType}>
                  <option value="all">All</option>
                  <option value="cleanser">Cleanser</option>
                  <option value="toningMist">Toning Mist</option>
                  <option value="exfoliant">Exfoliant</option>
                  <option value="serum">Serum</option>
                  <option value="moisturiser">Moisturiser</option>
                  <option value="treatment">Treatment</option>
                </select>

                <input type="submit" value="Filter" />
              </form>
          </section>
        <hr/>
        <section className="shop-list">
          {this.renderList(this.props.value)}
        </section>
      </section>
    )
  }
}


export default React.forwardRef((props, ref) => (
  <ProductConsumer>
    {value => <CatalogueList {...props} value={value} ref={ref} />}
  </ProductConsumer>
));
