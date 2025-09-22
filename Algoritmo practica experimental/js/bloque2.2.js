function RepetitivoInvitaciones(){
    let N=0, tarjetas=0, c=1, Total=0;
    N=parseInt(prompt("ingrese la cantidad de numero de pedidos"));
    while (c<=N){
    tarjetas=parseInt(prompt("ingrese la cantidad de tarjeta de invitaciones"));
    if (tarjetas<=200){
        Total= tarjetas*2.00
        alert(" el valor es de $2.00c/u PrecioTotal: "+Total)
        console.log(" el valor es$2.00c/u PrecioTotal: "+Total)
        } else if (tarjetas>=200 && tarjetas<300){
            Total=tarjetas*1.80
            alert(" el valor es de $1.80c/u PrecioTotal: "+Total)
            console.log(" el valor es de $1.80c/u PrecioTotal:  "+Total)
        } else if (tarjetas>300){
            Total=tarjetas*1.50;
            alert(" el valor es de $1.50c/u PrecioTotal: "+Total)
            console.log(" el valor es de $1.50c/u PrecioTotal: "+Total)
        }
    c=c+1
    }
}
debugger
RepetitivoInvitaciones()

//pseudocodigo

//Algoritmo Repetitivo_Invitaciones
	//Definir n, tarjetas, c, total Como Real
	//Escribir "ingrese la cantidad de numero de pedidos"
	//Leer n
	//Mientras (c<n) Hacer
		//Escribir "ingrese la cantidad de invitaciones"
		//leer tarjetas
		//Si (tarjetas <= 200) Entonces
			//total= tarjetas*2.00
			//Escribir "el valor es de $2.00c/u PrecioTotal: ", total
		//SiNo
			//si (tarjetas>200 Y tarjetas<300)Entonces
				//total= tarjetas*1.80
				//Escribir " el valor es de $1.80c/u PrecioTotal: ", total
			//SiNo
				//si (tarjetas>=300)Entonces
					//total=tarjetas*1.50
					//Escribir " el valor es de $2.50c/u PrecioTotal: ", total 
				//FinSi
			//FinSi
		//FinSi
		//c=c+1
	//FinMientras
//FinAlgoritmo
