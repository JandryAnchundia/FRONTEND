/* class Rectangulo{

    constructor(alto, ancho){

        this.alto= alto;
        this.ancho= ancho;
    }


    get area (){

       return this.calcularArea()

    }

    calcularArea (){

        return this.alto * this.ancho;
    }


    get mensaje (){

        return this.mensajeCuadrado()
    }


    mensajeCuadrado (){

        return "El valor del cuadrado es: "


    }



    saludo (){

        console.log('Hola, soy un cuadrado.');
    }

}




class Triangulo extends Rectangulo{
    constructor(alto, ancho, sobre2){

       

        super(alto, ancho);
        this.sobre2 =  sobre2;


    }


    get areaTriangulo (){

        return this.triangulo();
    }

    triangulo(){

        return  (this.ancho * this.alto) / this.sobre2
    }


    get mensajeTriangulo(){

        return this.msjTriangulo()
    }


    msjTriangulo(){

        return   'El valor del triangulo es: '
    }

}


const cuadrado =  new Rectangulo(10, 40);
const triangulo =  new Triangulo(2,3,2);



document.write( triangulo.mensajeTriangulo)

console.log(  triangulo.mensajeTriangulo + triangulo.areaTriangulo); */



let marca = prompt('Pon tu marca');

class Vehiculo{

    constructor(marca, llantas){

        this.marca = marca;
        this.llantas = llantas;
    }


    get mensajeVehiculo(){

        return this.msjVehiculo;
    }


    msjVehiculo(){

        return `Soy un vehiculo de ${this.llantas} de la marca ${this.marca}`
    }


}

const carro = new Vehiculo('Chevrolet', '4');
console.log(carro.mensajeVehiculo());


class Motocicleta extends Vehiculo{

    constructor(marca, llantas, color){

        super(marca, llantas);
        this.color = color;

    }


    get mensajeMoto(){

        return this.msjMoto();


    }

    msjMoto(){

        return `Soy un vehiculo de ${this.llantas} de la marca ${this.marca} y color ${this.color}`
    }


    arrancar(){

        console.log('Run run');
    }


}

const moto = new Motocicleta(marca, '2', 'Roja y negra');

console.log(moto.mensajeMoto);
moto.arrancar();




console.log('Soy un cambio');