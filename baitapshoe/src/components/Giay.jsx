import React, { Component } from 'react'

export default class Giay extends Component {
  render() {

    const{image,name,price,description}=this.props.item;
    return (
        <div className="card">
        <img className="card-img-top" src={image} alt />
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}$</p>
        <button onClick={()=>this.props.selectShoe(this.props.item)} className="btn btn-info">Xem mô tả</button>
        <button onClick={() => this.props.addToCart(this.props.item)} className="btn btn-dark ml-2">Add to carts<i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
    )
  }
}
