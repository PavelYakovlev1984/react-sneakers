import React from "react";
import style from './Card.module.scss'

function Card (props) {
    const onClickButton = () => {alert("Hello")}
  return (
      <div className={style.card}>
          <div className="button">
              <img src="img/sneakers/heart-like.svg" alt="heart-unlike"/>
          </div>
          <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{props.price}</b>

              </div>
              <button className="button" onClick={onClickButton}>
                  <img width={11} height={11} src="img/plus.svg" alt="Plus"/>
              </button>
          </div>
      </div>)
}

export default Card;