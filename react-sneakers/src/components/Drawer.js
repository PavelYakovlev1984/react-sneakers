import React from "react";

function Drawer () {
  return (
      <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Корзина
              <img className="removeBtn" src="img/sneakers/close.svg" alt="Close"/></h2>
          <div className="items">
              <div className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg" style={{
                      backgroundImage: 'url(img/sneakers/1.jpg)'
                  }}></div>
                  <div>
                      <p className="mb-15 mr-15">Мужские Кроссовки <br/>Nike Air Max 270</p>
                      <b>12 999 руб.</b>
                  </div>
                  <img className="removeBtn" src="img/sneakers/close.svg" alt="Close"/></div>
              <div className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg" style={{
                      backgroundImage: 'url(img/sneakers/1.jpg)'
                  }}></div>
                  <div>
                      <p className="mb-15 mr-15">Мужские Кроссовки <br/>Nike Air Max 270</p>
                      <b>12 999 руб.</b>
                  </div>
                  <img className="removeBtn" src="img/sneakers/close.svg" alt="Close"/></div></div>
          <div className="cartTotalBlock">
              <ul>
                  <li><span>Итого: </span>
                      <div></div>
                      <b>21 498 руб. </b></li>
                  <li><span>Налог 5%:</span>
                      <div></div>
                      <b>1074 руб. </b></li>
              </ul>
              <button className="greenButton">Оформить заказ <img src="img/sneakers/arrow.svg" alt=""/></button>
          </div>
      </div>)
}

export default Drawer;