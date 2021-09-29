import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <>
                {/* <!-- Utilize Cart Menu Start --> */}
                <div id="ltn__utilize-cart-menu" class="ltn__utilize ltn__utilize-cart-menu">
                    <div class="ltn__utilize-menu-inner ltn__scrollbar">
                        <div class="ltn__utilize-menu-head">
                            <span class="ltn__utilize-menu-title">Cart</span>
                            <button class="ltn__utilize-close">×</button>
                        </div>
                        <div class="mini-cart-product-area ltn__scrollbar">
                            <div class="mini-cart-item clearfix">
                                <div class="mini-cart-img">
                                    <a href="#"><img src="img/product/1.png" alt="Image" /></a>
                                    <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                                </div>
                                <div class="mini-cart-info">
                                    <h6><a href="#">Wheel Bearing Retainer</a></h6>
                                    <span class="mini-cart-quantity">1 x $65.00</span>
                                </div>
                            </div>
                            <div class="mini-cart-item clearfix">
                                <div class="mini-cart-img">
                                    <a href="#"><img src="img/product/2.png" alt="Image" /></a>
                                    <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                                </div>
                                <div class="mini-cart-info">
                                    <h6><a href="#">Brake Conversion Kit</a></h6>
                                    <span class="mini-cart-quantity">1 x $85.00</span>
                                </div>
                            </div>
                            <div class="mini-cart-item clearfix">
                                <div class="mini-cart-img">
                                    <a href="#"><img src="img/product/3.png" alt="Image" /></a>
                                    <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                                </div>
                                <div class="mini-cart-info">
                                    <h6><a href="#">OE Replica Wheels</a></h6>
                                    <span class="mini-cart-quantity">1 x $92.00</span>
                                </div>
                            </div>
                            <div class="mini-cart-item clearfix">
                                <div class="mini-cart-img">
                                    <a href="#"><img src="img/product/4.png" alt="Image" /></a>
                                    <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                                </div>
                                <div class="mini-cart-info">
                                    <h6><a href="#">Shock Mount Insulator</a></h6>
                                    <span class="mini-cart-quantity">1 x $68.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="mini-cart-footer">
                            <div class="mini-cart-sub-total">
                                <h5>Subtotal: <span>$310.00</span></h5>
                            </div>
                            <div class="btn-wrapper">
                                <a href="cart.html" class="theme-btn-1 btn btn-effect-1">View Cart</a>
                                <a href="cart.html" class="theme-btn-2 btn btn-effect-2">Checkout</a>
                            </div>
                            <p>Free Shipping on All Orders Over $100!</p>
                        </div>

                    </div>
                </div>
                {/* <!-- Utilize Cart Menu End --> */}

                {/* <!-- MODAL AREA START (Wishlist Modal) --> */}
                <div class="ltn__modal-area ltn__add-to-cart-modal-area">
                    <div class="modal fade" id="liton_wishlist_modal" tabindex="-1">
                        <div class="modal-dialog modal-md" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="ltn__quick-view-modal-inner">
                                        <div class="modal-product-item">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="modal-product-img">
                                                        <img src="img/product/7.png" alt="#" />
                                                    </div>
                                                    <div class="modal-product-info">
                                                        <h5><a href="product-details.html">Brake Conversion Kit</a></h5>
                                                        <p class="added-cart"><i class="fa fa-check-circle"></i> Successfully added to your Wishlist</p>
                                                        <div class="btn-wrapper">
                                                            <a href="wishlist.html" class="theme-btn-1 btn btn-effect-1">View
                                                                Wishlist</a>
                                                        </div>
                                                    </div>
                                                    {/* <!-- additional-info --> */}
                                                    <div class="additional-info d-none">
                                                        <p>We want to give you <b>10% discount</b> for your first order, <br /> Use discount code at checkout
                                                        </p>
                                                        <div class="payment-method">
                                                            <img src="img/icons/payment.png" alt="#" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- MODAL AREA END --> */}
            </>
        )
    }
}
