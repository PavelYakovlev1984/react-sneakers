import React from "react";


function App() {
  return (
      <div className="wrapper clear">
          <div className="overlay">
              <div className="drawer">
                  <h2 className="mb-30">Корзина</h2>
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
                      <button>Оформить заказ <img src="img/sneakers/arrow.svg" alt=""/></button>
                  </div>
              </div>
          </div>
          <header className="d-flex justify-between align-center p-40">
              <div className="d-flex align-center">
                  <img width={40} height={40} src="/img/logo.svg"/>
                  <div>
                      <h3 className="text-uppercase">Reart Sneakers</h3>
                      <p className="opacity-5">Магазин лучших кросовок</p>
                  </div>
              </div>
              <ul className="d-flex">
                  <li className="mr-30">
                      <img width={18} height={18} src="/img/cart.svg"/>
                      <span>1205 руб.</span>
                  </li>
                  <li>
                      <img width={18} height={18} src="/img/user.svg"/>
                  </li>
              </ul>
          </header>
          <div className="content p-40">
              <div className="d-flex mb-40 align-center justify-between">
                  <h1>Все кроссовки</h1>
                  <div className="search-block d-flex">
                      <img src="img/sneakers/search.svg" alt="Search"/>
                      <input placeholder="Поиск..." />
                  </div>
              </div>
              <div className="sneakers d-flex">
                  <div className="card">
                      <div className="button">
                          <img src="img/sneakers/heart-like.svg" alt="heart-unlike"/>
                      </div>
                      <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/3.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/4.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/5.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/6.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/7.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/8.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/9.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/10.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/11.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
                  <div className="card">
                      <img width={133} height={112} src="img/sneakers/12.jpg" alt="Sneakers"/>
                      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                      <div className="d-flex justify-between align-center">
                          <div className="d-flex flex-column">
                              <span>Цена:</span>
                              <b>12 999 руб.</b>
                          </div>
                          <button className="button">
                              <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
