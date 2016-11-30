var express = require('express');

var app = express();
var contador=3;

var puerto = 5050;

var usuarios = [
    {
        id:1,
        nombre:'Katha',
        cedula:'1211102123'
    },
    {
        id:2,
        nombre:'Davwolf',
        cedula:'981237918'
    },
    {
        id:3,
        nombre:'Pepito',
        cedula:'011283934'
    }
]



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})

//insertar usuario
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
    
//    var parametros=req.params;
//    
//    var usuario ={
//        nombre:'wilmer',
//        Cedula:'0000000'
//    }
//    usuario.casado=false;
//    usuario.mascotas=[];
//    usuario.apellido='';
//    
//    console.log('REQUEST'+req);
//    console.log('RESPONT'+res);
//    console.log('REQUEST HEADERS'+req.HEADERS_RECEIVED);
//    console.log('RESPONT HEADERS '+res.HEADERS_RECEIVED);
//    res.heeaders={
//            token:1234;
//    }
//    res.json(usuario)
//    res.append('token','1234')
//  //res.send('{nombre:Wilmer,cedula:172624682}');

   
});

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    //busca entre todos los usuarios
    for(var i=0;i<usuarios.length;i++){
        //si encuentra devuelve el arreglo
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript!')
})


app.post('/TecnologiasWeb', function (req, res) {

    //request => req
    //response => res
    
    var parametros = req.params;
    
    console.log(parametros);
    
    var usuario = {
        nombre:'David',
        cedula:'000000000'
    }
    
    
    res.append('token', '1234');
    res.json(usuario);
    
    
//    usuario = {
//        nombre:usuario.nombre,
//        cedula:usuario.cedula,
//        apellido:''
//    }
    
    
    
    
    
    
    
    
//    console.log('Lo que tengo en el REQUEST es:')
//    console.log(req);
//    console.log('Lo que tengo en el RESPONSE es:')
//    console.log(res);
//    
//    console.log('Cabeceras Req:')
//    console.log(req.headers);
//    console.log('Cabeceras Res:')
//    console.log(res.headers);
//    

  
    
//    res.send('{nombre:Adrian,cedula:171813714}');
    
//    if(si los minutos son pares){
//        res.send('minutos pares')
//    }else{
//        res.send('minutos impares')
//    }

    
    //res.send('Picachu');


})



app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})