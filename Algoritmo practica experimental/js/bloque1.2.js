function RepetitivaMayorDeEdad(){
    let N=0, c=0, edad1=0, edad2=0, edad3=0;
    N=parseInt(prompt("ingrese la cantidad de edades"));
    while (c<N){
    edad1=parseInt(prompt("ingrese la edad del primer hermano"));
    edad2=parseInt(prompt("ingrese la edad del segundo hermano"));
    edad3=parseInt(prompt("ingrese la edad del tercer hermano"));
    if (edad1>edad2 && edad1>edad2){
        alert(`la edad del hermano mayor es ${edad1} años`)
        console.log(`la edad del hermano mayor es: ${edad1} años`)
    } else if (edad2>edad1 && edad2>edad3){ 
        alert(`la edad del hermano mayor es ${edad2} años`)
        console.log(`la edad del hermano mayor es: ${edad2} años`)
    } else {
        alert(`la edad del hermano mayor es ${edad3} años`)
        console.log(`la edad del hermano mayor es: ${edad3} años`)
    }   
    c=c+1
    }
}
debugger
RepetitivaMayorDeEdad()

//pseudocodigo

//Algoritmo Repetitiva_Mayor_De_Edad
	//Definir N, i, eda1, eda2, eda3 Como Entero
	//Escribir "ingrese el numero de grupo de edades"
	//Leer n
	//Mientras c<=N Hacer
		//Escribir "ingresar la primera Edad"
		//Leer eda1
		//Escribir "ingresar la segunda Eda"
		//Leer eda2
		//Escribir "ingrese la tercera edad"
		//Leer eda3
		//si (eda1>eda2 Y eda1>eda3) Entonces
			//Escribir "el hermano mayor tiene: " eda1 " años"
		//SiNo
			//si (eda2>eda1 Y eda2>eda3) Entonces
				//Escribir "el hermano mayor tiene: " eda2 " años"
			//SiNo
				//si(eda3>eda1 Y eda3>eda2) Entonces
					//Escribir "el hermano mayor tiene: " eda3 " años"
				//FinSi
			//FinSi
		//FinSi
		//i=i+1
	//FinMientras
//FinAlgoritmo
