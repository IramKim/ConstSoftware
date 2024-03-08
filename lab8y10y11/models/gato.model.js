const gatos = [
    {
      nombre: "Gato dormido", 
      nivel: 1,  
      imagen: "https://imagenes.20minutos.es/files/image_640_360/files/fp/uploads/imagenes/2023/07/14/un-gato-durmiendo-de-lado.r_d.320-214-10000.jpeg",
    },
    {
      nombre: "Gato gordo", 
      nivel: 5, 
      imagen: "https://www.arandovo.com/wp-content/uploads/2023/09/gato-gordo-o-con-sobrepeso.png",
    }
  ];


  
  module.exports = class Gato {

    //Constructor
    constructor(mi_nombre, mi_nivel, mi_imagen) {
      this.nombre = mi_nombre;
      this.nivel = mi_nivel;
      this.imagen = mi_imagen;
  }

    //Guardar
    save(){
    gatos.push(this);
    }
      

    //FetchAll
    static fetchAll() {
      return gatos;
    }
  }
  