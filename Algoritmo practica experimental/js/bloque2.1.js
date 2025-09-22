function CondicionalInvitaciones(){
    let pedido=0, Total=0
    pedido=parseInt(prompt("ingrese la cantidad de invitaciones que desea"));
    if (pedido<=200){
        Total= pedido*2.00
        alert(" el valor es de $2.00c/u PrecioTotal: "+Total)
        console.log(" el valor es$2.00c/u PrecioTotal: "+Total)
    } else if (pedido>200 && pedido<300){
        Total= pedido*1.80
        alert(" el valor es de $1.80c/u PrecioTotal: "+Total)
        console.log(" el valor es$1.80c/u PrecioTotal: "+Total)
    } else if (pedido>300){
        Total= pedido*1.50
        alert(" el valor es de $1.50c/u PrecioTotal: "+Total)
        console.log(" el valor es$1.50c/u PrecioTotal: "+Total)
    }
}
debugger
CondicionalInvitaciones()

//pseudocodigo

//Algoritmo Condicional_Invitaciones
	//Definir pedido, total Como Real
	//Escribir "ingrese la cantidad de invitaciones"
	//leer pedido
	//Si (pedido <= 200) Entonces
		//total= pedido*2.00
		//Escribir "el valor es de $2.00c/u PrecioTotal: ", total
	//SiNo
		//si (pedido>200) Y (pedido<300)Entonces
			//total=pedido*1.80
			//Escribir " el valor es de $1.80c/u PrecioTotal: ", total
		//SiNo
			//si (pedido>=300)Entonces
				//total=pedido*1.50
				//Escribir " el valor es de $2.50c/u PrecioTotal: ", total 
			//FinSi
		//FinSi
	//FinSi
//FinAlgoritmo
