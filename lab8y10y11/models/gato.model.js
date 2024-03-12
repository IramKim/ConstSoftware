const db = require('../util/database');
  
  module.exports = class Gato {

    //Constructor
    constructor(mi_nombre, mi_nivel, mi_imagen) {
      this.nombre = mi_nombre;
      this.nivel = mi_nivel;
      this.imagen = mi_imagen;
  }

    //Guardar
    save(){
      return db.execute('INSERT INTO gatos (nombre, nivel, imagen) VALUES (?, ?, ?)',
      [this.nombre, this.nivel, this.imagen]);
    }


    static fetchAll() {
      return db.execute('Select * from gatos')
    }
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
    static fetchOne(id) {
        return db.execute('Select * from gatos WHERE id = ?', [id]);
    }
}
//
  