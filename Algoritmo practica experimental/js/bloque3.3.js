function ArreglosPrecio() {
    let preciofinal, c;
    let marca=["A","A","B","B"];
    let capacidad=[64,128,64,128];
    let precioinicial=[200,200,200,200];
    for (c=0;c<marca.length;c=c+1){
        let precio=precioinicial[c]
        if (marca[c]=="A" && capacidad[c]==64){
                precio+=20;
            } else if (marca[c]=="A" && capacidad[c]==128){
                precio+=30;
            }   else if (marca[c]=="B" && capacidad[c]==64){
                precio-=30;
            } else if (marca[c]=="B" && capacidad[c]==128){
                precio-=50;
            }     
            preciofinal=precio          
        alert("el precio final del producto es: "+preciofinal)
        console.log("el precio final del producto es: "+preciofinal)
    }
}
debugger
ArreglosPrecio()

//Pseudocodigo
//Algoritmo Arreglos_Precio 
	//definir c Como Entero
	//Definir preciofinal Como Real
	//Escribir "Ingrese la cantidad de celulares:"
    //Leer N
    //Dimensionar marcas[N]
    //Dimensionar capacidades[N]
    //Dimensionar preciosFinales[N]
    //Escribir "Ingrese el precio inicial de los celulares:"
    //Leer precioinicial
    //Para i=1 Hasta N Con Paso 1 Hacer
        //Escribir "Ingrese la marca del celular (A o B):"
        //Leer marcas[i]
        //Escribir "Ingrese la capacidad del celular ", i, " (64 o 128):"
        //Leer capacidades[i]
            //Si marcas[i] = "A" Y capacidades[i] = 64 Entonces
			//precioFinal=precioinicial + 20
            //SiNo
                //Si marcas[i] = "A" Y capacidades[i] = 128 Entonces
                //precioFinal=precioinicial + 30
				//SiNo
					//Si marcas[i] = "B" Y capacidades[i] = 64 Entonces
					//precioFinal=precioFinal - 30
                    //SiNo
                        //Si marcas[i] = "B" Y capacidades[i] = 128 Entonces
                        //precioFinal=precioinicial - 50
                        //FinSi
                    //FinSi
                //FinSi
            //FinSi
		//Escribir "el precio final del producto es: ", preciofinal
	//FinPara
//FinAlgoritmo

