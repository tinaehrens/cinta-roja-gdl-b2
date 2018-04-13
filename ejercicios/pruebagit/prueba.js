/*console.log("holi")*/


class Persona{

    constructor(name,edad,telefono,email){
        this.nombre = name
        this.edad = edad
        this.telefono = telefono
        this.email = email

    }

presentarse(){
    return "Hola me llamo" + this.name + " y tengo " + this.edad + " años. "

}

correr(){
    return "Estoy corriendo"
}

}


var x = 1
var arturo = new Persona ("Arturo",34,554123321213,"arturo@gmail.com")
console.log(arturo.presentarse())
var daniel = new Persona ("Daniel",26,41231231,"daniel@gmail.com")
console.log(daniel.presentarse())

let ken = new Desarrollador ("Ken",25,12341231,"ken@gmail.com","ensamblador")
console.log(daniel.presentarse())
console.log(daniel.programar())



//crear un objeto de tipo triángulo con atributo base y altura y tener el metodo area y perimetro - base x altura / 2 es el area de un triángulo - la suma de los lados es el perimetro

class Triangulo{

    constructor(base,altura){
        this.base = base
        this.altura = altura
    }
        area(){
            return "El area de este triangulo es " + ((this.base*this.altura)/2)
        }
        perimetro(){
            return "El perimetro es " + (this.lados+this.lados)

        }
    }




var triangulo = new Triangulo (4,2)
console.log(triangulo.area())


class Desarrollador extends Persona{

    constructor(name,edad,telefono,email,lenguaje)
      super(name,edad,telefono,email)
      this.lenguaje = lenguaje
}

programar(){
    return "El desarrollador" + this.name + " está programando " + this.lenguaje
}
