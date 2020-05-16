Obj ={ N:'', X:'',A:'',checked:false, Matrix:'',txt:'', ysredn: '', srednee: '', Sad2:'', transpX:'', koeffs:'', Su2:'', SumSu2:'', Gp: '', So2:'', 
disp:'',yteor:'', checked:'', studenttable:'', fishertable:'', kohrentable:'', sumSad2:'', fisher:'', cohrentrue:false, studenttrue:false, fishertrue:false
, alerttxt:'Хотите ли вы продолжить?\r\nСписок ошибок:\r\n', alerttrue:false, znak:''
	
}

function checkcoeffs(){
print('Student','');
print('Gp','');
print('fisher','');

	 Gp();

	if (Obj.cohrentrue==false){
	 Student();
if (Obj.studenttrue==false){


	Fisher();}}
console.log(Obj.fishertrue);
}

function Podpisi(){
	
	N= Obj.N; X= Obj.X;
	red = "<b>Введите данные</b>" + "<br/>" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
	for (i=0;i<N;i++){
	red += "<b>Y" + (i+1) + "</b> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ";
	}
	
	print('podpis', red);
	
}

function checkingalert() {
	if (Obj.alerttxt!='Хотите ли вы продолжить?\r\nСписок ошибок:\r\n'){
	var sd = confirm(Obj.alerttxt); 
	
	if (sd==false){
		document.getElementById('scroll').remove();
	}
return sd;}
else {return true;}
}

function podskazka_parn(){
	var txt= '     При вводе данных из файла, ваш файл должен быть в формате .txt, и иметь от 2 до 7 столбцов, и иметь 4,8,16 или 32 строки.\r\n\r\n     Каждый новый элемент строки в матрице - ';
	txt+='разделяется запятой, а добавление новой строки - переходом на следующую строку.\r\n\r\n     В случае, если вы введёте более 7-ми столбцов, и неподходящее кол-во строк,';
	txt+='программа выдаст ошибку и удалит все исследования, которые вы делали до этого будут удалены.';
	alert(txt);
	}
	

	

function podskazka(){
	if (!document.getElementById('legend')){
	var txt = '';
	txt+= '<img id = "legend" src="img/pfe.png" width ="40%" height ="35%" alt="Картинки не поддерживаются в вашем браузере">';
	
	print('legendary',txt) 
	}
	else {
		print ('legendary','');
	}
}

function vyvod(){

	Obj.alerttxt= 'Хотите ли вы продолжить?\r\nСписок ошибок:\r\n';
	Obj.alerttrue= false;
	var q = document.getElementById('scroll');
	if (!q){
	var div = document.createElement('div');
	div.className = "scrollbar";
	div.setAttribute("id", "scroll");
	
	var tablet = document.getElementById('button');
	tablet.after(div);
	var space= document.createElement('div');
	space.setAttribute("id", "SPACE");
	space.innerHTML= "<br/><br/><br/><br/>";
	
	var scrolling = document.getElementById('scroll');
	
	var mxx = document.createElement('div');
		mxx.setAttribute("id", "Matrix2");
	
	var ysredn = document.createElement('div');
		ysredn.setAttribute("id", "ysredn");
	
	var transposeX = document.createElement('div');
		transposeX.setAttribute("id", "transpX");

		var uravn = document.createElement('div');
		uravn.setAttribute("id", "uravn");

	var srednee = document.createElement('div');
		srednee.setAttribute("id", 'sredn');
		
		var Su2 = document.createElement('div');
		Su2.setAttribute("id", "Su2");

		var yteor = document.createElement('div');
		yteor.setAttribute("id", "yteor");

		var model = document.createElement('div');
		model.setAttribute("id", "Model");

		var Gp = document.createElement('div');
		Gp.setAttribute("id", "Gp");
		
		var student = document.createElement('div');
		student.setAttribute("id", "Student");
		
		
		
		var fisher = document.createElement('div');
		fisher.setAttribute("id", "fisher");

	var a= document.createElement('a');
	a.setAttribute("id", "a");
	
	scrolling.before(space);
	scrolling.append(mxx);
	scrolling.append(transposeX);
	scrolling.append(ysredn);
	scrolling.append(uravn);
	scrolling.append(srednee);
	scrolling.append(Su2);
	scrolling.append(yteor);
	scrolling.append(Gp);
	scrolling.append(student);
	
	scrolling.append(fisher);
	scrolling.append(model);
	scrolling.append(a);
	a.innerHTML = '<button id = "button13" onclick = "create()"> Скачать результат </button>';
	
	}
}

function CheckMinus(num){
	var txt = '';
	if(num<0){
		txt = ' - ' + (-1)*num; 
	}
	if (num>0)
	{
		txt = ' + ' +num;
	}
	if (num==0){
		txt = ' + 0';
	}
	if (isNaN(num)===true){
		txt = 'ERROR';
	}
	return txt;
}

function model(){

if(Obj.fishertrue==false&&Obj.cohrentrue==false&&Obj.studenttrue==false){
var coeffs = Obj.disp; var N = coeffs.length;
var txt='<br/>';

if (N==3){
		
	txt+= '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +Fix(coeffs[1])+ '*X1 ' +CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[0]));	
	Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +Fix(coeffs[1])+ '*X1 ' + CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[0]));
	}
if (N==4){
txt+='<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +Fix(coeffs[0][1])+ '*X1 ' +CheckMinus(Fix(coeffs[0][2]))+'*X2'+CheckMinus(Fix(coeffs[0][3]))+'*X3' + CheckMinus(Fix(coeffs[0]));
Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +Fix(coeffs[1])+ '*X1 ' + CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[3])) + '*X3' + CheckMinus(Fix(coeffs[0]));
}
if (N==5){
txt+='<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +Fix(coeffs[1])+ '*X1 ' +CheckMinus(Fix(coeffs[2]))+'*X2'
+CheckMinus(Fix(coeffs[3]))+'*X3' +CheckMinus(Fix(coeffs[4]))+'*X4' + CheckMinus(Fix(coeffs[0])) ;

Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +Fix(coeffs[1])+ '*X1 ' + CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[3])) + '*X3' +CheckMinus(Fix(coeffs[4]))+ '*X4' + CheckMinus(Fix(coeffs[0]));

}	
	if (N==6){
txt+= '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' + coeffs[1]+ '*X1 ' +CheckMinus(Fix(coeffs[2]))+'*X2'
+CheckMinus(Fix(coeffs[3]))+'*X3' +CheckMinus(Fix(coeffs[4]))+'*X4' +CheckMinus(Fix(coeffs[5]))+'*X5' + CheckMinus(Fix(coeffs[0]));
Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +Fix(coeffs[1])+ '*X1 ' + CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[3])) + '*X3' 
+CheckMinus(Fix(coeffs[4]))+ '*X4' +CheckMinus(Fix(coeffs[5])) + '*X5' + CheckMinus(Fix(coeffs[0]));
}	
	if (N==7){
txt+= '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +Fix(coeffs[1])+ '*X1 ' +Fix(CheckMinus(coeffs[2]))+'*X2'
+CheckMinus(Fix(coeffs[3]))+'*X3' +CheckMinus(Fix(coeffs[4]))+'*X4' +CheckMinus(Fix(coeffs[5]))+'*X5' +CheckMinus(Fix(coeffs[6]))+'*X6' + CheckMinus(Fix(coeffs[0]));

Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +Fix(coeffs[1])+ '*X1 ' + CheckMinus(Fix(coeffs[2]))+ '*X2'+ CheckMinus(Fix(coeffs[3])) + '*X3' 
+CheckMinus(Fix(coeffs[4]))+ '*X4' +CheckMinus(Fix(coeffs[5])) + '*X5' +CheckMinus(Fix(coeffs[6])) + '*X6' + CheckMinus(Fix(coeffs[0]));
}



print("Model", txt);
}else { print('Model','');}
}

 function inverseMatrix(matrix) 
  {  
    var a = matrix;  var count = Obj.transpX.length;
    var e = Matrix(count,count);  
        for(i = 0; i < count; i++)  {
      for(j = 0; j< count; j++)  {
		if(i==j)
        {e[i][j]= 1;} 
        else {e[i][j]= 0;}
        
		}} 
              
    for(i = 0; i < count; i++) 
    {  
      tmp = a[i][i];  
      for(j = count - 1; j >= 0; j--) 
      {  
        e[i][j] /= tmp;  
        a[i][j] /= tmp;  
      }  
          
      for(j = 0; j < count; j++) 
      {  
        if(j != i) 
        {  
          tmp = a[j][i];  
          for(k = count - 1; k >= 0; k--) 
          {  
            e[j][k] -= e[i][k]*tmp;  
            a[j][k] -= a[i][k]*tmp;  
	  }}}}  
    return e;  
  } 


  function checking(){
	var div = document.getElementById('scroll');
		 var A = []; var second = true; var third = true;
    var X = Obj.X; var N= Obj.N;
	
    for (var i = 0; i < X; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
		{if (document.getElementById('a'+(i+1)+(j+1)).value =="") {second=false;}
		if(isNaN(document.getElementById('a'+(i+1)+(j+1)).value)==true){ second=false; third=false;}
		}}
		
		if (second==false){
			if (div){
			div.remove();}
			if (third==false){ setTimeout("alert('Введите корректные данные!')", 1);}
			else { setTimeout("alert('Введите матрицу!')", 1); }
			
			return false;
		}
		
		else {
			return true;
		}
		
	}

function srednEXP(){
	var mys = document.getElementById('srednee2');
var A = Obj.A;
		var  N= Obj.N;
	var X= Obj.X;
	if(!mys){
		var txt= '<br/>';
		var razv = document.getElementById('button5');
	 	var srednee = document.createElement('div');
		srednee.setAttribute("id", "srednee2");
		razv.after(srednee);	var sum = 0;
		txt+= '<b>M(Y) = (</b>';
		
		for (i=0;i<X;i++){
			sum+= parseFloat(Obj.ysredn[i]);
		txt+=Obj.ysredn[i];	
		if (i<(X-1)){
			txt+= ' + ';
		}
		}
		txt+='<b>)</b> / '+X + ' = <b>(' + sum + ' / ' + X + ')</b> = <b>' +  Obj.srednee + '</b>';
		txt+='<br/>';
		print('srednee2', txt);
	}
else{
	mys.remove();
}
	
}

function sredn(){
	
	var summa =0;
	var N= (Obj.ysredn).length;
	for (i=0;i<N;i++)
	{
		summa += parseFloat(Obj.ysredn[i]);
	}
	
	
	var txt= '<br/><b>M(Y)= </b>' + Fix(summa/N);
	Obj.txt +='\r\n\r\nM(Y) = '+Fix(summa/N) +'\r\n';
	txt+= " &nbsp&nbsp&nbsp " + '<br/><button class = "button2" id= "button5" onclick=srednEXP()>Развернуть</button>';
	print('sredn',txt);
	Obj.srednee = Fix(summa/N);
	return summa;
}

function su2exp(){
	
	var mys = document.getElementById('su2exp');
var A = Obj.A;
		var  N= Obj.N;
	var X= Obj.X;
	
	if(!mys){
		 
		var txt= '<br/>'; var q=0; var w = 0; var sum2=0;
		var razv = document.getElementById('button6');
	 	var srednee = document.createElement('div');
		srednee.setAttribute("id", "su2exp");
		razv.after(srednee);
		
		do{
		eval ('var mas'+q+'=[]');
		for (i=0;i<X;i++){
			
			eval ('mas'+q+'[i]=0');
	eval ('mas'+q+'[i]=Fix((A[i]['+q+'] - Obj.ysredn[i])**2)');	
		}q++;}
		while (q<X);
		
		if(N>1){
		
		q=0;
		
		do{
			
		txt+= '<b>S<sub>u</sub><sup>2</sup>[' + (q+1) + ']</b> &nbsp=&nbsp [';
		w=0;		
		do{
		if (w>0){
			txt+= ' + ';
		}
		txt+= '(' +A[q][w] + ' - ' + Obj.ysredn[q] + ')<sup>2</sup>';
		
		w++;
		}	while (w<N);
		txt+='] / ('+N +'-1) &nbsp=&nbsp [';
		w=0;
		sum2=0;
			do{
		if (w>0){
			txt+= ' + ';
		}
		txt+= Fix(A[q][w]-Obj.ysredn[q]) + '<sup>2</sup>';
		sum2+= Fix(parseFloat(A[q][w]-Obj.ysredn[q])**2);
		w++;
		}	while (w<N);
		txt+='] / '+(N-1)+' &nbsp=&nbsp ' + sum2 + ' / ' + (N-1) + ' &nbsp=&nbsp <b>' + Fix(Obj.Su2[q])+'</b>';
		

	txt+='<br/>';
			q++;
		} 
		while (q<X);
		}
		
	else {
		var q=0;
		do{
			
			txt+= '<b>S<sub>u</sub><sup>2</sup>[' + (q+1) + ']</b> &nbsp=&nbsp ' + Fix(Obj.ysredn[q]) + '<br/>';
			
			q++;
		}while (q<X);
		txt+='<br/>'
	}
		
		
print ('su2exp', txt);
	
}else {mys.remove();}

}


function su2(){
	var N = Obj.N;
	var A = Obj.A; var X= Obj.X; var Y = Obj.ysredn; var Su2=[]; var q=0; var w=0; var i=0; 
	var txt='<br/><b> Построчная дисперсия (S<sub>u</sub><sup>2</sup>) = [ </b>';

if (N>1){
	do{
		
		eval ('var mas'+q+'=[]');
		for (i=0;i<X;i++){
			
			eval ('mas'+q+'[i]=0');
	eval ('mas'+q+'[i]=((A[i]['+q+'] - Y[i])**2)');
				
		}
	q++;
	}while (q<N);
	
		for(i=0;i<X;i++)
{
Su2[i]=0;
}
	
	for(i=0;i<X;i++){ w=0; do{
				
		eval ('Su2[i]+= Fix(mas'+w+'[i])'); 
			w++;} 
			while (w<N); }	
		
		for (i=0;i<X;i++){
		Su2[i]= Su2[i]/(N-1);
		txt+= Fix(Su2[i]);
		if (i<(X-1)){
			txt+= ' ; ' ;
		}
		}

		 txt+=' <b>]</b>';
	}
	
	else {
		for(i=0;i<X;i++){
			Su2[i]=Fix(Y[i]);
		}
	
	for(i=0;i<X;i++){
			txt+=Fix(Su2[i]);
			if (i<(X-1)){
				txt+=' ; ';
			}
		}
	txt+=' ]';	
	}
	
	txt+= " &nbsp&nbsp&nbsp " + '<br/><button class = "button2" id= "button6" onclick=su2exp()>Развернуть</button>';
	print('Su2', txt);
	Obj.Su2 = Su2;
	
	
		Obj.txt+='\r\nПострочная дисперсия (Su^2) = [ '
	
	for (i=0;i<X;i++){
		Obj.txt+= Fix(Su2[i]);
		if (i<(X-1)){
			Obj.txt+= ' ; ' ;
		}
		}
	
	
	Obj.txt+= ' ]';
	
	
	return Su2;
	
}

function podskazka_pfe(){
var txt= '     При вводе данных из файла, ваш файл должен быть в формате .txt, и иметь от 2 до 6 столбцов, и иметь 4,8,16 или 32 строки.\r\n\r\n     Каждый новый элемент строки в матрице - ';
txt+='разделяется запятой, а добавление новой строки - переходом на следующую строку.\r\n\r\n     В случае, если вы введёте более 7-ми столбцов, и неподходящее кол-во строк,';
txt+='программа выдаст ошибку и удалит все исследования, которые вы делали до этого будут удалены.';
alert(txt);
}
	function fishertable(){
	var N=Obj.N;
	var X=Obj.X; var fisher=0;
	if (X==4){
	var n=2;
	}
		if (X==8){
	var n=3;
	}
		if (X==16){
	var n=4;
	}
	if (X==32){
	var n=5;
	}
	var f1= X-n-1;
	var f2= X*(N-1);
	
	if (f1==1){
		
		if(f2==4){
			fisher=7.71;
		}
		
		if(f2==8){
			fisher=5.32;
		}
		
		
		if(f2==12){
			fisher=4.75;
		}
		if(f2==16){
			fisher=4.49;
		}
		
		if(f2==20){
			fisher=4.35;
		}
		
	}
	if (f1==4){
		
		if(f2==8){
			fisher=3.84;
		}
			
		if(f2==16){
			fisher=3.01;
		}

		if(f2==24){
			fisher=2.78;
		}

	if(f2==32){
			fisher=2.69;
		}
		if(f2==40){
			fisher=2.61;
		}


	}
	if (f1==11){
		
		if(f2==16){
			fisher=2.42;
		}
	
	if(f2==32){
			fisher=2.09;
		}
		if(f2==48){
			fisher=1.95;
		}
		if(f2==64){
			fisher=1.9;
		}
		
		if(f2==80){
			fisher=1.87;
		}
	
	}
	if (f1==26){
		if(f2==32){
			fisher=1.89;
		}
		if(f2==64){
			fisher=1.7;
		}
		if(f2==96){
			fisher=1.65;
		}
		if(f2==128){
			fisher=1.6;
		}
		if(f2>128){
			fisher=1.55;
		}
		
	}
	
Obj.fishertable=fisher;

return fisher;
	
	}
	
	
	
	
	
	
	function studenttable(){
		
		var f = Obj.X*(Obj.N-1);
		var student=0;
	if (f>=3&&f<8){
		student = 2.78;
	}
	if (f>=8&&f<12){
		student = 2.31;
	}
		if (f>=12&&f<16){
		student = 2.18;
	}
	if (f>=16&&f<20){
		student = 2.12;
	}
	if (f>=20&&f<24){
		student = 2.09;
	}
	if (f>=24&&f<27){
		student = 2.06;
	}
	if (f>=27&&f>40){
		student = 2.05;
	}
	if (f>=40&&f>60){
		student = 2.02;
	}
	if (f>=60&&f>=120){
		student = 2;
	}
	if (f>120){
		student = 1.98;
	}

		Obj.studenttable=student;
		return student;
	}
	
	
	
function kohrentable(){
var f1 = Obj.N -1;
var f2 = Obj.X;
var kohren = 0;
if (f1==1&&f2==4){
	kohren = 0.9065;
}
if (f1==1&&f2==8){
	
	kohren = 0.68;
}
if (f1==1&&f2==16){
	kohren = 0.47;
}
if (f1==1&&f2==32){
	kohren = 0.29;
}

if (f1==2&&f2==4){
	kohren = 0.767;
}
if (f1==2&&f2==8){
	
	kohren = 0.51;
}
if (f1==2&&f2==16){
	kohren = 0.33;
}
if (f1==2&&f2==32){
	kohren = 0.19;
}

if (f1==3&&f2==4){
	kohren = 0.684;
}
if (f1==3&&f2==8){
	
	kohren = 0.438;
}
if (f1==3&&f2==16){
	kohren = 0.27;
}
if (f1==3&&f2==32){
	kohren = 0.15;
}

if (f1==4&&f2==4){
	kohren = 0.684;
}
if (f1==4&&f2==8){
	
	kohren = 0.438;
}
if (f1==4&&f2==16){
	kohren = 0.27;
}
if (f1==4&&f2==32){
	kohren = 0.15;
}

if (f1==5&&f2==4){
	kohren = 0.59;
}
if (f1==5&&f2==8){
	
	kohren = 0.36;
}
if (f1==5&&f2==16){
	kohren = 0.24;
}
if (f1==5&&f2==32){
	kohren = 0.12;
}

if (f1==6&&f2==4){
	kohren = 0.56;
}
if (f1==6&&f2==8){
	
	kohren = 0.33;
}
if (f1==6&&f2==16){
	kohren = 0.2;
}
if (f1==6&&f2==32){
	kohren = 0.11;
}

Obj.kohrentable=kohren;
return kohren;
}


function stolb(A){

var B =[]; var i= (A.length-1);

do{
for (j=0;j<A.length;j++){
B[j]=A[i]

i--;
}
} while (i>-1);
return B;
}

 function printMatrix(){
	
	 res ='<center><b>Лабораторная работа по теме: <br/>"Полный факторный экперимент".</center><br/>Ваша матрица планирования (X):</b><br/>';
	 Obj.txt+= 'Лабораторная работа по теме: "Полный факторный экперимент".\r\nВаша матрица планирования (Х):\r\n\r\n';
for (var i = 0; i < Obj.Matrix.length; i++)
     {  if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
	 
	 
 for (var j = 0; j < Obj.Matrix[0].length; j++)
		
        { res += '<input style="width: 58px;" type="text" disabled id="b'+(i+1)+(j+1)+'"/>'; }
	 
	 res += '<br/>';}
     
	 print('Matrix2',res);
	 for (var i = 0; i < Obj.Matrix.length; i++)
     { for (var j = 0; j < Obj.Matrix[0].length; j++)
        {
	document.getElementById('b'+(i+1)+(j+1)).value = Obj.Matrix[i][j];
	} 		
	 } 
	 
	 var q=0;
	 do{
	 for (i=0;i<Obj.Matrix[0].length;i++){
		 Obj.txt+= Fix(Obj.Matrix[q][i]);
		 if (i<(Obj.Matrix[0].length)-1){ Obj.txt+= ' \r ';
		 }
		 
	 }q++; Obj.txt+='\r\n';
	 } while (q<Obj.Matrix.length);


 }
 
  function Matrix(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}
 
  function multMatrix(m1,m2){

  var result = [];
    for(var j = 0; j < m2.length; j++) {
        result[j] = [];
        for(var k = 0; k < m1[0].length; k++) {
            var sum = 0;
            for(var i = 0; i < m1.length; i++) {
                sum += m1[i][k] * m2[j][i];
            }
			
            result[j].push(sum);
        }
    }
    return result;
}
 
function GpEXP(){
	const newLocal = document.getElementById('GpEXP');
	var mys = newLocal;

	if(!mys){
	var Su2 = Obj.Su2; var txt= '<br/>';

	var razv = document.getElementById('button8');
	 var koeffs = document.createElement('div');
	koeffs.setAttribute("id", "GpEXP");
	razv.after(koeffs);	

	var max = Fix(Math.max(...Su2)); 
	var sum = 0;
	for (i = 0; i < X; i++) {
		sum += parseFloat(Su2[i]);
	}
	
	

	txt+='<b>Критерий Кохрэна (Gp) &nbsp=&nbsp Max ( </b>';
	for (i=0;i<Su2.length;i++){
	txt+='' + Fix(Su2[i]); 
	if (i<Su2.length-1){
	txt+= ' ; '
	}
	} txt+= ' <b>) / (</b> ';
	
	for (i=0;i<Su2.length;i++){
	txt+= '' + Fix(Su2[i]);
	if (i<Su2.length-1){

	txt+=' + '
	} 

	}txt+=' <b>)</b>';

	txt += ' &nbsp=&nbsp ' + max + ' / ' + Fix(sum) + ' = ' + Fix(max / sum) + '<br/><br/>';

	txt += '<b>Табличное значение критерия Кохрэна (G<sub>T</sub>) = G<sub>t</sub> (q,f<sub>1</sub>,f<sub>2</sub>)</b><br/> ';
	txt += '<b>q = 0.05</b><br/><b>f<sub>1</sub></b> = ' + Obj.N + ' - 1 = <b>' + (Obj.N-1) + '</b><br/>';
	txt+= '<b>f<sub>2</sub></b> = <b>' + Obj.X + '</b><br/>';
	txt+= '<b>G<sub>T</sub></b> (0.05 , ' + (Obj.N-1) + ' , '+ Obj.X + ') = <b>' + Obj.kohrentable + '</b><br/><br/>';
	if ((max/sum)<Obj.kohrentable){
	
	txt+= '<b>'+ Fix(max / sum) + ' < ' + Obj.kohrentable +'</b><br/><b>Вывод:</b> Расчётный критерий меньше табличного, всё отлично, можно продолжать расчёты.<br/>'; }
	else {

		txt+= '<b>'+ Fix(max / sum) + ' > ' + Obj.kohrentable
		+'</b><br/><b>Вывод:</b> Расчётный критерий больше табличного, дальнейшие расчёты не имеют смысла.<br/>';

	}



print('GpEXP',txt)

}
	else { mys.remove(); }
}



 //Критерий Кохрэна
 function Gp(){
var Su2= Obj.Su2;
	 var sum = newFunction();
	 
	 
return sum;

	 function newFunction() {
		 var X = Su2.length;
		 var txt = '<br/><br/>';
		 var sum = 0;
		 for (i = 0; i < X; i++) {
			 sum += parseFloat(Su2[i]);
		 }
		 var max = Fix(Math.max(...Su2));
		 txt += '<b>Критерий Кохрэна (Gp) = </b>' + Fix(max / sum) + '';
		
		 if ((max/sum)>Obj.kohrentable){

		txt+='<b> > </b>' + Obj.kohrentable +' <b>(Табличный критерий Кохрэна)</b><br/>';
		txt +=  '<br/><button class = "button2" id= "button8" onclick=GpEXP()>Развернуть</button>';
		txt+='<br/><br/><b>Дальнейшие исследования после этого не имеют смысла.</b>';
		 }
		 else {
			txt+='<b> < </b>' + Obj.kohrentable + '<b> (Табличный критерий Кохрэна '+ ')</b>';
			txt +=  '<br/><button class = "button2" id= "button8" onclick=GpEXP()>Развернуть</button>';
		 }

		 Obj.txt += '\r\n\r\nКритерий Кохрэна (Gp) = ' + Fix(max / sum) + '\r\n';
		 Obj.sumSu2 = Fix(sum);
		 Obj.Gp = Fix(max / sum);
		
		 

		 if ((max/sum)>Obj.kohrentable){
		Obj.alerttxt+='Расчётный критерий Кохрэна (' + Fix(max/sum) +') > Табличный критерий Кохрэна (' + Obj.kohrentable +')\r\n\r\nДальнейшие исследования после этого не имеют смысла' ;
		Obj.alerttrue = true;
		Obj.cohrentrue = true;
		
		 }
		 else{Obj.cohrentrue=false; }

		 if (isNaN(max/sum)==true||max/sum===Infinity){
			 Obj.alerttxt+='\r\nОшибка при подсчёте критерия Кохрэна, проверьте пожалуйста данные!\r\n';
			 Obj.cohrentrue = true;
		 }
		 else{
		 print('Gp', txt);
		 }

		 return sum;
	 }
}


function StudentEXP(){

	var mys = document.getElementById('studentEXP');
	var A = Obj.A;
			var  N= Obj.N;
		var X= Obj.X;
if (!mys){
	var razv = document.getElementById('button9');
	var studentt = document.createElement('div');
   studentt.setAttribute("id", "studentEXP");
   razv.after(studentt);	

	var q = 0;
var Su2 = Obj.Su2;
var So2 = (Obj.sumSu2/Obj.X);
var Sbi2 = (So2/Obj.X);
Sbi2 = Math.sqrt(Sbi2);
Obj.So2 = So2;
	bb = Obj.koeffs;
	var txt='<br/><b>t<sub>i<sub>p</sub></sub> &nbsp&nbsp=&nbsp&nbsp <b>|</b>B<sub>i</sub><b>|</b> / S<sub>b<sub>i</sub></sub>'   + '</b><br/><br/>' + '<b>B = [</b>';
	
	for (i=0;i<bb.length;i++){
		
		txt+= Fix(bb[i]);
		if (i<(bb.length-1)){
			txt+= ' ; ';
		}
		}
		txt+= '<b>]</b><br/><br/><b>S<sub>b<sub>i</sub></sub> = [ (</b>';
		for (i=0;i<Su2.length;i++){
		txt+=Fix(Su2[i]); 
		if (i<Su2.length-1){
			txt+= ' + '
			
		}
		} txt+= ' <b>) / (</b>' + Obj.X + ' * ' + Obj.X + '<b>) ]<sup>1/2</sup></b> &nbsp&nbsp=&nbsp&nbsp '+Fix(Sbi2) +'<br/><br/>';


	do {

		txt+='<b>t<sub>' + (q+1) +'<sub>p</sub></sub>'+ '&nbsp&nbsp=&nbsp&nbsp  |</b> ' + Fix(Obj.koeffs[q]) + ' <b>|</b>  / ' + Fix(Sbi2)+ ' &nbsp&nbsp=&nbsp&nbsp <b>' 
		+ Fix(Math.abs(Obj.koeffs[q])/Sbi2) + '</b>'; 
		if (Obj.student[q]<=Obj.studenttable){
			txt+= '&nbsp<b>&nbsp< &nbsp&nbsp'+Obj.studenttable+ '&nbsp&nbsp(Подходит)</b>';
		}
		else{
			txt+= '&nbsp<b>&nbsp> &nbsp&nbsp'+Obj.studenttable + '&nbsp&nbsp(Не подходит)</b>';
			
		}
		
		txt+='</b><br/>';
		q++;} while (q<Obj.koeffs.length)

		txt+='<br/>'
print ('studentEXP' ,txt );}
else {mys.remove();}


}

function Student(){
var truely = false;
var txt = '<br/><br/>';
var So2 = (Obj.sumSu2/Obj.X);
var Sbi2 = (So2/Obj.X);
Sbi2 = Math.sqrt(Sbi2);
Obj.So2 = So2;
var q =0; var w=0;
txt+='<b>Критерий Student-a:</b><br/><br/>'; Obj.txt+='\r\n\Критерий Student-a:\r\n';
var student =[];
do {
	 student[q] = Fix(Math.abs(Obj.koeffs[q])/Sbi2);
	
txt+='<b>t<sub>' + (q+1) +'<sub>p</sub></sub>'+ ' = </b>' + student[q] +'';

if (student[q]<Obj.studenttable){
	txt+= ' <b> < </b> '+Obj.studenttable +' (Табличный критерий Student-a) <b> </b><br/>';

}else{
	txt+= ' <b> > </b> '+Obj.studenttable +' (Табличный критерий Student-a) <b> </b><br/>';
} 

Obj.txt+= 't'+(q+1) + 'p' + ' = ' + student[q] +'\r\n';  q++;
} while (q<Obj.koeffs.length)

do{
	if (student[w]>Obj.studenttable){
	Obj.studenttrue = true;
	Obj.alerttxt+='\r\nКритерий Стьюдента №'+(w+1)+' (' + student[w] + ') > Табличный критерий Стьюдента (' + Obj.studenttable+ ')';
	Obj.alerttrue =true;
	} w++;
}while(w<student.length);
txt+= '<button class = "button2" id= "button9" onclick=StudentEXP()>Развернуть</button>';
if (Obj.studenttrue==true){
	Obj.alerttxt+='\r\n\r\nДальнейшие исследования после этого не имеют смысла';
	txt+='<br/><br/><b>Дальнейшие исследования не имеют смысла.</b>';
}
for(q=0;q<student.length;q++){
if (isNaN(student[q])==true||student[q]==Infinity){
Obj.alerttxt+='\r\nОшибка при подсчёте критерия Стьюдента №'+(q+1)+'. Проверьте пожалуйста данные!';		
truely=true;
Obj.studenttrue=true;
}}
if (truely==false){
print('Student', txt); 
}


Obj.student = student;
return Sbi2; 
}


  function koeffsEXP(){
	  const newLocal = document.getElementById('koeffsEXP');
var mys = newLocal;


if (!mys){
		var txt= '<br/>';
		var razv = document.getElementById('button4');
	 	var koeffs = document.createElement('div');
		koeffs.setAttribute("id", "koeffsEXP");
		razv.after(koeffs);	

	txt+='<b>B</b> &nbsp=&nbsp (X<sup>T</sup>*X)<sup>-1</sup>*(X<sup>T</sup>*Y) &nbsp=&nbsp <b>[</b>';
	for (i=0;i<Obj.koeffs.length;i++){
		txt+= Fix(Obj.koeffs[i]);
	if (i<(Obj.koeffs.length-1)){
txt+=' ; ';
	}		
	}
	txt+= '<b>]</b>';
	print('koeffsEXP', txt);
}

 else {mys.remove();
		}

  } 
 
 
 function koeffs(){
	
	 var Y = Matrix(Obj.ysredn.length,1);
	 for (i=0;i<Obj.ysredn.length;i++){
		 Y[i][0]=0;
	Y[i][0] = Obj.ysredn[i];
	
	 }

	 var temp = multMatrix(Obj.Matrix,Obj.transpX);
		 var b_1 = inverseMatrix(temp);
	 var b_2 =multMatrix(Obj.transpX,b_1);

		var b = multMatrix(Y,b_2); 
	
		var bb = [];
	for (i=0;i<b.length;i++){
		bb[i]=b[i][0];
		
	}
	
	Obj.koeffs =bb;
	
	var txt = '<br/><b>Коэффициенты уравнения регрессии (B):</b><br/>' + '<b>[</b>';
	for (i=0;i<bb.length;i++){
		
	txt+= Fix(bb[i]);
	if (i<(bb.length-1)){
		txt+= ' ; ';
	}
	}
	txt+= '<b>]</b>'
	 txt+= " &nbsp&nbsp&nbsp " + '<br/><button class = "button2" id= "button4" onclick=koeffsEXP()>Развернуть</button>';
	Obj.disp = bb;
	 print('uravn', txt);
	 
	 Obj.txt+= '\r\nКоэффициенты уравнения регрессии:\r\n[';  
	 
	 for (i=0;i<bb.length;i++)
	 {
	Obj.txt+= Fix(bb[i]);
if (i<(bb.length-1)){
Obj.txt+= ' ; ';}
}	

Obj.txt+= ']';	
return bb;
 
 }

function Yteorexp(){
	const newLocal = document.getElementById('YEXP');
	var mys = newLocal;

	if(!mys){

		var razv = document.getElementById('button10');
		var koeffs = document.createElement('div');
	   koeffs.setAttribute("id", "YEXP");
	   razv.after(koeffs);	


var txt ='<br/><b>Y теоретическое &nbsp=&nbsp B<sub>T</sub>*X<sub>T</sub> &nbsp= &nbsp[ </b>';
for (i=0;i<Obj.X;i++){
txt+=Fix(Obj.yteor[i]);
if(i<Obj.X-1){
	txt+= ' ; ';
}

}
txt+= ' <b>]</b> ';
print("YEXP",txt);
	}
	else{mys.remove();}

 }


 function Yteor(){
var txt = '<br/>';
var x_t = transpose(Obj.Matrix); var b_t=[[]];
for (i=0;i<Obj.X;i++){
	
	b_t[0][i]=Obj.disp[i];
	
}

var yteor2 = multMatrix(x_t, b_t);
var yteor = [];

for (i=0;i<Obj.X;i++){
	
	yteor[i]=yteor2[0][i];
	
}

Obj.yteor = yteor;



txt += '<b>Y теоретическое = [</b>';
Obj.txt += '\r\nY теоретическое = [ '
for (i=0;i<Obj.X;i++){

txt+= Fix(yteor[i]);
if (i<(Obj.X-1)){
txt+= ' ; ';
}
}

for (i=0;i<Obj.X;i++){

Obj.txt+= yteor[i];
if (i<(Obj.X-1)){
Obj.txt+= ' ; ';
}

}


txt+='<b>]</b><br/>'; Obj.txt+=' ]\r\n\r\n';
txt+= '<button class = "button2" id= "button10" onclick=Yteorexp()>Развернуть</button>';
print ('yteor',txt);
Obj.yteor=yteor;
return yteor;

} 

 function create() {
	 if (document.getElementById('Student')){
	 text = Obj.txt;
	name = 'PFE.txt';
		 
		type = 'text/plain';
	 
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
	 a.download = name;}
	 else {
		 alert('Нету данных, введите сначала данные, чтобы вывести их в файл');
	 }
}
 
 
function transpX(){
	var res = '<br/><b>Транспонированная матрица планирования (X<sup>T</sup>)</b><br/><br/>';
	Obj.txt+= '\r\n\r\nТранспонированная матрица планирования (X^T)\r\n';
	
	var x_t = transpose(Obj.Matrix); Obj.transpX = x_t;
	
	if (x_t[0].length!=32){
	for (var i = 0; i < x_t.length; i++)
     {  if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
	 
 for (var j = 0; j < x_t[0].length; j++)
		
        { res += '<input style="width: 30px;" type="text" disabled id="d'+(i+1)+(j+1)+'"/>'; }
	 
	 res += '<br/>';}
	 
	 
	// print('transpX', res);
	 
	 /*	for (var i = 0; i < x_t.length; i++)
     { for (var j = 0; j < x_t[0].length; j++)
        {
	document.getElementById('d'+(i+1)+(j+1)).value = x_t[i][j];
	} 		
	 }
	}
	else{
		
		for (var i = 0; i < x_t.length; i++)
     {  if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
		 for (var j = 0; j < 16; j++)
		
        { res += '<input style="width: 30px;" type="text" disabled id="d'+(i+1)+(j+1)+'"/>'; }
	 
	 res += '<br/>';}
	 res+= '<br/><b>Продолжение таблицы:</b><br/>'
	 		for (var i = 0; i < x_t.length; i++)
     {  if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
		 for (var j = 16; j < 32; j++)
		
        { res += '<input style="width: 30px;" type="text" disabled id="e'+(i+1)+(j+1)+'"/>'; }
	 
	 res += '<br/>';}
	 print('transpX', res);
			for (var i = 0; i < x_t.length; i++)
     { for (var j = 0; j < 16; j++)
        {
	document.getElementById('d'+(i+1)+(j+1)).value = x_t[i][j];
	} 		
	 }
				for (var i = 0; i < x_t.length; i++)
     { for (var j = 16; j < 32; j++)
        {
	document.getElementById('e'+(i+1)+(j+1)).value = x_t[i][j];
	} 		
	 }
		
	}
	
 */
	var q=0;
	 do{
	 for (i=0;i<Obj.transpX[0].length;i++){
		 Obj.txt+= x_t[q][i];
		 if (i<(Obj.transpX[0].length)-1){ Obj.txt+= ' \r ';
		 }
		 
	 }q++; Obj.txt+='\r\n';
	 } while (q<x_t.length);
	
		
	 for (i=0;i<Obj.ysredn.length;i++){
		 Obj.txt+= (i+1);
		 Obj.txt+= Obj.ysredn[i];
		 if (i<(Obj.ysredn.length)-1){ Obj.txt+= ' \r ';
		 }
		 Obj.txt+='\r\n';
	 }
	 
	
	return x_t;
	}
}

function CheckPlus(num){
	var txt = '';
	if(num<0){
		txt = ' + ' + Fis((-1)*num); 
	}
	else{
	txt = ' - ' + Fix(parseFloat(num));
	}
	
	return txt;
}
function FisherEXP(){
	if (Obj.X==4){
		var n = 2;
	}
	if (Obj.X==8){
		var n = 3;
	}
	if (Obj.X==16){

var n = 4;
	}
	if (Obj.X==32){

		var n = 5;
	}

	var mys =document.getElementById('FisherEXPP');

	if(!mys){
		var txt= '<br/>'; 
		var razv = document.getElementById('button14');
		var yexp = document.createElement('div');
		var X= Obj.X; var Su2=Obj.Su2;
	   yexp.setAttribute("id", "FisherEXPP");
	   razv.after(yexp);
		txt+='<b>F<sub>p</sub> = S<sup>2</sup><sub>ад</sub> / S<sub>0</sub><sup>2</sup></b><br/><br/>';
		txt+= '<b>S<sup>2</sup><sub>ад</sub></b> &nbsp&nbsp =&nbsp&nbsp <b>(</b>'+Obj.N + ' / ('+Obj.X + ' - ' +n+ ' - 1) <b>) / (</b>'; 
		for (i=0;i<X;i++){

			txt+= '<b>(</b> ' + Fix(Obj.yteor[i]) + CheckPlus(Obj.ysredn[i]) + '<b> )</b><sup>2</sup>';
			if (i<X-1){
				txt+=' + ';
			}} txt+='<b>)</b> &nbsp&nbsp=&nbsp&nbsp '+Obj.N/(Obj.X-n-1) + ' * <b>(</b>';
			for (i=0;i<X;i++){
			txt+= Fix(Obj.yteor[i]-Obj.ysredn[i]) + '<sup>2</sup>';
			if (i<X-1){
				txt+= ' + ';
			}} 
			txt+= ') &nbsp&nbsp=&nbsp&nbsp <b></b>' + (Obj.N/(Obj.X-n-1)) + ' * ' + Fix(Obj.sumSad2) + '';
			
			txt+=' <b></b> &nbsp=&nbsp <b>' + Fix(Obj.Sad2) +'</b><br/><b>S<sub>0</sub><sup>2</sup></b> &nbsp=&nbsp <b>( </b>';
			
			for(i=0;i<Obj.X;i++){

			txt+= Fix(Su2[i]);
			if (i<Obj.X-1){
				txt+=' + ';
			}	}
		txt+=' <b>)</b>' + ' / ' + Obj.X + ' &nbsp=&nbsp ' + Obj.sumSu2 + ' / ' + Obj.X  + ' &nbsp=&nbsp<b>'+ Fix(Obj.So2) + '</b>';
		txt+='<br/><b>F<sub>p</sub></b> &nbsp=&nbsp ' + Fix(Obj.Sad2) + ' / ' + Fix(Obj.So2) + ' &nbsp=&nbsp <b>' + Obj.fisher+'</b><br/>';

		if(Obj.fisher<Obj.fishertable){
		
		txt+='<br/>F<sub>p</sub> = ' + Obj.fisher + ' <b> < </b> ' + Obj.fishertable + ' <b>(F<sub>p</sub> меньше табличного коэффициента, модель адекватна)</b> ';

		}
		else {

			txt+='<br/>F<sub>p</sub> = ' + Obj.fisher + ' <b> > </b> ' + Obj.fishertable + ' <b>(F<sub>p</sub> больше табличного коэффициента, модель не адекватна)</b> ';

		}
		
		print('FisherEXPP',txt) }
		
		else{

		mys.remove();
	}

}


function Fisher(){
var X = Obj.X; var N = Obj.N;
var mas=[]; var sum=0; var txt = '<br/>';

for (i=0;i<X;i++){
mas[i] = (Obj.yteor[i]- Obj.ysredn[i])**2;
sum+= mas[i];
}

if (Obj.X==4){
	var n = 2;
}
if (Obj.X==8){
	var n = 3;
}
if (Obj.X==16){

var n = 4;
}
if (Obj.X==32){

	var n = 5;
}

var Sad2=(N/(X-n-1))*sum; var So2 = Obj.So2;
Obj.Sad2 = Sad2;
var fisher = Fix(Sad2/So2);
Obj.sumSad2 = sum;
txt+= '<b><br/>Критерий Фишера = </b>' + fisher +'';

Obj.txt += 'Критерий Фишера = ' + Fix(Sad2) + ' / ' +  Fix(So2) + ' = ' + fisher +'\r\n';
Obj.fisher = fisher;
if (fisher>Obj.fishertable){
	
	Obj.fishertrue=true;
	Obj.alerttrue = true;
	Obj.alerttxt+=' <b> > </b> ' 
	+ Obj.fishertable +' <b> (Табличный критерий Фишера)</b>\r\n<b>Дальнейшие исследования не имеют смысла.</b>' ;
txt+='<br/><b>Невозможно построить модель, т.к. расчётный критерий Фишера > табличного критерия Фишера</b>';
}else{

	txt+=' <b> < </b> ' 
	+ Obj.fishertable +' <b> (Табличный критерий Фишера)</b>\r\n';
}
txt+= '<br/><button class = "button2" id= "button14" onclick=FisherEXP()>Развернуть</button>';
if (fisher==Infinity||isNaN(fisher)==true){
	Obj.fishertrue = true;
Obj.alerttxt+='\r\n\r\nОшибка при подсчёте критерия Фишера\r\n';
}else{
print ('fisher', txt);
}
}


function EnterMatrix(){
	 var A = []; var Matrix =[]; var Matrix2=[];
Obj.cohrentrue= false; Obj.fishertrue=false; Obj.studenttrue =false;
if (Obj.N!==''){
	
N = Obj.N;}
if (Obj.X!==''){
X = Obj.X;}
    for (var i = 0; i < X; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
        { A[i][j] = 1*document.getElementById('a'+(i+1)+(j+1)).value; }
     }
	 Obj.A=A; Obj.X=X; Obj.N=N; Obj.txt=''; var proverka = false;
	if (document.getElementById('check').checked==true){
		proverka=true;
	}else{
		proverka=false;
	}

	if (Obj.X==4){
	Matrix=[[1,1,1],[1,-1,1],[1,-1,-1],[1,1,-1]];
	}
	
	if (Obj.X==8){
	Matrix=[[1,1,1,1],[1,-1,1,1],[1,-1,-1,1],[1,1,-1,1],[1,1,1,-1],[1,-1,1,-1],[1,1,-1,-1],[1,-1,-1,-1]];
	}
	
	if (Obj.X==16){
		Matrix=[[1,1,1,1,1],[1,-1,1,1,1],[1,-1,-1,1,1],[1,1,-1,1,1],[1,1,1,-1,1],[1,-1,1,-1,1],[1,1,-1,-1,1],[1,-1,-1,-1,1],[1,1,1,1,-1],[1,-1,1,1,-1],[1,-1,-1,1,-1],[1,1,-1,1,-1],[1,1,1,-1,-1],[1,-1,1,-1,-1],[1,1,-1,-1,-1],[1,-1,-1,-1,-1]];
	}
	if (Obj.X==32){
		Matrix= [[1,1,1,1,1,1],[1,-1,1,1,1,1],[1,-1,-1,1,1,1],[1,1,-1,1,1,1],[1,1,1,-1,1,1],[1,-1,1,-1,1,1],[1,1,-1,-1,1,1],[1,-1,-1,-1,1,1],[1,1,1,1,-1,1],[1,-1,1,1,-1,1],[1,-1,-1,1,-1,1],[1,1,-1,1,-1,1],[1,1,1,-1,-1,1],[1,-1,1,-1,-1,1],[1,1,-1,-1,-1,1],[1,-1,-1,-1,-1,1],
		[1,1,1,1,1,-1],[1,-1,1,1,1,-1],[1,-1,-1,1,1,-1],[1,1,-1,1,1,-1],[1,1,1,-1,1,-1],[1,-1,1,-1,1,-1],[1,1,-1,-1,1,-1],[1,-1,-1,-1,1,-1],[1,1,1,1,-1,-1],[1,-1,1,1,-1,-1],[1,-1,-1,1,-1,-1],[1,1,-1,1,-1,-1],[1,1,1,-1,-1,-1],[1,-1,1,-1,-1,-1],[1,1,-1,-1,-1,-1],[1,-1,-1,-1,-1,-1]];
		}
		if (proverka==true){
			
			Matrix2= stolb(Matrix);
			Obj.Matrix = Matrix2;
		}
		else {
			Obj.Matrix = Matrix;
		}
		
	return A;
}


function Yexp(){
	var mys = document.getElementById('yexp');
	var A = Obj.A;
		var  N= Obj.N;
	var X= Obj.X;
	var Y = Obj.ysredn;
	
	if (!mys){
		var txt= '<br/>'; var q =0; var sum = 0;
		 var razv = document.getElementById('button3');
	 	var yexp = document.createElement('div');
		yexp.setAttribute("id", "yexp");
		razv.after(yexp);
		if (N>1){
		do {
			txt+= '<b>M(Y' + (q+1) +') &nbsp=&nbsp (</b>';
			sum = 0;
			for (i=0;i<N;i++){
			
			txt+=''+ Fix(A[q][i]);
			if (i<(N-1)){
				txt+= ' + ';
			}
			else{
				txt+= '<b>)</b>';
			}
			sum+= A[q][i];
			}
			txt+= ' / ' + N + '  &nbsp=&nbsp ' + Fix(sum/N);
			txt+='<br/>';
			q++;
		} while (q<X);}
		else {
			q=0;
			do{
				txt+= '<b>M(Y' + (q+1) +') &nbsp=&nbsp </b>';
			txt+= Fix(A[q][0]) + ' / 1  &nbsp=&nbsp ' + Fix(A[q][0]);
			txt+= '<br/>';
			q++;
			
			}while (q<X);
		}
		print('yexp',txt);
	} else {mys.remove();
		}
	
	
}


function ySredn(){
	
	var Y =[]; var i =0; var temp =0; var A=Obj.A; var res='<br/><b>Ваши средние значения Y:</b><br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Y</b><br/>';
	
	Obj.txt+='\r\n\r\nВаши средние значения Y:\r\n\r\n';
	
	
	
	do{
	for (j=0;j<Obj.N;j++){
	temp+=A[i][j];
	 
	
	}
	
	Y[i]=Fix(temp/(Obj.N)) ;
	
	temp=0;
	i++;} while (i<X);
		
		
		for (i = 0; i < Obj.X; i++)
     {  
 
 if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 } 
	 
	
         res += '<input style="width: 48px;" type="text" disabled id="c'+(i+1)+'"/>'; 
		 if (i<(Obj.X-1)){
		 res += '<br/>';}
     }
	 res+= " &nbsp&nbsp&nbsp " + '<br/><button class = "button2" id= "button3" onclick=Yexp()>Развернуть</button>';
	//print('ysredn', res);
	/* for (var i = 0; i < Obj.X; i++)
     { 
	
	document.getElementById('c'+(i+1)).value = Y[i];
	 }*/
	Obj.ysredn = Y;
	
	for (i=0;i<Y.length;i++){
		Obj.txt+=(i+1) + ' \r ' + Y[i];
		if (i<Y.length-1){
			Obj.txt+= ' \r ';
		}	
		Obj.txt+= '\r\n';
	}
	console.log(Obj.ysredn);
	return Y;
	
	}
		

//Проверка на ввод кол-ва опытов
function checkFirst(){
	var div = document.getElementById('scroll');
	var First = document.getElementById("s2").value;
	
		if (First ==""){
			if (div){
			div.remove();}
			setTimeout("alert('Введите количество опытов!')", 1);
			
			return false;
		}
		else{
			return true;
		}
		
}

function checkSecond(){
	var div = document.getElementById('scroll');
	var First = document.getElementById("znak").value*1;
	
		if (Number.isInteger(First)!=true||isNaN(First)==true||First>100||First<1){
			if (div){
			div.remove();}
			if (First>100){
				alert('Кол-во знаков после запятой не может быть более 100!');
			}
			if (Number.isInteger(First)!=true||isNaN(First)) {

				alert('Введите корректное число!');
			}
			if (First<1){
				alert('Кол-во знаков после запятой не может быть менее одного!')
			}
		
		
			return false;
		}
		else{
			console.log(Obj.znak);
			Obj.znak=First;
			return true;
		}
		
}

function transpose(A)       //На входе двумерный массив
{
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++)
     { AT[ i ] = [];
       for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
     }
    return AT;
}

 function print (obj, txt) {	 document.getElementById(obj).innerHTML = txt; }


function createMatrix(obj1)
{   

if (Obj.checked == false){
var first = checkFirst();
var second = checkSecond();
if (first==true&&second==true){

var res = '';
	var N = getSize();
	
	var X= getSize2();
	Obj.X = X; Obj.N = N;
	
	if(Obj.X!=''&&Obj.N!=0){
	Podpisi(); }
	
    for (var i = 0; i < X; i++)
     {  if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
	 
 for (var j = 0; j < N; j++)
		
        { res += '<input style="width: 58px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br/>';
     }
	 if(Obj.X!=''&&Obj.N!=0){
	print (obj1, res);
	 print ("button", '<button onclick="Main()">ОК</button>');}

}}

else{
	var second = checkSecond();
	if (second==true){
	Obj.checked = false;
	obj1.innerHTML = '';
	var N = Obj.N;
	
	var X= Obj.X;
	var res = '';
if(Obj.X!=''&&Obj.N!=0){
Podpisi();}
    for (var i = 0; i < X; i++)
     { 
 
 if(i<9){res += '<b>' + (i+1) + '&nbsp</b>&nbsp';} else {
		res+='<b>'+(i+1)+' </b>';
	 }
	 
 for (var j = 0; j < N; j++)
        { res += '<input style="width: 58px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	 if(Obj.X!=''&&Obj.N!=0){
	 print (obj1, res); 
	 print ("button", '<button onclick="Main()">ОК</button>'); }
	 for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        {
	document.getElementById('a'+(i+1)+(j+1)).value = Obj.A[i][j];
	} 		
	 }
	 
}
}

}


function getSize(){
		size2 = document.getElementById('s2'),
    X = size2.value*1;
	return X;
}

function getSize2(){
		size2 = document.getElementById('s1'),
    X = 2**(size2.value*1);
	return X;
}

if ( ! (window.File && window.FileReader && window.FileList && window.Blob)) {
	alert('The File APIs are not fully supported in this browser.');
  }
  
  function handleFileSelect(evt) {
	  
	  Obj.checked = true;
	  
	  //var deleted = document.getElementById('matrix1'); deleted.remove();
	  var file = evt.target.files[0];
	  if (!file.type.match('text.*')) {
		  
			  return alert(file.name + " is not a valid text file.");
	  }
	  
	  var reader = new FileReader();
	  reader.readAsText(file);
	  reader.onload = function (e) {
	  
		 var textToArray = reader.result.split("\n").map(function(x){return x.split(",")});
		 X = textToArray.length;
  N = textToArray[0].length
		if ((N>=2)&&(N<7)&&((X==4)||(X==8)||(X==16)||(X==32))){
		 Obj.A= textToArray;
		  Obj.N = textToArray[0].length;	  
		  Obj.X = textToArray.length; }
		 
			  
  if ((N<2)||(N>6)||((X!=4)&&(X!=8)&&(X!=16)&&(X!=32)))
  {
  
	  document.getElementById('podpis').innerHTML='';
	  document.getElementById('matrix1').innerHTML='';
	  document.getElementById('button').innerHTML='';
	  if (document.getElementById('scroll')){
	  document.getElementById('scroll').remove();}
	  setTimeout("alert('Введите правильный файл!')", 1);
	  Obj.checked = false;
		  
  }
  else{
	  
	  
  createMatrix('matrix1');}
  
	   }
	   document.getElementById("file").value = ""; 
   }
  
  window.onload = function () {
	  
   document.getElementById('file').addEventListener('change', handleFileSelect, false); 
  }
  
   var inputs = document.querySelectorAll('.inputfile');
  Array.prototype.forEach.call(inputs, function(input){
	  
	  Obj.checked = true;
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;
	input.addEventListener('change', function(e){
	  var fileName = '';
	  if( this.files && this.files.length > 1 ){
		fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
	  
	  
	  }
	  else
		fileName = e.target.value.split( '\\' ).pop();
		  if( fileName )
		label.querySelector( 'span' ).innerHTML = fileName;
	  else
		label.innerHTML = labelVal;
	  });
  });
  function Fix(num){
	const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
	var A = Obj.znak;
	if (A==''){
		return num.toFixed(3)*1;
	}
	return num.toFixed(A)*1;

	}