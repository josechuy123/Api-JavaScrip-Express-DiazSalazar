

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const mysqlconexion = require('express-myconnection');

const app = express();

const consolasrouter = require('./routes/consolas');

//configuracion de proyecto
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//para ver que hace el usuario
   app.use(morgan('dev'))
   app.use(mysqlconexion(mysql, {
      host:'localhost',
      user:'root',
      password:'',
      port:3306,
      database:'dbconsolas'
   }));

   app.use(express.urlencoded({
      extended: false
   }));

   app.use('/',consolasrouter);
   app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port') ,()=>{
 console.log("servidor corriendo en el puerto " + app.get('port'))

});



