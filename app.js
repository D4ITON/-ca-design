/**
  @desc     : Dibujar lineas en 2D
  @status   : STABLE
  @build    : PASSED
  @version  : 0.0.1
  @fecha    : 14.09.2018
*/

// Captura del canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(1, 1);
for ( var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
}

document.getElementById('btn-submit').onclick = function(){
	var p = dibujar();
	// console.log(p.xi,p.yi,p.xf,p.yf);
	console.log(p.xc,p.yc,p.r);

	// dibujarLinea(p.xi,p.yi,p.xf,p.yf); // metodo directo
	// dibujarLineaAddSimple(p.xi,p.yi,p.xf,p.yf); 	//metodo ADD SIMPLE
	// dibujarLineaADDEntero(p.xi,p.yi,p.xf,p.yf); 	//metodo ADD ENTERO
	dibujarCirculoImplicita(p.xc,p.yc,p.r); //metodo CIRCULO IMPLICITO
}

function dibujar() {
	
	return {
		/*---valores linea---*/
		// xi: parseInt(document.getElementById("xi").value),
		// yi: parseInt(document.getElementById("yi").value),
		// xf: parseInt(document.getElementById("xf").value),
		// yf: parseInt(document.getElementById("yf").value),
		/*---valores circulo---*/
		xc: parseInt(document.getElementById("xc").value),
		yc: parseInt(document.getElementById("yc").value),
		r: parseInt(document.getElementById("r").value),
	}
}

function validados(xi,yi,xf,yf) {
	
	if (yi>=yf || xi>=xf) 
	{
			var aux;
			aux = xf;
			xf = xi;
			xi = aux;
			aux = yf;
			yf = yi;
			yi = aux;
			return {
				xi,yi,xf,yf
			};
	}
	return {
		xi,yi,xf,yf
	};
}

