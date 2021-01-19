const controller = {};
const db = require('../database');

controller.list = (req,res) => {
    const token = req.cookies.jwt;
    console.log(token);
    if(!token)
    {
        res.redirect('/login');
    }
    db.query('select * from equipos', (err, equipos) => {
        res.render('equipos', {
            equipos: equipos
        });
    });
};
controller.add = (req,res) => {
    
    
    const datos= req.body;
    db.query('insert into equipos SET ?',[datos],(err,equipos)=>{
        if(!err){
            res.redirect('/torneo/equipos');
        } else{
            res.json(err);        }
    });
};

controller.delete = (req,res) =>{
    
    const {id} =  req.params;
    db.query('delete from equipos where id = ?',[id],(err,equipos)=>{
        if(!err){
            res.redirect('/torneo/equipos');
        } else{
            res.json(err);        }
    });
};

controller.update = (req, res) => {
   
    const id = req.body.id_equipo;
    const nombre_new = req.body.nombre_new;
    const uniforme_new = req.body.uniforme_new;
    const ciudad_new = req.body.ciudad_new;
      db.query('UPDATE equipos set nombre = ?,uniforme = ?,ciudad = ? where id = ?', [nombre_new,uniforme_new,ciudad_new, id], (err, rows) => {
        res.redirect('/torneo/equipos');
      
    });
  };

module.exports = controller;
