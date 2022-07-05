import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
  render() {
    const {
        name,
        alias,
        price,
        description,
        shortDescription,
        quantity,        
        image,
      }=this.props.selectedShoe;
    return (
      <div>
        <div className="row mt-5">
          <div className="col-5">
            <h4>{name}</h4>
            <img src={image} className="img-fluid" alt="phone" />
          </div>
          <div className="col-7">
            <h4 className="mb-5">THÔNG TIN CHI TIẾT</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên</td>
                  <td>{alias}</td>
                </tr>
                <tr>
                  <td>Giá</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>Thông tin</td>
                  <td>{description}</td>
                </tr>
                <tr>
                  <td>Thông tin cơ bản</td>
                  <td>{shortDescription}</td>
                </tr>
                <tr>
                  <td>Số lượng còn</td>
                  <td>{quantity}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
