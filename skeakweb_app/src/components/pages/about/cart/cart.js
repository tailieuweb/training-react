import React from 'react';
import './cart.scss'
// 
import img_male_product_in_cart from '../cart/image/zx-2k-4d-shoes6.png'

class Cart extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="product_cart_all">
                    <h2>Giỏ Hàng Của Bạn</h2>
                    <div className="all-collum-card">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="product-in-cart">
                                    <p>Số sản phẩm bạn có trong giỏ hàng</p>
                                    <div className="detail-product-incart">
                                        <div className="row">
                                            <div className="col-md4">
                                                <div className="img-product-in-cart">
                                                    <img src={img_male_product_in_cart} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="name-product-in-cart">
                                                    <b>Sneaker Adidas </b>
                                                    <p>Sản Phẩm 1</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="note-product">
                                            <b>Ghi chú đơn hàng </b>
                                        </div>
                                        <div className="input_note_product_cart">
                                            <input type="note" className="note_detail"></input>
                                            <marquee direction="right" className="text-run">www.jaecaresneaker.com</marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="total-price">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="buttons_added">
                                                <input className="minus is-form" type="button" value="-"></input>
                                                <input aria-label="quantity" className="input-pty" max="50" min="1" name="" type="number" value="1"></input>
                                                <input className="plus is-from" type="button" value="+"></input>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="price_product">
                                                <p>16,000,000</p>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="into_money">
                                                <div className="total">
                                                    <p>Into Money</p>
                                                </div>
                                                <div className="price_into_money">
                                                    <p>16,000,000</p>
    
                                                </div>
                                                <div className="trash">
                                                <a>🗑</a> 
                                                </div>
   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3">Collum 3</div>
                        </div>
                    </div>

                </div>
            </div >

        );
    }
}
export default Cart;