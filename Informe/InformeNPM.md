# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Servidor NPM` 
### Fecha : `jueves, 8 de diciembre de 2016, 23:55`
### Estudiante : `David Tayupanta`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#Definición NPM">Definición NPM</a>
  * <a href="#Historia NPM">Historia NPM</a>
  * <a href="#inst NPM">instalacion NPM</a>
  * <a href="#Ejemplo Hello world NPM">Ejemplo Hello world NPM</a>
  * <a href="#Direccionamiento básico">Direccionamiento básico</a>
    * <a href="#Método Get">Método Get</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Backend con Nodejs`

<a name="objetivos"></a>
## Objetivos

- Aprender sobre los servidores 
- Realizar la instalacion correcta de NPM
- Aprender a dominar los metodos get,put,delete

<a name="marco-teorico"></a>
## Marco Teorico
<a name="Definición NPM"></a>
### Definición NPM

NPM es el valor por defecto del gestor de paquetes para las JavaScript entorno de ejecución Node.js.
NPM se incluye automáticamente cuando se instala Node.js. [4] NPM consiste en una línea de comandos de cliente que interactúa con un registro remoto. Permite a los usuarios consumen y distribuyen los módulos de JavaScript que están disponibles en el registro. [5] Paquetes en el registro están en CommonJS formato e incluyen un archivo de metadatos en JSON formato. [6] Más de 280.000 paquetes están disponibles en el registro principal de la NGP. [7] Paquetes en la NGP se registran en un primer llegado primer servido base y no distinguen entre los autores, lo que significa que se anule la publicación de un paquete no sólo puede romper los proyectos que dependen de ella, sino también plantear un riesgo para la seguridad. [8] El registro NPM tiene ningún proceso de selección para la presentación, lo que significa que los paquetes encontrados no puede haber baja calidad, inseguro, o malicioso. [6] Sin embargo, los administradores del servidor de la NGP son totalmente capaces de borrar paquetes maliciosos o prohibición de usuarios maliciosos. [9] NPM expone las estadísticas de uso y el número de paquetes en función de ayudar a los desarrolladores en la selección de las bibliotecas.
 (Fuente: [PDF](https://en.wikipedia.org/wiki/Npm_(software)))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="data:image/png;base64,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" width="300" height="200">
</p>
<br><br>
<a name="hist"></a>
### Historia 

NPM está escrito completamente en JavaScript y fue desarrollado por Isaac Z. Schlueter como resultado de haber "visto envases módulo de hecho terriblemente" y con la inspiración de las deficiencias de otros proyectos similares, tales como PHP ( PEAR ) y Perl ( CPAN ). 

(Fuente: <a href="https://en.wikipedia.org/wiki/Npm_(software)">Wikipedia</a>)
<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

### Instalación de NPM
<br>
Despues de haber instalado y descargado Node.js, cree un directorio para que contenga la aplicación y conviértalo en el directorio de trabajo.


$ mkdir myapp
$ cd myapp


Utilice el mandato npm init para crear un archivo package.json para la aplicación. Para obtener más información sobre cómo funciona package.json, consulte Specifics of npm’s package.json handling.



$ npm init

<br>
Esta opcion solicita varios campos que podemos o no llenar para la práctica le daremos enter a todo lo que se nos presente.

$ entry point: (index.js)

<br>
Especifique app.js o el nombre que desee para el archivo principal. 

$ npm install express --save

<br>
Para instalar Express temporalmente y no añadirlo a la lista de dependencias, omita la opción --save:
<a href="#cabecera">A la cabecera</a>

$ npm install express



<br>
<br>
###Ejemplo Hello world
En el directorio myapp, cree un archivo denominado app.js y añada el código siguiente:

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

<br>
La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) o a la ruta raíz. Ejecute la aplicación con el siguiente mandato:


$ node app.js

Ejecucion:
<br>
<p align="center">
<img src="Recursos/ejecucionFire.PNG" height="200">
</p>
<br>
abrir un navegador

localhost:5050

<p align="center">
<img src="https://github.com/wilgue10/TecWeb2016B/blob/08ServidorHTTP/servidor/InformeServidorHTTP/Recursos/ejecucionFire.PNG?raw=true" width="300" height="200">
</p>
<a href="#cabecera">A la cabecera</a>
<br>
<br>

###Direccionamiento básico
<br>

Cada ruta puede tener una o varias funciones de manejador, que se excluyen cuando se correlaciona la ruta.

La definición de ruta tiene la siguiente estructura:

app.METHOD(PATH, HANDLER)

Donde:

* app es una instancia de express.
* METHOD es un método de solicitud HTTP.
* PATH es una vía de acceso en el servidor.
* HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

#### Método GET
<br>

app.get('/', function (req, res) {
    res.send('Bienvenidos al Api de Usuarios!')
    
    fs.readFile('./paginas/pagina1.html',
    'utf8',
    function (error, archivoLeido) {
        console.log(error);
        console.log(archivoLeido);
        res.send(archivoLeido);
    });
    
    
})

<br>

<br>

app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})



<br>

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})

<p align="center">
<img src="Recursos/ejecucionFire.PNG" width="600" height="400">
</p>
<br>

#### Método POST
Para esto utilizaremos Postman.
Postman, Cliente HTTP Para Probar Servicios Web
Postman es una extensión gratuita para el navegador Google Chrome que permite probar servicios web fácilmente, basta con indicar la url, el método HTTP (POST, GET, etc.) y los parámetros de la petición.

C

app.post('/Usuario', function (req, res) {
    console.log(req.query.nombre);
     console.log(req.query.cedula);
    
    
    if(!req.query.nombre){
        res.send('no envio el nombre')
        
        
    }
    if(!req.query.cedula){
        
        
        res.send('no envio la cedula')
        
    }
     var nuevoUsuarios={
        
        
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.ceddula
    }
     
    usuarios.push(nuevoUsuarios);
    contador++;
    res.json(nuevoUsuarios)
       
});


## Conclusiones y Recomendaciones

- Se recomienda aprender los comandos necesarios de consola.
- Node js cuenta con videos soporte para facilitar la comprensión.
- Entender el concepto de servicio rest antes de implementarlos

# ¡Gracias por su atención!

Author: [David Tayupanta](https://github.com/davidotb91/Tecnologias_WEB)# Informe NPM