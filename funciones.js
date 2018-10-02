/*-----------------MÉTODO DIRECTO-----------------*/
/*------------------------------------------------*/
function dibujarLinea(xi,yi,xf,yf) 
{
	var v = validados(xi,yi,xf,yf);
	var m = (v.yf-v.yi)/(v.xf-v.xi);
	var b = v.yi - m*v.xi;

	for (var i = v.xi ; i <= v.xf; i++) {
		var y = (m*i)+b;
		ctx.putImageData(imgData, i, Math.round(y));
		console.log(i);
	}

}
/*------------------------------------------------*/
/*-----------------ADD SIMPLE-----------------*/
/*------------------------------------------------*/
function dibujarLineaAddSimple(xi,yi,xf,yf)
{
	var m = (yf-yi)/(xf-xi);
	if ( ((Math.abs(m))<1 && xi>xf) ||  ((Math.abs(m))<1 && yi>yf) ) 
	{
		var aux;
			aux = xf;
			xf = xi;
			xi = aux;
			aux = yf;
			yf = yi;
			yi = aux;
	}
	ctx.putImageData(imgData, xi, yi);
	if ((Math.abs(m))<1) 
	{
		var yr = yi;
		for (var i = xi-1; i <= xf-1; i++) 
		{
			yr = yr+m;
			ctx.putImageData(imgData, i, Math.round(yr));
		}
	}
	else
	{
		var xr = xi;
		var im = 1/m;
		for (var i = yi+1; i <= yf-1; i++) {
			xr = xr+im;
			ctx.putImageData(imgData,Math.round(xr),i);
		}
	}
	ctx.putImageData(imgData, xf, yf);

}

/*------------------------------------------------*/
/*-----------------ADD ENTERO-----------------*/
/*------------------------------------------------*/

function dibujarLineaADDEntero(xi,yi,xf,yf)
{
	var dy= yf-yi;
	var dx= xf-xi;
	console.log(xi,yi,xf,yf);
	if( (Math.abs(dy) > Math.abs(dx) && yi>yf) || (Math.abs(dy) < Math.abs(dx) && xi>xf) )
	{
		var aux,
			aux = xf;
			xf = xi;
			xi = aux;
			aux = yf;
			yf = yi;
			yi = aux;
	}
	console.log(xi,yi,xf,yf);
	var x = xi;
	var y = yi;
	var e = 0;
	dy= yf-yi;
	dx= xf-xi;
	ctx.putImageData(imgData,x,y); // dibuja primer punto
	if ( Math.abs(dy) < Math.abs(dx) ) //caso 1 y 3 x es mas grande que y //diagonal (0,0) (300,300)
	{

		if ( dy<0 ) //caso 1 dy negativo
		{
			for (var i = 1; i <=dx-1; i++) {
				if(e<0){
					x=x+1;
					y=y-1;
					ctx.putImageData(imgData,x,y);
					e=e-dy;
				}
				else // if (e>=0) 
				{
					x=x+1;
					ctx.putImageData(imgData,x,y);
					e=e-dy-dx;
				}
			}
		}
		else// if (dy>=0)  // caso 3 dy positivo
		{
			for(i=1;i<=dx-1;i++)
			{
				if (e<0) 
				{
					x=x+1;
					y=y+1;
					ctx.putImageData(imgData,x,y);
					e=e-dy+dx;
				}
				else // if (e>=0) 
				{
					x=x+1;
					ctx.putImageData(imgData,x,y);
					e=e-dy;
				}
			}
		} 		
	}			//end caso 1 y 3
	else if ( Math.abs(dy) >= Math.abs(dx) )  //caso 2 y 4
	{
		if (dx<0) 	// caso 2 dx negativo
		{
			for (var i = 1; i <=dy-1; i++) 
			{
				if (e<0) 
				{
					y=y+1;
					x=x-1;
					ctx.putImageData(imgData,x,y);
					e=e+dx+dy;
					//console.log(x,y); //asdfasdfasdfs
				}
				else // if (e>=0) 
				{
					y=y+1;
					ctx.putImageData(imgData,x,y);
					e=e+dx;
				}
			}
		}
		else // if (dx>0)  //caso 4 dx positivo
		{
			for (var i = 1; i <=dy-1; i++) 
			{
				if (e<0) 
				{
					y=y+1;
					x=x+1;
					ctx.putImageData(imgData,x,y);
					e=e-dx+dy;
				}
				else // if (e>=0) 
				{
					y=y+1;
					ctx.putImageData(imgData,x,y);
					e=e-dx;
				}
			}
		}

		//añadido
			if ( (Math.abs(dy)===Math.abs(dx)) && ((dy<0&&dx>0)||(dy<0&&dx<0)))
			{
				if (dy<0&&dx>0) 
				{
					for (var i = 1; i <=Math.abs(dy)-1; i++) {
						x=x+1;
						y=y-1;
						ctx.putImageData(imgData,x,y);
					}
				}
				else if (dy<0&&dx<0) 
				{
					for (var i = 1; i <=Math.abs(dy)-1; i++) {
						x=x-1;
						y=y-1;
						ctx.putImageData(imgData,x,y);
					}
				}
			}
	}


	ctx.putImageData(imgData,xf,yf); //dibuja ultimo punto
}


/*TRAZADO DE CIRCULOS*/


/*----------------------------------------------------------*/
/*-----------------1. REPRESENTACIÓN IMPLÍCITA-----------------*/
/*----------------------------------------------------------*/


function dibujarCirculoImplicita(xc,yc,r)
{
	console.log(xc,yc,r); // esta recibiendo los valores
	var ys,yi,xi,p,xj;
	ys=yi=yc;
	xi=xj=xc;
	for (var i = 0; i <= Math.abs(r); i++) {
		p=Math.sqrt( Math.pow(r,2)-Math.pow((xi-xc),2) );
		ys=yc+p;
		yi=yc-p;
		ctx.putImageData(imgData,xi,ys);
		ctx.putImageData(imgData,xi,yi);
		xi=xi+1;
		ctx.putImageData(imgData,xj,ys);
		ctx.putImageData(imgData,xj,yi);
		xj=xj-1;
	}
}

/*----------------------------------------------------------*/
/*-----------------2. PARAMÉTRICA POLAR---------------------*/
/*----------------------------------------------------------*/

function circ_polar(xc,yc,r)
{

}

/*----------------------------------------------------------*/
/*-----------------3. TRAZADO INCREMENTAL---------------------*/
/*----------------------------------------------------------*/

function circ_polar(xc,yc,r)
{
	
}

/*----------------------------------------------------------*/
/*-----------------4. PARAMÉTRICA POLAR---------------------*/
/*----------------------------------------------------------*/

function circ_polar(xc,yc,r)
{
	
}













