import React from "react";


function App() {
  return (
      <div className="wrapper clear">
          <header className="d-flex justify-between align-center p-40">
              <div className="d-flex align-center">
                  <img width={40} height={40} src="/img/logo.svg"/>
                  <div>
                      <h3 className="text-uppercase">Reart Sneakers</h3>
                      <p>Магазин лучших кросовок</p>
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
              <h1>Все кроссовки</h1>
              <div className="card">
                  <img src="" alt=""/>
                  <p>   </p>
                  <div className="">
                      <span>Цена:</span>
                      <b>12 999 руб.</b>
                  </div>
                  <button>
                      <img width={11} height={11} src="/public/img" alt="Plus"/>
                  </button>
              </div>
          </div>
      </div>
  );
}

export default App;
