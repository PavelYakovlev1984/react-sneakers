import React from "react";


function App() {
  return (
      <div className="wrapper">
          <header>
              <div className="headerLeft">
                  <img width={40} height={40} src="/img/logo.svg"/>
                  <div className="headerInfo">
                      <h3>REACT SNEAKERS</h3>
                      <p>Магазин лучших кросовок</p>
                  </div>
              </div>
              <ul className="headerRight">
                  <li>
                      <img width={40} height={40} src="/img/cart.svg"/>
                      <span>1205 руб.</span>
                  </li>
                  <li>
                      <img width={40} height={40} src="/img/user.svg"/>
                  </li>
              </ul>
          </header>
          <div className="content">
              <h1>Все крсовки</h1>
              ......
          </div>
      </div>
  );
}

export default App;
