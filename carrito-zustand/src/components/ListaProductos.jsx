// Importamos el arreglo de productos de la tienda
import { productos } from '../data/productos'
// Importamos el hook del store
import { useCarritoStore } from '../store/useCarritoStore'

// Definimos el componente ListaProductos
function ListaProductos() {
  // Del store solo necesitamos la acción para agregar
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)

  return (
    // section agrupa todo el catálogo; panel le da apariencia de tarjeta
    <section className="panel">
      <h2>Productos</h2>
      {/* Recorremos los productos y creamos una fila por cada uno */}
      {productos.map((producto) => (
        // key ayuda a React a identificar cada elemento de la lista
        <div key={producto.id} className="fila">
          {/* Bloque con el nombre y el precio */}
          <div>
            <p className="fila-nombre">{producto.nombre}</p>
            {/* toLocaleString('es-CO') da formato de pesos: 45.000 */}
            <p className="fila-detalle">
              ${producto.precio.toLocaleString('es-CO')}
            </p>
          </div>
          {/* Al hacer clic, enviamos el producto completo a la acción del store */}
          <button
            className="btn btn-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </section>
  )
}

// Exportamos el componente
export default ListaProductos
