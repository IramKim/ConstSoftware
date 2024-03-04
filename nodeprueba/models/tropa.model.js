//datos (pj: listas, objetos, etc)

//constructor de la clase. Sirve para crear un nuevo objeto

constructor(vida) {
    this.vida = 100;
}

//Este metodo sirve para guardar de manera persistente el nuevo objeto
save() {
    tropas.push(this);//codigo para guardar en la base de datos
}


//Este método sirve para devolver los objetos del almacenamiento (static: se usa sobre las clases y no objetos)
static fetchAll() {
    return tropas;
}




