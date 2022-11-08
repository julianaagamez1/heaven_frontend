const categorias = [
    {
        id: Number,
        nombre: String,
        descripcion: String,
        
    }
]
const categoriaService = {};

categoriaService.getCategorias = () => {
    return categorias;
}

export default categoriaService;