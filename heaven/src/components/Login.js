const Login = () => {
    return (
        <div className="container">
             <main>
        <section class="portada-ingresar">
            <div class="contenedor-portada">
            </div>
            <div class="contenedor-formulario">
                <div class="formulario-texto">
                    <h2 class="formulario-texto__h2">Ingresar</h2>
                    <div class="barra"></div>
                    <form class="formulario-texto__form" action="">
                        <label class="formulario-texto__label" for="usuario">USUARIO</label>
                        <input class="formulario-texto__input" name="usuario" type="text" id="usuario"/>
                        <label class="formulario-texto__label" for="contraseña">CONTRASEÑA</label>
                        <input class="formulario-texto__input" name="contraseña" type="password" id="contraseña"/>
                    </form>
                    <div class="formulario-texto__botones">
                        <button class="formulario-texto__boton">Ingresar</button>
                        <button class="formulario-texto__boton">Home</button>
                    </div>
                    <a class="formulario-texto__enlace" href="#">Recuperar contraseña</a>
                </div>
            </div>
        </section>
    </main>
        </div>
    );
}

export default Login;