import React, { Component } from 'react'

class ExtraContent extends Component {

  state = {
    extraContent: [], descr: "", descrLabel: "",
    extraContentLabel: [], ingred: "", ingredLabel: "", direct: "", directLabel: ""
  }

  componentDidMount(){
    /* manage every single part of the dropDown*/
    let extraContent = document.querySelectorAll(".text-dropdown")
    let descr = extraContent[0]
    let ingred = extraContent[1]
    let direct = extraContent[2]

    let extraContentLabel = document.querySelectorAll(".extra-content h3")
    let descrLabel = extraContentLabel[0]
    let ingredLabel = extraContentLabel[1]
    let directLabel = extraContentLabel[2]

    /* Add dropDown items to the State*/
    this.setState({
      extraContent, descr, descrLabel, extraContentLabel, ingred, ingredLabel, direct, directLabel
    })

  }


  /*Manage Toggle*/
  openExtraContent = (content, label) => {
    // Manage Section
    this.state.extraContent.forEach( (el) => {
      el.classList.remove("open")
    } )
    content.classList.add("open");

    // Manage "Link"
    this.state.extraContentLabel.forEach( (el) => {
      el.classList.add("closed")
    } )
    label.classList.remove("closed");
  }

  render() {
    const { description, loveList, ingredients, directions } = this.props
    const { descr, descrLabel, ingred, ingredLabel, direct, directLabel } = this.state

    return (
      <div className="extra-content-section">
        <div className="extra-content">
          <h3 onClick={ () => this.openExtraContent(descr, descrLabel) }>Description</h3>
          <div className="text-dropdown open">
            <p>
              {description}
            </p>
              Why we love it:
              <ul className="loveList">
                {loveList.map( (li, index) => <li key={index}>{li}</li>)}
              </ul>
          </div>
        </div>

        <div className="extra-content">
          <h3 className="closed" onClick={ () => this.openExtraContent(ingred, ingredLabel) }>Ingredients</h3>
          <div className="text-dropdown">
            <p>{ingredients}</p>
          </div>
        </div>

        <div className="extra-content">
          <h3 className="closed" onClick={ () => this.openExtraContent(direct, directLabel) }>Directions</h3>
          <div className="text-dropdown">
            <p>{directions}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ExtraContent
