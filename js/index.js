var pantalla = document.getElementById("display");
var cero = 1; //identifica que el numero inicial es cero//
var x = "0"; // valor de numero
var punto = 0; //Identifica si el numero es decimal//
var dig = 1; //Cantiidad de digitos maximos//
var opr = 0; // indica si hay activa una operación
var num1 = "0"; // Primer numero de operación
var num2 = "0"; //Segundo numero ede operación
var resul = 0; //variable para guardar resultado
var ope = "" ; // operacion a realizar

function numero(obj){
	if (dig<9) {
	if (x == "0" || cero==1) {
		pantalla.innerHTML=obj;
		x = obj;
	}	
	else {
		pantalla.innerHTML+=obj;
		x += obj;
	}
	cero = 0 //El numero ya no es cero//
	dig += 1;
	}
} 
function borrado(){
	pantalla.innerHTML="0";
	x="0"
	cero=1;
	punto=0;
	dig = 1;
	resul="0";
	num1="0";
	num2="0";
}
function decimal(obj){
	if (punto == 0) {
		pantalla.innerHTML+=obj;
		x += obj;
	} 
	punto = 1
	cero=0
}
function negativo(){
	pantalla.innerHTML = x*-1;
	x = x*-1
}
function operacion(obj){
	pantalla.innerHTML=obj;
	if (opr==0){
		ope=obj;
			if ((x!="0") && (num1 == "0")){
			num1=parseFloat(x);
			x="0";
			punto=0;
			cero=1;
			} else if((x != "0") && (num1 != "0")){
			resultado();
			}
		opr=1;
	}else if((opr==1) && (x != "0")){
		 	pantalla.innerHTML=ope;
		 	resultado();
			ope=obj;
			opr=1;
		}
		dig=1
}
function resultado(){
		num2=parseFloat(x);
		x="0";
		resul = eval(num1+ope+num2); 
		largo = String(resul);
		if (largo.length>8){
			resul2 = resul.toExponential(2);
			pantalla.innerHTML=resul2;
		}else{
		pantalla.innerHTML=resul}
		num1 = resul;
		num2 = "0";
		ope=0;
		opr=0;
		punto=0;
		cero = 1;

}
function oprimir(obj){
	var elemento = document.getElementById(obj)
	elemento.style.paddingTop = "4px";
	elemento.style.paddingLeft = "4px";
}
function soltar(obj){
	var elemento = document.getElementById(obj)
	elemento.style.paddingTop = "0px";
	elemento.style.paddingLeft = "0px";
}
