# mvc-proyect-vue2
  En resumen, el proyecto tiene como objetivo principal crear un formulario genérico y reutilizable que pueda adaptarse a diferentes contextos y         necesidades al definir los campos y las reglas de validación de manera dinámica.
# como?
La idea general del proyecto es crear un formulario genérico que pueda ser reutilizado en diferentes contextos y para diferentes tipos de datos.

El componente principal es FormularioGenerico, que se encarga de renderizar un formulario con campos generados dinámicamente a partir de un objeto campos que se pasa como propiedad. Cada campo del formulario está representado por un elemento <v-text-field> de Vuetify.

El formulario acepta una propiedad objeto que define los campos del formulario, incluyendo su nombre, tipo y reglas de validación. También acepta una propiedad textoBoton que determina el texto que se muestra en el botón de envío del formulario.

Cuando se envía el formulario, se ejecuta el método enviado, que evita el comportamiento predeterminado del envío del formulario y llama al método handleSubmit pasando el formulario como argumento. En el método handleSubmit, se crea un objeto FormData a partir del formulario y se recorren los pares clave-valor para construir un objeto objetoCompleto. Luego, se emite un evento guardar con el objeto completo como argumento.

El componente utiliza la biblioteca Vue para hacer que el objeto campos sea observable, lo que permite que los cambios en los valores de los campos se reflejen automáticamente en el objeto.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
