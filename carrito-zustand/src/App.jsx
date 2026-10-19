// Importamos los tres componentes de la tienda
import Encabezado from './components/Encabezado'
import ListaProductos from './components/ListaProductos'
import Carrito from './components/Carrito'

// Componente principal de la aplicación
function App() {
  return (
    // Contenedor general que centra la página
    <div className="app">
      {/* Encabezado con el contador del carrito */}
      <Encabezado />
      {/* Zona principal con dos columnas: catálogo y carrito */}
      <main className="contenido">
        <ListaProductos />
        <Carrito />
      </main>
    </div>
  )
}

// Exportamos App para que main.jsx la muestre
export default App
