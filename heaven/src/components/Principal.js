import "../css/estilos.css";
import React from "react";
import Myimg from "../img/portada.svg";

const Principal = () => {
  return (
    <div className="cont">
      <header className="header">
        <div className="contenedor-menu">
          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <img className="menu__imagen" src={Myimg} alt="" />
        </div>
        <div className="controles">
          <span className="controles__total">$ 0</span>
          <i className="controles__carrito"></i>
          <a className="controles__enlace" href="/login">
            <i className="controles__cuenta"></i>
          </a>
        </div>
      </header>
      <main>
        <section className="portada">
          <img className="portada__imagen" src={Myimg} alt="" />
          <div className="titulo">
            <h1 className="titulo__1">HEAVEN</h1>
            <h2 className="titulo__2">You don't have to die to experience</h2>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Principal;
