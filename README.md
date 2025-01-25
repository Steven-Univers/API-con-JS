Objetivo: Crear una interfaz web que consuma una API pública, renderice dinámicamente la información obtenida en el DOM y mantenga la persistencia de los datos utilizando localStorage.

Instrucciones:



Selección de la API: Seleccionar una API pública de su agrado (Pokemon/Rick & Morty), o cualquier otra API gratuita disponible). La API debe proporcionar una lista de elementos que incluyan al menos una imagen, un título y, si es posible, una descripción.

Renderización de Datos:

Utilizar fetch() y async/await para realizar una solicitud a la API seleccionada y obtener la lista de elementos.
Los elementos obtenidos deben renderizarse en el DOM, mostrando al menos una imagen, un título y una descripción (si está disponible).
Los elementos deben ser renderizados dinámicamente, sin necesidad de tenerlos predefinidos en el HTML.
Interacción con el DOM y Local Storage:

Cada elemento de la lista debe ser clickeable.
Al hacer clic en un elemento, se debe crear una tarjeta con la información seleccionada (imagen, título, y descripción) y mostrarla en la parte superior de la página.
La tarjeta debe guardarse en localStorage para que, al refrescar la página, la información seleccionada persista en la interfaz.
Persistencia de Datos:

Al cargar la página, se debe verificar si hay elementos guardados en localStorage y renderizarlos de nuevo, para que la tarjeta seleccionada se muestre al usuario.
Si se selecciona un nuevo elemento, debe reemplazar la tarjeta existente o agregarse sin eliminar las anteriores, según se prefiera.
Requisitos:

Uso de fetch() con async/await para manejar la llamada a la API.
Manipulación dinámica del DOM para renderizar la información obtenida.
Uso de localStorage para mantener la información seleccionada al refrescar la página.
El HTML debe ser modificado dinámicamente a través de JavaScript (sin necesidad de modificar directamente el HTML estático).
