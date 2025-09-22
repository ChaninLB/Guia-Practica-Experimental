function ArregloMayorDeEdad(){
    let eda1=0, eda2=0, eda3=0, edad=[], n=0;
    let edades=[[12,13,14],[15,16,17],[18,19,20]];
    for (c=0;c < edades.length; c=c+1){
        edad=edades[c];
        eda1=edad[0];
        eda2=edad[1];
        eda3=edad[2];
        if (eda1 > eda2 && eda1 > eda3){
            alert("la edad mayor es: " + eda1);
        } else if (eda2 > eda1 && eda2 > eda3){
            alert("la edad mayor es: " + eda2);
        } else {
            alert("la edad mayor es: " + eda3);
        } 
    }  
}
debugger
ArregloMayorDeEdad()

//pseudocodigo

//Algoritmo Arreglos_Mayor_De_Edad
	//Definir N, i, edadmayor Como Entero
	//Dimensionar eda[3]
	//Escribir "ingrese el numero de grupo de edades"
	//Leer n
	//Para i=1 Hasta 3 Con Paso 1 Hacer
		//Escribir "ingresar las tres edades"
		//Leer eda[1]
		//Leer eda[2]
		//Leer eda[3]
		//si (eda[1]>eda[2] Y eda[1]>eda[3]) Entonces
			//edadmayor=eda[1]
		 //SiNo
			//si (eda[2]>eda[1] Y eda[2]>eda[3]) Entonces
				//edadmayor=eda[2]
			 //SiNo
				//si(eda[3]>eda[1] Y eda[3]>eda[2]) Entonces
					//edadmayor=eda[3]
				//FinSi
			//FinSi
		//FinSi
		//Escribir "le edad mayor es: " edadmayor
    //FinPara	
//FinAlgoritmo
