do {
    valorPrestamo = parseInt (prompt("Ingrese un prestamo"))

    if(isNaN(valorPrestamo)){
        alert("Por favor ingrese numeros válidos")
    }

    if(valorPrestamo === 0){
        alert("No se puede pedir un préstamo por 0")
    }

}while((isNaN(valorPrestamo)) || (valorPrestamo === 0))

function prestamos () {
    class Prestamo {
        constructor (impuestos, cuotas, IVA, precioFinal, aumentarPrecio) {
            this.impuestos = impuestos
            this.cuotas = cuotas
            this.IVA = IVA
            this.precioFinal = precioFinal
            this.aumentarPrecio = aumentarPrecio
        }
    }
}

this.impuestos = (num1, num2) => num1 * num2
this.IVA = 1.21 
this.precioFinal = this.impuestos(valorPrestamo, IVA)
this.cuotas = this.precioFinal / 3
this.aumentarPrecio = (this.precioFinal * 1.05) / 6

alert(`Cuando devuelvas el préstamo, vas a tener que pagar ${this.impuestos(valorPrestamo, IVA)} pesos argentinos, ya que aumenta por la inflación. Lo podes abonar en 3 cuotas de ${this.cuotas} sin interés o en 6 cuotas de ${this.aumentarPrecio} con un interés del 5%, ambas con el aumento de los impuestos sobre el valor añadido`)

alert("Si quiere probar con otro valor reinicie la página")