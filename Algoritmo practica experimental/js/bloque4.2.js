function RepetitivaSuscripciones(){
    let N=0, c=0, usuarios=0, preciototal=0
    N=parseInt(prompt("ingrese numero de solicitudes de grupos"));
    while(c<N){
        usuarios=parseInt(prompt("ingrese el numero de usurios"));
        if (usuarios>=100){
            preciototal=usuarios*5
            alert("total a pagar $5 cada usuario, preciototal:"+preciototal);
            console.log("total a pagar $5 cada usuario, preciototal:"+preciototal);
        }else if (usuarios>=50 && usuarios<100){
            preciototal=usuarios*6
            alert("total a pagar $6 cada usuario, preciototal:"+preciototal);
            console.log("total a pagar $6 cada usuario, preciototal:"+preciototal);
        }else if (usuarios>=30 && usuarios<50){
            preciototal=usuarios*8
            alert("totala a pagar $8 cada usuario, preciototal:"+preciototal);
            console.log("total a pagar $8 cada usuario, preciototal:"+preciototal);
        }else if (usuarios<30){
            alert("$300 fijos")
            console.log("total a pagar $300 fijos");
        }
    c=c+1
    }
}
debugger
RepetitivaSuscripciones()

//Pseudocodigo

//Algoritmo Repetitiva_Suscripciones
	//definir N, c, usuarios Como Entero
	//Definir preciototal Como Real
	//Escribir "ingrese numero de solisitudes de grupos"
	//Leer N
	//Mientras (c<N) Hacer
		//Escribir "ingrese el numero de usuarios"
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
    //c=c+1
	//FinMientras
//FinAlgoritmo