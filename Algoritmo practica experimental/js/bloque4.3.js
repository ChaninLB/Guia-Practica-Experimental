function ArregloSuscripcion(){
    let Grupo=[], usr1, usr2, usr3, usr4, preciototal, c;
    let Usuarios=[[350,54,75,13]];
    for (c=0;c < Usuarios.length; c++){
        Grupo=Usuarios[c];
        usr1=Grupo[0];
        usr2=Grupo[1];
        usr3=Grupo[2];
        usr4=Grupo[3];
        for (c=0;c < Grupo.length; c++){
            if (Grupo[c]>=100){
            preciototal=Grupo[c]*5;
            alert("$5 cada usuario. PrecioTotal:"+preciototal);
            console.log("$5 cada usuario, PrecioTotal:"+preciototal);
            }else if (Grupo[c]>=50 && Grupo[c]<100){
            preciototal=Grupo[c]*6;
                alert("$6 cada usuario, PrecioTotal:"+preciototal);
                console.log("$6 cada usuario, PrecioTotal:"+preciototal);
            }else if (Grupo[c]>=30 && Grupo[c]<50){
            preciototal=Grupo[c]*8;
                alert("$8 cada usuario, PrecioTotal:"+preciototal);
                console.log("$8 cada usuario, PrecioTotal:"+preciototal);
            }else if (Grupo[c]<30){
                alert("$300 fijos")
                console.log("$300 fijos");
            }
        }
    }
}
debugger
ArregloSuscripcion()

//Pseudocodigo

//Algoritmo Arreglo_Suscripcion
	//Definir N, i, total, costoUnitario Como Real
    //Definir usuarios, costoTotal, costoPorUsuario Como Real
	
	//Escribir "Ingrese la cantidad de grupos:"
	//Leer N
	//Dimensionar  usuarios[N]
	//Dimensionar  costoTotal[N]
	//Dimensionar costoPorUsuario[N]
	//Para i <- 1 Hasta N Con Paso 1 Hacer
		//Escribir "Ingrese la cantidad de usuarios del grupo ", i, ":"
		//Leer usuarios[i]
		//Si usuarios[i] >= 100 Entonces
			//costoUnitario=5
			//total=usuarios[i] * costoUnitario
			//Escribir "precio total: ", total
		//SiNo
			//Si usuarios[i] >= 50 Y usuarios[i] <= 99 Entonces
				//costoUnitario=6
				//total=usuarios[i] * costoUnitario
				//Escribir "precio total: ", total
			//SiNo
				//Si usuarios[i] >= 30 Y usuarios[i] <= 49 Entonces
					//costoUnitario=8
					//total=usuarios[i] * costoUnitario
					//Escribir "precio total: ", total
				//SiNo
					//si usuarios[i]  < 300 Entonces
						//Escribir "$300 fijos"
					//FinSi
				//FinSi
			//FinSi
		//FinSi
	//FinPara
//FinAlgoritmo
