// Importamos el hook del store
import { useCarritoStore } from '../store/useCarritoStore'

// Definimos el componente Carrito
function Carrito() {
  // Leemos el dato items y las dos acciones que vamos a usar
  const items = useCarritoStore((state) => state.items)
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto)
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito)

  // Calculamos el total: precio por cantidad de cada item, sumado
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad, // Suma parcial de cada item
    0, // Valor inicial de la suma
  )

  // Si el carrito no tiene items, mostramos un mensaje y terminamos aquí
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Carrito</h2>
        <p className="vacio">Tu carrito está vacío</p>
      </section>
    )
  }

  // Si hay items, mostramos la lista, el total y el botón de vaciar
  return (
    <section className="panel">
      <h2>Carrito</h2>
      {/* Una fila por cada item del carrito */}
      {items.map((item) => (
        <div key={item.id} className="fila">
          <div>
            <p className="fila-nombre">{item.nombre}</p>
            {/* Mostramos la cantidad y el subtotal de ese producto */}
            <p className="fila-detalle">
              {item.cantidad} x ${item.precio.toLocaleString('es-CO')}
            </p>
          </div>
          {/* Enviamos el id del item a la acción eliminarProducto */}
          <button
            className="btn btn-secundario"
            onClick={() => eliminarProducto(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}
      {/* Bloque con el total a pagar */}
      <div className="total">
        <span>Total</span>
        <strong>${total.toLocaleString('es-CO')}</strong>
      </div>
      {/* Vacía todo el carrito; no necesita parámetros */}
      <button className="btn btn-secundario btn-bloque" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </section>
  )
}

// Exportamos el componente
export default Carrito
