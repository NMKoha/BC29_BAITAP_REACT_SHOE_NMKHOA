import React, { Component } from 'react'
import GioHang from './GioHang'
import Home from './Home'


export default class Props extends Component {
  render() {
    return (
      
       <div className="row">
        <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
         <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
        <a className="nav-link " id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Gio Hang</a>
        
        </div>
        </div>
        <div className="col-9">
         <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane w3-animate-right fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Home/></div>
        <div className="tab-pane w3-animate-right fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><GioHang/></div>
       
        </div>
        </div>
</div>

    )
  }
}
