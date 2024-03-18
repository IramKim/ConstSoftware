const db = require("../util/database");
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //Constructor
    constructor(mi_username, mi_nombre, mi_password) {
        this.username = mi_username;
        this.nombre = mi_nombre;
        this.password = mi_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute('INSERT INTO usuarios (username, nombre, password) VALUES (?, ?, ?)',
            [this.username, this.nombre, password_cifrado]);  
        })
        .catch((error) => {
            console.log(error);
        });
    }

    static fetchOne(username) {
        return db.execute('Select * from usuarios WHERE username = ?', [username]);
    }


    static getPermisos(username) {
        return db.execute(`
            SELECT permiso
            FROM permisos p, posee po, rol r, asigna a, usuarios u
            WHERE u.username = ? AND u.username = a.username AND
            a.idrol = r.idrol AND r.idrol = po.idrol AND po.idpermiso = p.idpermiso;
        `, [username]);
    }

    
}