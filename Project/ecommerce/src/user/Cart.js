import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToCartZero, removeCart as rCart } from './../cartSlice';

const Cart = () => {
 
    
    const total = useSelector((data) => {
        return data.cart.count;
    })
    const dispatch = useDispatch()

    const [cart, setCart] = useState([])
    const [product, setProduct] = useState([])
    const [rerenderCart, setRender] = useState(false) 


    useEffect(() => {

        const fatchCartdata = async () => {

            const cartdata = await axios.get(`http://localhost:8000/cart?uid=${localStorage.getItem('userid')}`)

            setCart(cartdata.data)
            const productRequests = cartdata.data.map(item => axios.get(`http://localhost:8000/product/${item.pid}`));
            const productData = await Promise.all(productRequests)
            let pDATA = productData.map((res) => res.data)
            // console.log(pDATA);
            setProduct(pDATA)

                // result.data.map((res) => {
                //     axios.get(`http://localhost:8000/product/${res.id}`).then((p) => {
                //         // console.log(p.data);
                //         setProduct([...product, p.data])
                        
                //     })
                //     return []
                // })
           
            
        }

        fatchCartdata()

        
    }, [rerenderCart])
    
        const removeCart = (id, quntity) => {
            // console.log('hii');
            // aa delete ni api thi remove to thase pn refresh krvathi pa6u aavi jase 
        axios.delete(`http://localhost:8000/cart/${id}`).then(() => {
            // rerenderCart ? setRender(false): setRender(true)
            // OR 
            // setRender(!rerenderCart)

            setRender(!rerenderCart)
            dispatch(rCart(quntity))  // data ni quntity remove thata uper count bi less thay te mate dispatch no use kryo  
        })
    } 


  return (
    
      <>
          <main style={{ paddingTop: 90 }}>
              <div className="mb-4 pb-4" />
              <section className="shop-checkout container">
                  <h2 className="page-title">Cart</h2>
                  <div className="checkout-steps">
                      <a href="shop_cart.html" className="checkout-steps__item active">
                          <span className="checkout-steps__item-number">01</span>
                          <span className="checkout-steps__item-title">
                              <span>Shopping Bag</span>
                              <em>Manage Your Items List</em>
                          </span>
                      </a>
                      <a href="shop_checkout.html" className="checkout-steps__item">
                          <span className="checkout-steps__item-number">02</span>
                          <span className="checkout-steps__item-title">
                              <span>Shipping and Checkout</span>
                              <em>Checkout Your Items List</em>
                          </span>
                      </a>
                      <a href="shop_order_complete.html" className="checkout-steps__item">
                          <span className="checkout-steps__item-number">03</span>
                          <span className="checkout-steps__item-title">
                              <span>Confirmation</span>
                              <em>Review And Submit Your Order</em>
                          </span>
                      </a>
                  </div>
                  <div className="shopping-cart">
                      <div className="cart-table__wrapper">
                          <table className="cart-table">
                              <thead>
                                  <tr>
                                      <th>Product</th>
                                      <th />
                                      <th>Price</th>
                                      <th>Quantity</th>
                                      <th>Subtotal</th>
                                      <th />
                                  </tr>
                              </thead>
                              <tbody>
                                  {cart.map((data) => {
                                      return (<>
                                          {product.map((result) => {
                                              console.log(data.quntity); 
                                            //   total Price * quntity krva mate 
                                              let subtotal = parseInt(data.quntity) * parseInt(result.productPrice)
                                              return (<>
                                                  {result.id == data.pid && (<tr>
                                                      <td>
                                                          <div className="shopping-cart__product-item">
                                                              <a href="product1_simple.html">
                                                                  <img
                                                                      loading="lazy"
                                                                      src={result.productUrl}
                                                                      width={120}
                                                                      height={120}
                                                                      alt=""
                                                                  />
                                                              </a>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <div className="shopping-cart__product-item__detail">
                                                              <h4>
                                                                  <a href="product1_simple.html">{result.productName}</a>
                                                              </h4>
                                                              <ul className="shopping-cart__product-item__options">
                                                                  <li>Color: Yellow</li>
                                                                  <li>Size: L</li>
                                                              </ul>
                                                          </div>
                                                      </td>
                                                      <td>
                                                          <span className="shopping-cart__product-price">${result.productPrice}</span>
                                                      </td>
                                                      <td>
                                                          <div className="qty-control position-relative qty-initialized">
                                                              <input
                                                                  type="number"
                                                                  name="quantity"
                                                                  defaultValue={data.quntity}
                                                                  min={1}
                                                                  className="qty-control__number text-center"
                                                              />
                                                              <div className="qty-control__reduce">-</div>
                                                              <div className="qty-control__increase">+</div>
                                                          </div>
                                                          {/* .qty-control */}
                                                      </td>
                                                      <td>
                                                          <span className="shopping-cart__subtotal">${subtotal}</span>
                                                      </td>
                                                      <td>
                                                          <a href="#" onClick={() => {
                                                              removeCart(data.id, data.quntity)
                                                          }} className="remove-cart">
                                                              <svg
                                                                  width={10}
                                                                  height={10}
                                                                  viewBox="0 0 10 10"
                                                                  fill="#767676"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                              >
                                                                  <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
                                                                  <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
                                                              </svg>
                                                          </a>
                                                      </td>
                                                  </tr>)}

                                              </>)
                                          })}
                                      </>

                                      )

                                  })}

                              </tbody>
                          </table>
                          <div className="cart-table-footer">
                              <form
                                  action="https://uomo-html.flexkitux.com/Demo1/"
                                  className="position-relative bg-body"
                              >
                                  <input
                                      className="form-control"
                                      type="text"
                                      name="coupon_code"
                                      placeholder="Coupon Code"
                                  />
                                  <input
                                      className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                                      type="submit"
                                      defaultValue="APPLY COUPON"
                                  />
                              </form>
                              <button className="btn btn-light">UPDATE CART</button>
                          </div>
                      </div>
                      <div className="shopping-cart__totals-wrapper">
                          <div className="sticky-content">
                              <div className="shopping-cart__totals">
                                  <h3>Cart Totals</h3>
                                  <table className="cart-totals">
                                      <tbody>
                                          <tr>
                                              <th>Subtotal</th>
                                              <td>$1300</td>
                                          </tr>
                                          <tr>
                                              <th>Shipping</th>
                                              <td>
                                                  <div className="form-check">
                                                      <input
                                                          className="form-check-input form-check-input_fill"
                                                          type="checkbox"
                                                          defaultValue=""
                                                          id="free_shipping"
                                                      />
                                                      <label
                                                          className="form-check-label"
                                                          htmlFor="free_shipping"
                                                      >
                                                          Free shipping
                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input
                                                          className="form-check-input form-check-input_fill"
                                                          type="checkbox"
                                                          defaultValue=""
                                                          id="flat_rate"
                                                      />
                                                      <label className="form-check-label" htmlFor="flat_rate">
                                                          Flat rate: $49
                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input
                                                          className="form-check-input form-check-input_fill"
                                                          type="checkbox"
                                                          defaultValue=""
                                                          id="local_pickup"
                                                      />
                                                      <label
                                                          className="form-check-label"
                                                          htmlFor="local_pickup"
                                                      >
                                                          Local pickup: $8
                                                      </label>
                                                  </div>
                                                  <div>Shipping to AL.</div>
                                                  <div>
                                                      <a href="#" className="menu-link menu-link_us-s">
                                                          CHANGE ADDRESS
                                                      </a>
                                                  </div>
                                              </td>
                                          </tr>
                                          <tr>
                                              <th>VAT</th>
                                              <td>$19</td>
                                          </tr>
                                          <tr>
                                              <th>Total</th>
                                              <td>$1319</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div className="mobile_fixed-btn_wrapper">
                                  <div className="button-wrapper container">
                                      <button className="btn btn-primary btn-checkout">
                                          PROCEED TO CHECKOUT
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>

      </>
      
  )
}

export default Cart