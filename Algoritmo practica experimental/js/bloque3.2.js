function RepetitivaPrecio(){
    let precio=0, N=0, c=0, marca="", capacidad=0, preciofinal=0 
    N=parseInt(prompt("ingrese la cantidad de productos"));
    while (c<N){
        precio=parseFloat(prompt("ingrese el precio del producto"));
        marca=prompt("ingrese la marca del producto (A) o (B)"); //puede ser "A" o "B"
        capacidad=parseInt(prompt("ingrese la capacidad del producto en (64GB) o (128GB)")); //puede ser 64 o 128
        if (marca=="A" && capacidad==64){
            preciofinal=precio+20
        } else if (marca=="A" && capacidad==128){
            preciofinal=precio+30
        }   else if (marca=="B" && capacidad==64){
            preciofinal=precio-30
        } else if (marca=="B" && capacidad==128){
            preciofinal=precio-50
        }               
        alert("el precio final del producto es: "+preciofinal)
        console.log("el precio final del producto es: "+preciofinal)
        c=c+1
    }
}       
debugger
RepetitivaPrecio()

//Pseudocodigo
//Algoritmo Repetitiva_Precio 
	//definir precio, n, c, capacidad Como Real
	//Escribir "ingrese la cantidad de productos"
	//Leer n
	//Mientras (c<n) Hacer
		//Escribir "ingrese el precio del producto"
		//Leer precio
		//Escribir "ingrese la marca del producto (A) o (B)"
		//Leer marca
		//Escribir "ingrese la capacidad del producto (64GB) o (128)"
		//Leer capacidad 
		//si (marca="A") Y (capacidad=64)Entonces
			//preciofinal=precio+20
		//SiNo
			//si (marca="A") Y (capacidad=128)Entonces
				//preciofinal=precio+30
			//SiNo
				//si (marca="B") Y (capacidad=64)Entonces
					//preciofinal=precio-30
				//SiNo
					//si (marca="B") Y (capacidad=128)Entonces
						//preciofinal=precio-50
					//FinSi
				//FinSi
			//FinSi
		//FinSi
		//Escribir "el precio final del producto es: ", preciofinal
    //c=c+1
	//FinMientras	
//FinAlgoritmo
