<!--
Un archivo README.md es un archivo de markdown que contiene información sobre un proyecto. Típicamente se encuentra en el directorio raíz de un proyecto y se utiliza para proporcionar documentación e instrucciones para otros que puedan querer usar o contribuir al proyecto.

Para los desarrolladores, un archivo README.md bien estructurado y bien documentado puede ser beneficioso de varias maneras. Puede ayudar a asegurar que otros puedan entender y usar fácilmente el proyecto, lo que puede conducir a más contribuciones y una comunidad más activa alrededor del proyecto. Además, puede hacer que sea más fácil para los desarrolladores incorporar a nuevos miembros del equipo y para que otros entiendan el propósito y la funcionalidad del proyecto.

Para otros desarrolladores, un archivo README.md bien estructurado y bien documentado puede ser un recurso valioso cuando se trata de entender o usar un proyecto. Puede proporcionar información sobre los objetivos, funcionalidad y cómo usar del proyecto, lo que puede ahorrar tiempo y esfuerzo al tratar de ponerse al día en un nuevo proyecto. Además, un buen README.md también puede proporcionar información sobre cómo contribuir al proyecto y directrices para hacerlo, lo que puede facilitar que otros se involucren y contribuyan al proyecto.

En el caso específico de comenzar en este mundo de desarrollo como desarrollador junior, lo cual todos ustedes, queridos estudiantes caen bajo ella, puede beneficiarse de la siguiente manera:

Tener un archivo README.md bien estructurado y bien documentado también puede ser beneficioso para los nuevos desarrolladores junior que están tratando de entrar en el mercado laboral. El mercado laboral para desarrolladores es altamente competitivo, y tener un portafolio de proyectos bien documentados y fácilmente comprensibles puede diferenciar a un desarrollador junior de otros. Un archivo README.md bien escrito demuestra la habilidad de un desarrollador para comunicar y documentar su trabajo de manera efectiva, lo cual es una habilidad importante en cualquier entorno profesional. Además, tener un portafolio de proyectos bien documentados también puede ayudar a los desarrolladores junior a entender y explicar mejor su propio trabajo, lo cual puede ser beneficioso en entrevistas laborales y otros entornos profesionales. En general, un archivo README.md bien estructurado y bien documentado puede ayudar a los desarrolladores junior a mostrar sus habilidades y destacar en un mercado laboral competitivo.
-->

<!-- Estructura -->
<!--
*** Estoy usando enlaces de estilo "referencia" de markdown para la legibilidad.
*** Los enlaces de referencia están encerrados en corchetes [ ] en lugar de paréntesis ( ).
*** Vea la parte inferior de este documento para la declaración de las variables de referencia
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- Por favor no borrar este elemeno, ayuda al elemento "back to top" -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="./resources/readMe/wu.png" alt="Logo" width="80" height="80">
  <h3 align="center">Circle Landing Agency Website</h3>
  <a href="https://midterm-ironhack-jade.vercel.app">Visit Website</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido Con</a></li>
      </ul>
    </li>
    <li>
    <a href="#roadmap">Roadmap</a>
     <ul>
     <li><a href="#backlog">Back log</a></li>
        <li><a href="#day-one">Lunes 23, Enero 2023</a></li>
        <li><a href="#day-two">Martes 24, Enero 2023</a></li>
        <li><a href="#day-three">Miercoles 25, Enero 2023</a></li>
        <li><a href="#day-four">Jueves 26, Enero 2023</a></li>
        <li><a href="#day-five">Viernes 27, Enero 2023</a></li>
      </ul>
    </li>
    <li><a href="#acerca">Acerca</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#desafío-técnico">Desafío Técnico</a></li>
    <li><a href="#grande-error">Grande Error</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Acerca del Proyecto

<img src="./resources/readMe/screenshot.png" alt="Logo" width="100%" height="50%">

Éste es mi proyecto de página web como midterm project del bootcamp que estoy cursando. El proposito de este proyecto es sacar a relucir mis habilidades de 
programador frontend y ver el desarrollo que llevo desde que empecé este bootcamp.

He creado la web usando HTML, CSS y JavaScript. La página cuenta con:

- Un indice con diferentes secciones, un boton al final con la funcionalidad de devolver al usuario al principio de la página, una nav-bar con los botones para redireccionar
o enviar a una de las otras páginas, y un efecto skew que se activa al scrollear la web.

- Una página de proyectos que nos muestra una sección principal donde se muestra un articulo y otras secciones. Los datos que se muestran son cargados mediante JavaScript
usando fetch para acceder a una API publica.

- Una página de contacto con un formulario que recoge los datos del usuario.

- Una página de about donde hay una flip-card con informacion mia y varios iframes de canciones de YouTube.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Construido Con

Para este proyecto he utilizado HTML, CSS para estilar la web y JavaScript para la lógica que le da dinamismo. En este caso no he utilizado ni librerias externas ni Frameworks.

El codigo está escrito usando el Visual Studio Code conjuntamente con git para el control de versiones. He utilizado la web <a href="https://jsonplaceholder.typicode.com">JSON Placeholder</a> para obtener datos para alimentar mi web. Tambien juntamente con el git, este proyecto esta subido en mi repositorio de github ademas utilizo 
<a href="https://vercel.com">Vercel</a> para poder hostear la página en la red.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap


#### Day One

###### Lunes 23, Enero 2023

- [x] Estructurar el proyecto
- [x] Crear section "index" en html
- [x] Crear estilos en el css index > section nav-bar
- [x] Crear estilos index > section main

#### Day Two

###### Martes 24, Enero 2023

- [x] Estilar index > brand
- [x] Estilar index > projects
- [x] Estilar index > testimonial
- [x] Estilar index > services
- [x] Estilar index > question
- [x] Estilar index > footer
- [x] Hacer estilo responsive de index.html
- [x] Crear section "about", "contact" y "project" en html
- [x] Añadida lógica para autocompletar los projects usando una api externa


#### Day Three

###### Miercoles 25, Enero 2023

- [x] Añadir flip-cards en el about-section
- [x] Añadir los iframes de musica en el about-section
- [x] Añadir la animacion circular a la carga de paginas (splash)
- [x] Buscar como hacer y añadir los efectos skew
- [x] Hacer que el "Scroll to top" solo aparezca al haber scrolleado un poco hacia abajo primero
- [x] Añadir el slider en la section brands del index 
- [x] Estilar y comprobar que los links del nav funcionen correctamente

#### Day Four

###### Jueves 26, Enero 2023

- [x] Añadir logica para cambiar de la animacion splash a la pagina en si.
- [x] Revisar que todo funcione correctamente

#### Day Five

###### Viernes 27, Enero 2023

- [x] Dar retoques al README
- [x] Crear la presentación del proyecto

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acerca de mi -->

## Acerca


Joaquim Crous - [@raistbear](https://twitter.com/raistbear) - joaquimcrous@gmail.com

Project Link: [https://github.com/QuimCrous](https://github.com/QuimCrous/midterm-ironhack)

Presentation Link: [https://www.linkedin.com/in/joaquim-crous-mayné/](https://www.linkedin.com/in/joaquim-crous-mayné/)

#### Experiencia académica

- Backend Web Development Java - Ironhack Barcelona

- Fronted Web Development - Iroonhack Barcelona



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## agradecimientos

La sección "agradecimientos" en un archivo README es una sección que proporciona reconocimiento a las personas o instituciones que ayudaron en el desarrollo del proyecto.

En esta sección se puede incluir información como:

- Agradecimientos específicos a personas que ayudaron en el desarrollo del proyecto.
- Agradecimientos a instituciones o organizaciones que proporcionaron apoyo financiero o recursos.
- Enlaces a proyectos o recursos relacionados que fueron útiles para el desarrollo del proyecto.

En resumen, la sección "agradecimientos" es una excelente manera de agradecer a las personas o instituciones que ayudaron en el desarrollo del proyecto. Esta sección también puede ser útil para dar crédito a los recursos o proyectos relacionados que fueron útiles durante el desarrollo.

- [Icon Libraries](insert-link-here)
- [Google Font Libraries](insert-link-here)

- Agradecer a todos mis compañeros de bootcamp por el apoyo y por compartir información entre nosotros para poder mejorar nuestros proyectos.
- A nuestros profesores por ayudarnos en nuestras dudas y darnos soporte.
- A mi hermano por facilitarme la tarea de buscar recursos y ayudarme a plantear la logica de ciertos scripts.
- [Páginas de consulta](https://www.w3schools.com/js/default.asp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Desafío Técnico


- Uno de los grandes problemas que he tenido es no considerar el estilo responsivo desde el minuto uno. Es bueno que cuando se empieze a estilar se tenga en cuenta si
se puede aprovechar algun estilo para no tener que duplicar código en la parte de estilos.
- También ha sido un gran desafio conseguir inyectar información en el apartado de "proyectos" según el link que se pulse. Utilizé una función "slugify" para que cuando
se pulse el botón se añadé un parámetro en la url que se reconoce al cargar la página e inyecta correctamente el contenido a mostrar. Me hubiera gustado utilizar "dynamic
routing" pero por la falta de tiempo he emprado un metodo más sencillo (gracias bro!).
- Para los efectos de skew, splash, logo-slide y el hamburguer-menu he tenido que recurrir a contenido de internet o información compartida por companyeros. Aun así són
aspectos que me gustaría poder mejorar ya que no me siento seguro en como he hecho para hacer que las cosas se activen o desactiven, incluso como se visualizan algunas
de las cosas.

- Para quien en un futuro quiera emprender un proyectocomo éste, mi recomendación personal es estructurarse bien el tiempo para poder llevarlo a cabo además de no tener
reticiencias en pedir ayuda pero no sin antes haber hecho una búsqueda por cuenta propia en internet.


## Grande Error


Mi gran error cometido en este proyecto ha sido sobrevalorar mis aptitudes, ya que me ha dado muchos problemas al escoger el proyecto avanzado. Para solucionarlo he tenido que estructurar bien el tiempo, para poder ejecutar todos los requerimientos y pedir ayuda externa para llegar a lo que me estaba siendo difícil.

Otro consejo que quiero recomendar, es que cuando se haga alguna busqueda en google, stack overflow o similares nunca os quedeis con la primera opción, buscad la solución
que se adapte mejor a vustro proyecto.