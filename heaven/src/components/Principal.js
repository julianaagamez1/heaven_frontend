import '../css/estilos.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
const Principal = () => {
  return (
    <div>
      <header className="header">
        <div className="contenedor-menu">
          <i className="menu"></i>
          <img className="menu__imagen" src="../img/portada.svg" alt="" />
        </div>
        <div className="controles">
          <span className="controles__total">$ 0</span>
          <i className="controles__carrito"></i>
          <a className="controles__enlace" href="ingresar.html">
            <i className="controles__cuenta"></i>
          </a>
        </div>
      </header>
      <main>
        <section className="portada">
          <img className="portada__imagen" src="../img/portada.svg" alt="" />
          <div className="titulo">
            <h1 className="titulo__1">HEAVEN</h1>
            <h2 className="titulo__2">You don't have to die to experience</h2>
          </div>
        </section>
      </main>
    </div>
  );
};
ReactDOM.render(<Principal />, document.getElementById('root'));
export default Principal;
