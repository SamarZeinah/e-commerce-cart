import React, { useEffect, useState } from "react";
import "./cardStyle.css";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addToCart,
  removeFromCart,
  removeTotal,
} from "../redux/features/cartSlices";
import toast from "react-hot-toast";
const CardDetails = () => {
  const Carts = useSelector((state) => state.allCart);
  console.log("data", Carts);

  const [totalPrice, setPrice] = useState(0);
  const [TotalQnt, setTotalQnt] = useState(0);

  const dispatch = useDispatch();

  // increment to card
  const handel_increment = (id) => {
    dispatch(increment(id));
  };
  // decrement from card
  const handel_decrement = (id) => {
    dispatch(decrement(id));
  };
  //remove particular item
  const remove = (e) => {
    dispatch(removeFromCart(e));
    toast.success("Item remove from Your Cart")

  };
  //remove total item
  const RemoveTotal = (e) => {
    dispatch(removeTotal(e));
    toast.success(" Your Cart is Empty ")

  };

// حساب السعر الإجمالي
const calculateTotalPrice = () => {
  let TotalPrice = 0;
  Carts.carts.forEach((ele) => {
    TotalPrice += ele.price * ele.qnty;
  });
  setPrice(TotalPrice); // تحديث حالة السعر الإجمالي
};

// استخدام useEffect لحساب السعر الإجمالي عند تغيير Carts.carts
useEffect(() => {
  calculateTotalPrice();
}, [Carts.carts]);

//count total qnty
const calculateTotalqnty=()=>{
  let Totalqnty = 0;
  Carts.carts.forEach((ele) => {
    Totalqnty += ele.qnty;
  });
  setTotalQnt(Totalqnty);
}
useEffect(() => {
  calculateTotalqnty();
}, [Carts.carts]);
  return (
    <>
      <div className="row_card ">
        <div className="col" sm={12} md={6} lg={4}>
          <div className="card">
            <div className="card-header">
              <h5>card Calculation({Carts.carts.length})</h5>
              {Carts.carts.length > 0 ? (
                <button onClick={() => RemoveTotal()}>
                  <i className="fa-solid fa-trash"></i>
                  <span>EmptyCart</span>
                </button>
              ) : null}
            </div>

            <div className="card-body">
              {Carts.carts.length > 0 ? (
                <Table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount"></span>Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Carts.carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => remove(data.id)}
                              >
                                <i class="fa-solid fa-trash"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img
                                  src={data.imgdata}
                                  style={{ width: "100px", height: "auto" }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">{data.dish} </div>
                            </td>
                            <td>
                              <div className="product-price"> {data.price}</div>
                            </td>
                            <td>
                              <div className="product-qun container">
                                <button
                                  className="btn-minus"
                                  type="button"
                                  onClick={() => handel_decrement(data.id)}
                                >
                                  <i
                                    className="fa-solid fa-minus"
                                    style={{ color: "#74C0FC" }}
                                  ></i>
                                </button>

                                <input
                                  className="qty-input-box"
                                  type="text"
                                  name=""
                                  id=""
                                  value={data.qnty}
                                />
                                <button
                                  className="btn-plus"
                                  type="button"
                                  onClick={() => handel_increment(data.id)}
                                >
                                  <i
                                    class="fa-solid fa-plus"
                                    style={{ color: "#74C0FC;" }}
                                  ></i>
                                </button>
                              </div>
                            </td>
                            <td>{data.price * data.qnty}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>
                      Items In Cart :<span style={{ color: "#dc3545" }}>{TotalQnt}</span>{" "}
                    </th>
                    <th>
                      Total Price: <span style={{ color: "#dc3545" }}>{totalPrice}</span>
                    </th>
                  </tfoot>
                </Table>
              ) : (
                <Table>
                  <tbody>
                    <tr>
                      <td className="cart_empty">
                        <i class="fa-solid fa-cart-shopping fa-xl"></i>
                        <p>Your Cart Is Empty</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
