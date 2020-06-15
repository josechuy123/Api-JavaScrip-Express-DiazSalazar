const controlador = {};

controlador.index = (request, respuesta) =>{
   request.getConnection((error,conexion)=>{
      conexion.query('SELECT * FROM consolas', (error, consolas) => {
         respuesta.render('index', {
            data: consolas
         });
      });
   });
};

controlador.create = (request,respuesta) => {
   request.getConnection(( error,conexion ) => {
      conexion.query('INSERT INTO consolas set ?' , request.body , (error,consolas) => {
         respuesta.redirect('/');
      } )
   });
}

controlador.delete = (request,respuesta) => {
   const {id} = request.params
   request.getConnection(( error,conexion ) => {
      conexion.query('DELETE FROM consolas where id = ?' , [id] , (error,consolas) => {
         respuesta.redirect('/');
      } )
   });
}

controlador.pre_edit = (request,respuesta) => {
   const {id} = request.params
   request.getConnection(( error,conexion ) => {
      conexion.query('SELECT * FROM consolas where id = ?' , [id] , (error,consolas) => {
         respuesta.render('editconsole' , {
            data: consolas[0]
         })
      } )
   });
}

controlador.update = (request,respuesta) => {
   const {id} = request.params;
   const datasnews = request.body;
   request.getConnection(( error,conexion ) => {
      conexion.query('UPDATE consolas SET ? WHERE id = ?' , [request.body,id] , (error,consolas) => {
         respuesta.redirect('/');
      } )
   });
}



module.exports = controlador;
