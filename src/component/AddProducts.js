import React, { Component } from 'react';
import './home.css';
export default class AddProducts extends Component {
   // Thêm sản phẩm
    addProducts(event){
    event.preventDefault();
    var nameAdd = event.target['name'].value;
    var codeAdd = event.target['code'].value;
    var priceAdd = event.target['newPrice'].value;
    var oldPrice=event.target['priceOld'].value;
    var imageAdd = event.target['image'].files[0].name;
    var categoryAdd = event.target['category'].value;
    var product = JSON.parse(localStorage.getItem("products"));
    console.log(product);
    var id = 0;
    if(!product){
     product=[];
     id=1;
    }else{
      id = product[product.length - 1].id + 1;
    }
    var pro={
        id:id,
        name:nameAdd,
        code:codeAdd,
        price:priceAdd,
        oldePrice:oldPrice,
        image:imageAdd,
        category:categoryAdd
    }
    product.push(pro);
    localStorage.setItem('products',JSON.stringify(product));
    alert('Bạn đã thêm sản phẩm thành công');
}
    render() {
        return (
            <div className="container" width={60} margin-top={20}>
                <h1 className="text-center">THÊM SẢN PHẨM</h1>
                <form onSubmit={this.addProducts}>
                    <div className="form-group">
                        <select name="category" id="category" className="form-control">
                            <option value="Thời trang nam">Thời Trang Nam</option>
                            <option value="Thời Trang Nữ">Thời Trang Nữ</option>
                        </select><br/>
                        <input type="text" className="form-control" id="nameProduct" placeholder="Nhập tên sản phẩm" name="name" required/><br />
                        <input type="text" className="form-control" id="code" placeholder="Nhập mã sản phẩm" name="code" required/><br />
                        <input type="number" className="form-control" id="price" placeholder="Nhập giá sản phẩm" name="newPrice" required/><br/>
                        <input type="number" className="form-control" id="price" placeholder="Nhập giá Củ" name="priceOld" required/><br/>
                        <input type="file" className="form-control" id="image" placeholder="hình ảnh" name="image" required  accept='image/*' onchange='openFile(event)'/><br />
                        <button className="btn btn-info">Thêm sản phẩm</button>
                    </div>
                </form>
            </div>
        );
    }
}
