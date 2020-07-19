import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
export default class Home extends Component {
      constructor(){
    super();
     var product =JSON.parse(localStorage.getItem("products"));
   this.state={
     products:product
   }
  }
// Order sản phẩm
    order(){
        return(event)=>{
            alert('Bạn đã đặt hàng thành công !');
        }
    }
    getOldPrice(oldePrice){
       if(oldePrice!=0){
           return oldePrice;
       }else{
        return "";
       }
    }
  render() {
    return (
<div className="container">
    <div className="row">
    {
    this.state.products.map((item,index)=>
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
        <div className="card text-black bg-black mt-5 card">
            <div className="card-header header" >
                <img className="card-img-top image" src={'image/'+item.image} alt="Card image" ></img>
            </div>
            <div className="card-body">
                    <h3 className="card-title namecard">{item.name}</h3>
                    <hr/>
            <p className="text-center">{item.code}</p>
    <p className="text-center price">{new Intl.NumberFormat('de-DE').format(item.price)}<span>&nbsp;VND</span> <strike className="oldPrice">{ this.getOldPrice(item.oldePrice)}</strike></p>
            </div>
            <div className="card-footer footerCard">
                <button className="btn btn-warning btnOrder" onClick={this.order()}>Đặt Mua</button>
             </div>
            </div>
        </div>
        )
    }
    </div>
</div>
    );
  }
}

