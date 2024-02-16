//Se dexlara una funcion, se definen los argumentos y la operacion 
// se retorna 
Funcion area <- calcularareatriangulo ( base, altura )
	area <- (base * altura) /2
Fin Funcion

Funcion areacirculo <- calcularAreaCirculo( radio )
	areaCirculo <- (3.1416 * radio ) * 2
FinFuncion

Funcion areacuadrado<- calcularAreaCuadrado (lado,lado)
	areacuadrado <- (lado*lado)
	
Fin Funcion

Algoritmo Funciones 
	//Vamos a llamar a nuestra funcion (invocar)
	area <- calcularareatriangulo (5,8)
	Escribir " El area del triangulo " , area
	
	//Vamos a llamar a nuestra funcion (invocar)
	areaCirculo <- calcularAreaCirculo (10)
	Escribir  "El area del circulo es: ", areacirculo
	
	//llamo a mi funcion para calcular el area del cuadrado
	areacuadrado <- calcularAreaCuadrado(5,5)
	Escribir "El area del cuadrado es ", areacuadrado
FinAlgoritmo
