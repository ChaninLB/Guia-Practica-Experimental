function CondicionalayorDeEda(){
    let eda1=0, eda2=0, eda3=0;
    eda1 = parseInt(prompt("ingrese la primera edad"));
    eda2 = parseInt(prompt("ingrese la segunda edad"));
    eda3 = parseInt(prompt("ingrese la tercera edad"));
    if(eda1 > eda2 && eda1 > eda3){
    alert(`el hermano mayor tiene ${eda1} años`);
    console.log(`el hermano mayor tiene ${eda1} años`);
    }else if(eda2 > eda1 && eda2 > eda3){
    alert(`el hermano mayor tiene ${eda2} años`);
    console.log(`el hermano mayor tiene ${eda2} años`); 
    }else{
    alert(`el hermano mayor tiene ${eda3} años`);
    console.log(`el hermano mayor tiene ${eda3} años`);
    }   
}
debugger;
CondicionalayorDeEda()

//pseudocodigo

//Algoritmo Condicional_Mayor_De_Edad
	//Definir eda1, eda2, eda3 Como Entero
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
//FinAlgoritmo
