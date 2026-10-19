// Importamos la función create, que construye un store de Zustand
import { create } from 'zustand'

// create recibe una función que devuelve el estado inicial y las acciones.
// set es la función que Zustand nos da para modificar el estado.
// El resultado es un hook personalizado que exportamos para usarlo en los
// componentes.
export const useCarritoStore = create((set) => ({
  // ===== ESTADO =====
  // items guarda los productos del carrito; al iniciar está vacío
  items: [],

  // ===== ACCIONES =====
  // Agrega un producto al carrito; recibe el objeto producto completo
  agregarProducto: (producto) =>
    // set recibe el estado actual (state) y devuelve lo que cambia
    set((state) => {
      // Buscamos si el producto ya está en el carrito comparando por id
      const existe = state.items.find((item) => item.id === producto.id)

      // Si el producto ya existe, solo aumentamos su cantidad
      if (existe) {
        return {
          // Recorremos los items y creamos un arreglo nuevo (nunca modificamos
          // el original)
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 } // Copia del item con cantidad + 1
              : item, // Los demás items quedan igual
          ),
        }
      }

      // Si no existe, lo agregamos al final con cantidad 1
      return { items: [...state.items, { ...producto, cantidad: 1 }] }
    }),

  // Elimina un producto del carrito usando su id
  eliminarProducto: (id) =>
    set((state) => ({
      // filter deja todos los items excepto el que tiene ese id
      items: state.items.filter((item) => item.id !== id),
    })),

  // Vacía el carrito por completo; no necesita el estado anterior
  vaciarCarrito: () => set({ items: [] }),
})) // Fin del store
