import React, { Component } from 'react'

class List extends Component {
  state = {
    selected : false,
    like: 0,
    dislike: 0
  }
  getPercent = (value, total) => {
    let result = (value * 100) / total
    result = result || 0
    result =  result < 10 ? '0' + result.toFixed(1) : result.toFixed(1)
    result= result.replace('.0', '')
    return result
  } 
  componentWillMount(){
    let {positive, negative} = this.props.data
    positive = positive || 0
    negative =  negative || 0
    let total = positive + negative
    this.setState({
      like : this.getPercent(positive,total),
      dislike : this.getPercent(negative,total)
    })
  }
  toggleSelect = () =>{
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    return (
      <li className={"itemCard" + (this.state.selected ? ' selected' : '' )} onClick={this.toggleSelect}>
        <div className="itemWrapper">
          <div className="itemImg">
            <img src={this.props.data.picture} alt={this.props.data.name} />
          </div>
          <div className="itemId">
            <span>{this.props.data.index}</span>
          </div>
          <div className="itemTextBox">
            <span className="itemName">{this.props.data.name}</span>
            <span className="itemJob">{this.props.data.description}</span>
          </div>
        </div>
        <div className="itemStatus">
          <div className="statusHead">
            <div className="statusName"><span>GOSTAM</span></div>
            <div className="statusName"><span>NÃO GOSTAM</span></div>
          </div>
          <div className="statusInfo">
            <div className="statusValue"><span>{this.state.like}%</span></div>
            <div className="statusValue"><span>{this.state.dislike}%</span></div>
          </div>
        </div>
      </li>
    )
  }
}

export default List