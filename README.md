# GifExpertApp

Aplicacion web hecha con React que permite buscar GIFs por categoria usando la API de Giphy.

La app inicia mostrando una categoria por defecto (`Rick and Morty`) y permite agregar nuevas busquedas desde un formulario. Cada categoria se renderiza como una seccion independiente con sus primeros 10 resultados.

## Que hace el proyecto

- Permite escribir una categoria o termino de busqueda.
- Consulta la API de Giphy con ese termino.
- Muestra una grilla de GIFs con imagen y titulo.
- Mantiene varias categorias en pantalla al mismo tiempo.
- Muestra un estado de carga mientras llegan los resultados.

## Como funciona

El flujo principal de la aplicacion es este:

1. `GifExpertApp` mantiene en estado la lista de categorias.
2. `AddCategory` captura lo que escribe el usuario en el input.
3. Al enviar el formulario, si el texto tiene mas de 2 caracteres, la categoria se agrega al inicio de la lista.
4. Por cada categoria, se renderiza un componente `GifGrid`.
5. `GifGrid` usa el hook `useFetchGifs(category)` para pedir los datos.
6. El hook llama a `getGifs`, que hace una peticion `fetch` a Giphy.
7. La respuesta se transforma a un arreglo simple con `id`, `title` y `url`.
8. Finalmente, `GifGridItem` pinta cada tarjeta con la imagen del GIF y su titulo.

## Estructura principal

```text
src/
|-- GifExpertApp.js          # Componente principal
|-- index.js                # Punto de entrada de React
|-- index.css               # Estilos globales
|-- components/
|   |-- AddCategory.js      # Formulario para agregar categorias
|   |-- GifGrid.js          # Grilla por categoria
|   |-- GifGridItem.js      # Tarjeta individual de GIF
|-- hooks/
|   |-- useFetchGifs.js     # Hook para cargar GIFs
|-- helpers/
|   |-- getGifs.js          # Llamada a la API de Giphy
```

Ademas, la carpeta `docs/` contiene una compilacion estatica lista para publicarse.

## Tecnologias usadas

- React 17
- Create React App
- Fetch API
- Giphy API
- Animate.css

## Instalacion y ejecucion

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el proyecto en desarrollo:

```bash
npm start
```

3. Abre en el navegador:

```text
http://localhost:3000
```

## Ejemplo de uso

Supongamos que escribes `Dragon Ball` en el input y presionas Enter.

La aplicacion hara lo siguiente:

1. Agregara `Dragon Ball` como nueva categoria.
2. Mostrara el texto `Loading` mientras consulta la API.
3. Pedira a Giphy los primeros 10 GIFs relacionados.
4. Dibujara una nueva grilla con las imagenes y titulos encontrados.

Ejemplo del tipo de datos que maneja internamente despues de consultar la API:

```js
[
  {
    id: "abc123",
    title: "Dragon Ball GIF",
    url: "https://media.giphy.com/..."
  },
  {
    id: "def456",
    title: "Goku GIF",
    url: "https://media.giphy.com/..."
  }
]
```

## Comportamiento actual a tener en cuenta

- La categoria inicial es `Rick and Morty`.
- Solo se agregan busquedas con mas de 2 caracteres.
- Las categorias nuevas se insertan al inicio.
- Cada categoria hace su propia consulta a la API.
- El proyecto no incluye pruebas automatizadas implementadas, aunque la configuracion base de testing si esta creada.

## Scripts disponibles

- `npm start`: levanta la app en desarrollo.
- `npm run build`: genera la version de produccion.
- `npm test`: abre el entorno de pruebas de React.

## Resumen

Este proyecto es una aplicacion pequena pero clara para entender conceptos base de React:

- estado con `useState`
- efectos con `useEffect`
- hooks personalizados
- separacion por componentes
- consumo de APIs externas

Sirve muy bien como ejemplo de practica para aprender flujo de datos, renderizado por listas y consumo de servicios HTTP en React.
