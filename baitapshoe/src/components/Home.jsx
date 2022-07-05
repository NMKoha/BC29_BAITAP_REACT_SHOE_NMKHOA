import React, { Component } from 'react'

import danhSachGiay from "../Data/data.json";
import ChiTietSanPham from './ChiTietSanPham';
import Giay from './Giay';
import GioHang from './GioHang';


export default class Home extends Component {
  state ={
    selectedShoe: danhSachGiay[0],
    cartList: [],
  }
  addToCart = (item) => {
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.id === item.id);

    if (idx !== -1) data[idx].soLuong += 1;
    else data.push({ ...item, soLuong: 1 });
    console.log(data);

    this.setState({
      cartList: data,
    });
  };

  handleQuantity = (item, isIncrease) => {
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.id === item.id);

    if (idx !== -1)
      if (isIncrease) data[idx].soLuong += 1;
      else if (data[idx].soLuong > 1) data[idx].soLuong -= 1;
      else if (window.confirm("Xóa k ?????")) data.splice(idx, 1);

    this.setState({
      cartList: data,
    });
  };

  deleteTtem = (id) => {
    const data = [...this.state.cartList];
    data.map((ele) => {
      if (ele.id === id) data.splice(ele[id]);
    });
    console.log(data);
  };
  renderShoestList=()=>{
    return danhSachGiay.map(ele=>{
      return (
        <div className="col-4" key={ele.id}>
          <Giay selectShoe={this.selectShoe} addToCart={this.addToCart} item={ele}/>

        </div>
      );
    });
    // return content;
  };
  selectShoe=(item)=>{
    console.log(item);
    this.setState({
      selectedShoe: item,
    });
  };
  
  // showDescription =(description)=>{
  //   alert(description);
  // };
  render() {
    const {
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,        
      image,
    }=this.state.selectedShoe;
    return (
      <div className=" container">
        {/* <GioHang /> */}
        <div className='row'>{this.renderShoestList()}</div>
        <ChiTietSanPham selectedShoe={this.state.selectedShoe}/>
        <div >
              <GioHang
                handleQuantity={this.handleQuantity}
                cartList={this.state.cartList}
                deleteItem={this.deleteItem}
              />
            </div>
      </div>
    )
  }
}
