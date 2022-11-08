import AgregarImg from "../img/agregar-archivo.svg";
import "../css/estilos.css";
const Productos = () => {
  return (
    <div>
      <main>
        <section class="portada-pc">
          <div class="opciones">
            <input id="productos" name="spc" type="radio" />
            <label for="productos">Productos</label>
            <input id="categorias" name="spc" type="radio" />
            <label for="categorias">Categorias</label>
          </div>
          <div class="botonera">
            <button class="botonera__btn">Agregar</button>
            <button class="botonera__btn">Modificar</button>
            <button class="botonera__btn">Eliminar</button>
          </div>
          <div class="contenedor-formulariop">
            <form class="formulario-p__form" action="#">
              <label class="formulario-p__label">
                Nombre:
                <input class="formulario-p__input" name="nombre" type="text" />
              </label>
              <label class="formulario-p__label" for="marca">
                Marca:
                <input
                  class="formulario-p__input"
                  name="marca"
                  type="text"
                  id="marca"
                />
              </label>

              <label class="formulario-p__label input--corto" for="precio">
                Precio:
                <input
                  class="formulario-p__input"
                  name="precio"
                  type="number"
                  id="precio"
                />
              </label>

              <label class="formulario-p__label input--corto" for="cantidad">
                Cantidad:
                <input
                  class="formulario-p__input "
                  name="cantidad"
                  type="number"
                  id="cantidad"
                />
              </label>

              <label class="formulario-p__label input--corto" for="categoria">
                Categoría:
                <input
                  class="formulario-p__input "
                  name="categoria"
                  type="text"
                  id="categoria"
                />
              </label>

              <label
                class="formulario-p__label input--corto"
                for="presentacion"
              >
                Presentación:
                <input
                  class="formulario-p__input "
                  name="presentacion"
                  type="text"
                  id="presentacion"
                />
              </label>
              <div class="end">
                <label class="formulario-p__label">
                  Descripción:
                  <textarea
                    class="formulario-p__textarea"
                    name="descripcion"
                  ></textarea>
                </label>
                <label class="file" for="cargar">
                  <span>Subir foto del producto</span>
                  <img src={AgregarImg} alt="" />
                  <input class="file_cargar" type="file" id="cargar" />
                </label>
              </div>
              <button class="formulario-p__btnregistrop">
                Registrar producto
              </button>
            </form>
          </div>
          <div class="contenedor-formularioc">
            <form class="formulario-c__form" action="#">
              <label class="formulario-c__label">
                Nombre:
                <input class="formulario-p__input" name="nombre" type="text" />
              </label>
              <label class="formulario-c__label">
                Descripción:
                <textarea
                  class="formulario-c__textarea"
                  name="descripcion"
                ></textarea>
              </label>
              <button class="formulario-c__btnregistroc">
                Registrar categoría
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Productos;
