
# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-28`
### Estudiante : `Tayupanta Paspuel Jonathan David`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#defbootstrap">Definicion Bootstrap</a>
  * <a href="#defcss">Definicion CSS</a>
  * <a href="#defW3">Definicion W3schools</a>

- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento de hojas de estilos
- Comprender el proceso de desarrollo de aplicaciones
- Comprender el funcionamiento de Bootstrap

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defbootstrap"></a>
___
### Definición de Bootstrap

Bootstrap es un framework desarrollado y liberado por Twitter que tiene como objetivo facilitar el diseño web. Permite crear de forma sencilla webs de diseño adaptable, es decir, que se ajusten a cualquier dispositivo y tamaño de pantalla y siempre se vean igual de bien.

(Fuente: [PuntoAbierto](http://puntoabierto.net/blog/que-es-bootstrap-y-cuales-son-sus-ventajas))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="data:image/jpeg;base64,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" width="300" height="200">
</p>

<a name="defcss"></a>
___
### Definición CSS

CSS es un lenguaje de hojas de estilos creado para controlar el aspecto o presentación de los documentos electrónicos definidos con HTML y XHTML. CSS es la mejor forma de separar los contenidos y su presentación y es imprescindible para crear páginas web complejas.

Separar la definición de los contenidos y la definición de su aspecto presenta numerosas ventajas, ya que obliga a crear documentos HTML/XHTML bien definidos y con significado completo (también llamados "documentos semánticos"). Además, mejora la accesibilidad del documento, reduce la complejidad de su mantenimiento y permite visualizar el mismo documento en infinidad de dispositivos diferentes.

Al crear una página web, se utiliza en primer lugar el lenguaje HTML/XHTML para marcar los contenidos, es decir, para designar la función de cada elemento dentro de la página: párrafo, titular, texto destacado, tabla, lista de elementos, etc.

Una vez creados los contenidos, se utiliza el lenguaje CSS para definir el aspecto de cada elemento: color, tamaño y tipo de letra del texto, separación horizontal y vertical entre elementos, posición de cada elemento dentro de la página, etc

(Fuente: [librosweb](http://librosweb.es/libro/css/capitulo_1.html))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="https://lenguajecss.com/p/css/introduccion/que-es-css.png" width="300" height="200">
</p>

<a name="defW3"></a>
___

### Definición W3SCHOOL

W3Schools es un sitio web popular para el aprendizaje de las tecnologías web en línea. [2] El contenido incluye tutoriales y referencias relacionadas con HTML , CSS , JavaScript , PHP , SQL , Bootstrap , y jQuery  <a href="https://en.wikipedia.org/wiki/W3Schools">WIKI</a>)
<br>
<a href="#cabecera">A la cabecera</a>
<br><br>
<p align="center">
<img src="data:image/jpeg;base64,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" width="300" height="200">
</p>






<a name="desarrollo"></a>

## Desarrollo del informe

### Implementación de CSS
####Agregar estilo por atributo 
Es necesario agregar la etiqueta style en el caso de ser un elemento como parrafo o titulo se lo hara de la siguiente manera
```
<style>
p {
    text-align: center;
    color: red;
} 
</style>
```

####Agregar estilo por id
Es necesario agregar la etiqueta style en el caso de ser un id previamente definido se utilizara el simbolo numeral y para hacer uso del estilo es necesadio identificar el id al que pertence.
```
#identificador1 {
    text-align: center;
    color: red;
}

```
####Agregar estilo por clase
Es necesario agregar la etiqueta style en el caso de ser una clase previamente definido se utilizara el simbolo punto y para hacer uso del estilo es necesadio identificar la clase a la que pertence.
```
.clase1 {
    text-align: center;
    color: red;
}
```


### Utilizando Bootstrap
Para Utilizar bootstrap es necesario incluir en el head el siguiente CDN
```
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
```
Para hacer uso de los componentes que ofrece bootstra se lo puede hacer investigando en la pagina oficial de bootstrap el cual ofrece el codigo de todos los componentes que este ofrece.
<p align="center">
<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRP-CTswsVgyZl67nsggY1a8PAfzGo9Unknv9Ql0yEcgyqCdgpxZQ" width="300" height="200">
</p>



## Conclusiones y Recomendaciones

- La reutilización ayuda en gran medida a reducir el tiempo de de desarrollo.
- Las hojas de estilo ayudan a mantener sostenible el codigo.
- W3schools ayuda de una forma amigable al aprendizaje.

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [David Tayupanta](https://github.com/davidotb91)