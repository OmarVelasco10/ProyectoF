const controller = {};
const db = require('../database');

controller.list = (req,res) => {
    const token = req.cookies.jwt;
    console.log(token);
    if(!token)
    {
        res.redirect('/login');
    }
    db.query('SELECT jugadores.id,jugadores.nombre,jugadores.nacionalidad,equipos.nombre as equipo from jugadores inner join equipos on jugadores.id_equipos=equipos.id', (err, jugadores) => {
        res.render('jugadores', {
            jugadores: jugadores
        });
    });
};
controller.add= (req,res)=>{
    const {nombre,nacionalidad,id_equipos}=req.body;

    db.query('insert into jugadores SET ?',{nombre:nombre,nacionalidad:nacionalidad,id_equipos:id_equipos},(error,results) =>{
        if(!error){
            console.log(results);
            res.redirect('/torneo/jugadores');
        } else{
            console.log(error);
        }
    })
}
controller.update = (req, res) => {

    const id = req.body.id_jugador;
    const nombre_new = req.body.nombre_new;
    const nacionalidad_new = req.body.nacionalidad_new;
    const id_equipos_new = req.body.id_equipos_new;
      db.query('UPDATE jugadores set nombre = ?,nacionalidad = ?,id_equipos = ? where id = ?', [nombre_new,nacionalidad_new,id_equipos_new, id], (err, rows) => {
        res.redirect('/torneo/jugadores');
      
    });
  };

controller.delete = (req,res) =>{
    const {id} =  req.params;
    db.query('delete from jugadores where id = ?',[id],(err,equipos)=>{
        if(!err){
            res.redirect('/torneo/jugadores');
        } else{
            res.json(err);        }
    });
};

module.exports = controller;