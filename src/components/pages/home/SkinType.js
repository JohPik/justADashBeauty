import React from 'react';
import { Link } from 'react-router-dom';

const Skintype = (props) => {

  const skins = [
    { name: "oily", picture: "/images/homePAge/Oily-Combination | Just-A-Dash.jpg", url:"/shop/skintype=oily&prodtype=all" },
    { name: "dry", picture: "/images/homePAge/Dry | Just-A-Dash.jpg", url:"/shop/skintype=dry&prodtype=all" },
    { name: "sensitive", picture: "/images/homePAge/Sensitive | Just-A-Dash.jpg", url:"/shop/skintype=sensitive&prodtype=all" },
    { name: "problematic", picture: "/images/homePAge/Problematic | Just-A-Dash.jpg", url:"/shop/skintype=problematic&prodtype=all" },
    { name: "dull", picture: "/images/homePAge/Dull-Dark-Spots | Just-A-Dash.jpg", url:"/shop/skintype=normal&prodtype=all" },
    { name: "normal", picture: "/images/homePAge/Normal | Just-A-Dash.jpg", url:"/shop/skintype=normal&prodtype=all" }
  ]

  return (
      <section className="shop-by-skintype">
        <h2>Shop By Skin Type</h2>
      <div className="skintypes-container">
        {skins.map( skin =>
          <div className="single-skintype-container" key={skin.name}>
            <Link to={skin.url}>
              <div className="skintype-txt-container">
                <h3>{skin.name}</h3>
              </div>
              <div className="skintype-img-container">
                <img src= {skin.picture} alt={`shop ${skin.name} range`}/>
              </div>
            </Link>
          </div>
        )}
      </div>
      </section>
  )
}

export default Skintype
