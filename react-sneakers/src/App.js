import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12999,
        imageUrl: 'img/sneakers/1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270',
        price: 12999,
        imageUrl: "public/img/sneakers/2.jpg"},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 18666,
        imageUrl: "public/img/sneakers/3.jpg"},
];

function App() {
  return (
      <div className="wrapper clear">
          <div className="overlay" style={{display: 'none'}}>
              <Drawer />
          </div>
          <Header />

          <div className="content p-40">
              <div className="d-flex mb-40 align-center justify-between">
                  <h1>Все кроссовки</h1>
                  <div className="search-block d-flex">
                      <img src="img/sneakers/search.svg" alt="Search"/>
                      <input placeholder="Поиск..." />
                  </div>
              </div>
              <div className="sneakers d-flex">

                  {arr.map((arr) => <b>hjghjghjghj</b>}
              </div>
          </div>
      </div>
  );
}

export default App;
