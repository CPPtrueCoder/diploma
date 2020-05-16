function Main()
{
	Obj.parn = 0;
	var check = checking();
	if (check == true){

		
	var q = vyvod();
		
   var A= EnterMatrix(); N= Obj.N;
   X= Obj.X;
 
 
		 //M(x)
	var mx = MX(A); 
	//M(y)
var my = MY(A);

 //Disp(X)
var dispX= Dispersion(A,mx);

//Disp(Y)
var dispY= DispersionY(A,my);


var expY=expressionY(A,my); 

//Expression X
var expX=expressionX(A,mx);
    //Expression Y

var expY=expressionY(A,my); 
	
//Cov(XY)
var cov = covariation(A,mx,my);

//Correlation 
		var corrX=correllation(A,mx,my,expY,expX);

	  var coeffs = calculate(A);

		LastEquation(coeffs);
		
	var lastdispY= lastDisp(A,coeffs);
	var det =  Determination(lastdispY, dispY);

	var student = studentcheck();
	var coeff = checkingcoeffs();
	//var fisher = FisherCheck();
	var dispchecking = dispcheck();
	var wert = checkingalert();
	if (wert==false){document.getElementById('scroll').remove();}
   }

		} 
