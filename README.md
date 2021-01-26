El ejercicio Rick and Morty

Objetivo:
Realizar una búsqueda con filtros, en este caso por nombre y por especie. Vinculados con un api que contiene los personajes de Rick and Morty

Herramientas Usadas:

- Html5
- SASS
- JavaSript
- React

Pasos a seguir:

1º: Pintado de personajes a través del fetch:
A través de este api (https://rickandmortyapi.com/documentation/#get-all-characters) hemos pintado los personajes. Teniendo cada uno de ellos una tarjeta con su foto, nombre y especie.

2º: Filtrado de los personajes:
Gracias a un input de tipo texto y de tipo select, hemos podido filtar el listado de personajes pintados en el aparatdo anterior. De modo que, cuando el usuario usaba dichos inputs se modificaba y actualizaba el listado pintado.

3º: Vincular una nueva ruta a cada elemento del api:
En este punto, se ha incorpoado otra funcionalidad. Cada vez que se pincha a cada personaje, la ruta de la url cambia y nos redirije a ver más detalles del persojanje clicado.

4º: Detalles:

- Se ha creado una flecha para poder ver los demás personajes, todo ello, sin salir de la ruta, se modifica al pinchar en la flecha.
- Se ha creado otra flecha que va hacia atrás para poder ver los personajes que ya hemos visitado. Además borra el historial, lo que permite al navegador ir más rápido debido a que no aumula los elementos visitados.
- Botón para salir de la ruta de cada personaje y volver a la principal.
- Iconos para darle mas dinamismo y vistosidad a la página

5º: Maquetación
Maquetación realizada con SASS y CSS3.
