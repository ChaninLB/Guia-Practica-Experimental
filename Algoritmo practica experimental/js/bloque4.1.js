function CondicionalSuscripciones() {
    let usuarios=0, preciototal
    usuarios=parseInt(prompt("ingrese el numero de usurios"));
    if (usuarios>=100){
        preciototal=usuarios*5
        alert("$5 cada usuario. PrecioTotal:"+preciototal);
        console.log("$5 cada usuario, PrecioTotal:"+preciototal);
    }else if (usuarios>=50 && usuarios<100){
        preciototal=usuarios*6
        alert("$6 cada usuario, PrecioTotal:"+preciototal);
        console.log("$6 cada usuario, PrecioTotal:"+preciototal);
    }else if (usuarios>=30 && usuarios<50){
        preciototal=usuarios*8
        alert("$8 cada usuario, PrecioTotal:"+preciototal);
        console.log("$8 cada usuario, PrecioTotal:"+preciototal);
    }else if (usuarios<30){
        alert("$300 fijos")
        console.log("$300 fijos");
    }
}
debugger
CondicionalSuscripciones()

//pseudocodigo

//Algoritmo Condicional_Suscripciones
	//Definir usuarios, preciototal Como Real
	//Escribir "el numero de usuarios"
	//Leer usuarios
	//si (usuarios >=100)Entonces
		//preciototal=usuarios*5
		//Escribir "$5 cada usuario. PrecioTotal: ", preciototal
	//SiNo
		//si (usuarios>=50) Y (usuarios<100) Entonces
			//preciototal=usuarios*6
			//Escribir "$6 cada usuario. PrecioTotal: ", preciototal
		//SiNo
			//si (usuarios>=30) Y (usuarios<50) Entonces
				//preciototal=usuarios*8
				//Escribir "$8 cada usuario. PrecioTotal: ", preciototal
			//SiNo
				//si (usuarios<30) Entonces
					//Escribir "$300 fijos"
				//FinSi
			//FinSi
		//FinSi
	//FinSi
//FinAlgoritmo
