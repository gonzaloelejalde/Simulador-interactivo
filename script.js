
do {
    valorPrestamo = parseInt (prompt("Ingrese un prestamo"))
    if(isNaN(valorPrestamo)){
        alert("Por favor ingrese numeros válidos")
    }
    if(valorPrestamo === 0){
        alert("No se puede pedir un préstamo por 0")
    }
}while((isNaN(valorPrestamo)) || (valorPrestamo === 0))

const IVA = 1.21

class Prestamo {
    constructor (valorPrestamo, IVA) {
        this.valorPrestamo = valorPrestamo;
        this.IVA = IVA;
        this.precioFinal = this.valorPrestamo * IVA;
    }
    aplicarCuotas(){
        this.cuotas = this.precioFinal / 3
        this.precioAumento = (this.precioFinal * 1.05) / 6
    }
    mostrarMensaje(){
        alert(`Cuando devuelvas el préstamo, vas a tener que pagar ${this.precioFinal} pesos argentinos, ya que aumenta por la inflación. Lo podes abonar en 3 cuotas de ${this.cuotas} sin interés o en 6 cuotas de ${this.precioAumento} con un interés del 5%, ambas con el aumento de los impuestos sobre el valor añadido`)
    }

}

const prestamo1 = new Prestamo(valorPrestamo,IVA)

prestamo1.aplicarCuotas()

prestamo1.mostrarMensaje()