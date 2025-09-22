function ArreglosInvitaciones(){
    let c, i, taj1, taj2, taj3, tarjeta=[];
    let pedidos=[[231,21,324]];
    for (c=0;c<pedidos.length;c++){
        tarjeta = pedidos[c];
        taj1=tarjeta[0];
        taj2=tarjeta[1];
        taj3=tarjeta[2];
        for (c=0;c<tarjeta.length;c++){
            if (tarjeta[c]<=200){
            Total=tarjeta[c]*2.00
            alert(" el valor es de $2.00c/u PrecioTotal: "+Total)
            console.log(" el valor es$2.00c/u PrecioTotal: "+Total)
            } else if (tarjeta[c]>200 && tarjeta[c]<300){
            Total= tarjeta[c]*1.80
            alert(" el valor es de $1.80c/u PrecioTotal: "+Total)
            console.log(" el valor es$1.80c/u PrecioTotal: "+Total)
            } else if (tarjeta[c]>300){
            Total= tarjeta[c]*1.50
            alert(" el valor es de $1.50c/u PrecioTotal: "+Total)
            console.log(" el valor es$1.50c/u PrecioTotal: "+Total)
            }
        }
    }
}
debugger
ArreglosInvitaciones()

//Pseudocodigo

//Algoritmo Arreglos_Invitaciones
	//definir c, i Como Entero
	//Definir total Como Real
	//Escribir "ingerse el numero de pedidos"
	//Leer c
	//Dimensionar pedidos[c]
	//Dimensionar tarjeta[c]
	//Para i=1 hasta c Con Paso 1 Hacer
		//Escribir "ingrese el numero de tarjetas" ,i
		//Leer tarjeta[i]
		//Si (tarjeta[i] <= 200) Entonces
			//total=tarjeta[i] *2.00
			//Escribir "el valor es de $2.00c/u PrecioTotal: ", total
		//SiNo
			//si (tarjeta[i]>200) Y (tarjeta[i]<300)Entonces
				//total=tarjeta[i]*1.80
				//Escribir " el valor es de $1.80c/u PrecioTotal: ", total
			//SiNo
				//si (tarjeta[i]>=300)Entonces
					//total=tarjeta[i]*1.50
					//Escribir " el valor es de $2.50c/u PrecioTotal: ", total 
				//FinSi
			//FinSi
		//FinSi	
	//FinPara	
//FinAlgoritmo
