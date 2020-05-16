 var Obj = {
	A: '', N:'', X:'', mx: '', my: '', dispX: '', dispY: '', corr: '', cov:'', coeffs: '', lastdisp: '', det: '', equation: '', ctx:'', parn: '', checked: false, txt: '',
	alerttxt:'Хотите ли вы продолжить?\r\nСписок ошибок:\r\n', alerttrue:false, Su2:'', corrtable:'', corrcheck:'', fishertable:'', firsttrue:false
	 
	 
 };

 function Fix(num){
	const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
	if (f(num)<5){
	return num.toFixed(f(num));}
	else{
	  return num.toFixed(5);
  
	}
	}

 //Вывод значений в какой-то блок
 function print (obj, txt){
	 
	 document.getElementById(obj).innerHTML = txt;
	 
 }
 
 function checktheentermnozh(X){
	if(Obj.firsttrue==false){
	if (X<3&&X!=0){
	var sd = confirm('Вы ввели кол-во опытов менее трёх.\r\nЭто может негативно сказаться на результатах вычислений, и некорректно отобразить данные!\r\nЖелаете ли вы продолжить, или хотите заново ввести данные?\r\nЕсли вы хотите продолжить - то нажмите клавишу "Да"'); 
	

return sd;
 }
else{return true;}
}}

function checktheenterparn(X){
	if(Obj.firsttrue==false){
		if (X==1){
	var sd = confirm('Вы ввели всего один опыт.\r\nЭто может негативно сказаться на результатах вычислений, и некорректно отобразить данные!\r\nЖелаете ли вы продолжить, или хотите заново ввести данные?\r\nЕсли вы хотите продолжить - то нажмите клавишу "Да"'); 
	

return sd;
 }
else{return true;}
}}

 function create() {
	 if (document.getElementById('DET')){
	 text = Obj.txt;
	 if(Obj.N==2){
		
	 name = 'Парная регрессия.txt';}
	 else{
		name = 'Множественная регрессия.txt'; 
	 }
		 
		type = 'text/plain';
	 
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
	 a.download = name;}
	 else {
		 alert('Нету данных, введите сначала данные, чтобы вывести их в файл');
	 }
}

function checkingalert() {
	if (Obj.alerttxt!='Хотите ли вы продолжить?\r\nСписок ошибок:\r\n'){
	var sd = confirm(Obj.alerttxt); 
	
	
return sd;}
else {return true;}
}

//Подписи переменных
function Podpisi(){
	
	N= Obj.N; X= Obj.X;
	red = "<b>Введите данные</b>" + "<br/>" + "&nbsp&nbsp&nbsp";
	for (i=0;i<N-1;i++){
	red += "<b>X" + (i+1) + "</b> &nbsp&nbsp&nbsp&nbsp&nbsp ";
	}
	red += "<b>Y</b>";
	print('podpis', red);
	
}

//Вычисление кол-ва элементов
function getSize(){
	size = document.getElementById('s1'),
    N = (size.value*1)+1; return N;
}

//Вычисление кол-ва опытов
function getSize2(){
		size2 = document.getElementById('s2'),
    X = size2.value*1;
	return X;
}

function podskazka_parn(){
	var txt= '     При вводе данных из файла, ваш файл должен быть в формате .txt, и иметь ровно 2 столбца.\r\n\r\n     Каждый новый элемент строки в матрице - ';
	txt+='разделяется запятой, а добавление новой строки - переходом на следующую строку.\r\n\r\n';
	txt+='     В случае, если вы введёте более или менее двух столбцов, и неподходящее кол-во строк,';
	txt+='программа выдаст ошибку и все исследования, которые вы делали до этого будут удалены.';
	alert(txt);
	}
	function podskazka_mnozh(){
		var txt= '     При вводе данных из файла, ваш файл должен быть в формате .txt, и иметь от 2 до 7 столбцов.\r\n\r\n     Каждый новый элемент строки в матрице - ';
		txt+='разделяется запятой, а добавление новой строки - переходом на следующую строку.\r\n\r\n     В случае, если вы введёте менее двух, или более семи столбцов,';
		txt+='программа выдаст ошибку и удалит все исследования, которые вы делали до этого будут удалены.';
		alert(txt);
		}

//Ввод матрицы в переменную
function EnterMatrix(){
	 var A = [];
	 Obj.alerttrue = true;
	 Obj.alerttxt = 'Хотите ли вы продолжить?\r\nСписок ошибок:\r\n';
if (Obj.N!==''){
	
N = Obj.N;}
if (Obj.X!==''){
X = Obj.X;}
    for (var i = 0; i < X; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
        { A[i][j] = 1*document.getElementById('a'+(i+1)+(j+1)).value; }
     }
	 Obj.A=A; Obj.X=X; Obj.N=N; Obj.txt='';
	
	return A;
}

//Проверка на ввод кол-ва опытов
function checkFirst(){
	Obj.firsttrue=false;
	var div = document.getElementById('scroll');
	var First = document.getElementById("s2").value; 
	const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
	console.log(First);
	if (f(First)>0||First<1||First>100||First ==""||isNaN(First)==true){
		if (div){
		div.remove();} 
		if(First==''){ alert('Введите количество опытов!'); }else{
				alert('Введите корректное количество опытов!');}
		Obj.firsttrue= true;
		return false;
	}
		else{
			Obj.firsttrue=false;
			return true;
		}
		
}

//Проверка на минус, чтобы выводилось хорошо
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

function CheckPlus(num){
	var txt = '';
	if(num<0){
		txt = ' + ' + (-1)*num; 
	}
	else{
	txt = ' - ' +num;
	}
	
	return txt;
}

//Вывод множественной регрессионной модели
function LastEquation(coeffs){
	var N = Obj.N; var check = false;
	
	for (i=0;i<coeffs[0].length;i++){

	if (isNaN(coeffs[0][i])===true){  
	check=true;
	}
	}
	if (check==false){
	if(N==2)
	{
	print ('EQ1', '<br/><b>Парная регрессионная модель:</b> <br/>Y = ' + coeffs[0][1]+ '*X1 '+ CheckMinus(coeffs[0][0]) + '<br/> </div>');
	Obj.txt+= '\r\n\r\nПарная регрессионная модель:\r\n Y = ' + coeffs[0][1]+'*X1'+ CheckMinus(coeffs[0][0])+'\r\n';
	}
		if (N==3){
		
		print('EXP2', '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +coeffs[0][1]+ '*X1 ' +CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][0]));	
		Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +coeffs[0][1]+ '*X1 ' + CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][0]);
		}
if (N==4){
	print ('EXP2', '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +coeffs[0][1]+ '*X1 ' +CheckMinus(coeffs[0][2])+'*X2'+CheckMinus(coeffs[0][3])+'*X3' + CheckMinus(coeffs[0][0]));
	Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +coeffs[0][1]+ '*X1 ' + CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][3]) + '*X3' + CheckMinus(coeffs[0][0]);
}
	if (N==5){
	print ('EXP2', '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +coeffs[0][1]+ '*X1 ' +CheckMinus(coeffs[0][2])+'*X2'
	+CheckMinus(coeffs[0][3])+'*X3' +CheckMinus(coeffs[0][4])+'*X4' + CheckMinus(coeffs[0][0]) );
	
	Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +coeffs[0][1]+ '*X1 ' + CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][3]) + '*X3' +CheckMinus(coeffs[0][4])+ '*X4' + CheckMinus(coeffs[0][0]);
	
}	
		if (N==6){
	print ('EXP2', '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' + coeffs[0][1]+ '*X1 ' +CheckMinus(coeffs[0][2])+'*X2'
	+CheckMinus(coeffs[0][3])+'*X3' +CheckMinus(coeffs[0][4])+'*X4' +CheckMinus(coeffs[0][5])+'*X5' + CheckMinus(coeffs[0][0]));
	Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +coeffs[0][1]+ '*X1 ' + CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][3]) + '*X3' 
	+CheckMinus(coeffs[0][4])+ '*X4' +CheckMinus(coeffs[0][5]) + '*X5' + CheckMinus(coeffs[0][0]);
}	
		if (N==7){
	print ('EXP2', '<br/><b>Множественная регрессионная модель:</b><br/><b>Y</b>= ' +coeffs[0][1]+ '*X1 ' +CheckMinus(coeffs[0][2])+'*X2'
	+CheckMinus(coeffs[0][3])+'*X3' +CheckMinus(coeffs[0][4])+'*X4' +CheckMinus(coeffs[0][5])+'*X5' +CheckMinus(coeffs[0][6])+'*X6' + CheckMinus(coeffs[0][0]));
	
	Obj.txt+= '\r\n\r\nМножественная регрессионная модель:\r\nY = ' +coeffs[0][1]+ '*X1 ' + CheckMinus(coeffs[0][2])+ '*X2'+ CheckMinus(coeffs[0][3]) + '*X3' 
	+CheckMinus(coeffs[0][4])+ '*X4' +CheckMinus(coeffs[0][5]) + '*X5' +CheckMinus(coeffs[0][6]) + '*X6' + CheckMinus(coeffs[0][0]);
}	
}
else
{print('EXP2','');
print('EQ1','');
}

}

function createMatrix(obj1)
{   
	
if (Obj.checked == false){
var first = checkFirst();

//if (Obj.parn==0){
var check2= checktheentermnozh(getSize2()); 

/*
if (Obj.parn==1){
	console.log('Это вообще работает!!!')
	var check2= checktheenterparn(getSize2()); }*/


if (first==true&&check2==true){
	var N = getSize();
	var X= getSize2();
	Obj.X = X; Obj.N = N;


var res = '';

	Podpisi();
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	print (obj1, res);
    print ("button", '<button onclick="Main()">ОК</button>');
	

}}
else{

	var check2= checktheentermnozh(Obj.X);

	if (check2==true){
	Obj.checked = false;
	obj1.innerHTML = '';
	var N = Obj.N;
	
	var X= Obj.X;

	var res = '';
	Podpisi();
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	 
	print (obj1, res);
    print ("button", '<button onclick="Main()">ОК</button>');
	 for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        {
	document.getElementById('a'+(i+1)+(j+1)).value = parseFloat(Obj.A[i][j]);
	} 	
	 }}
	
}


}
	
	

function createMatrix2(obj1)
{   
Obj.N= 2;
var N=2;

if (Obj.checked == false){
	var check2= checktheenterparn(getSize2()); 
var first = checkFirst();

if (first==true&&check2==true){

var res = '';	
	var X= getSize2();
	Obj.X = X; 
	Podpisi();
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	print (obj1, res);
    print ("button", '<button onclick="Main()">ОК</button>');

}
}
else{
	var check2= checktheenterparn(Obj.X);
	if(check2==true){
	Obj.checked = false;
	obj1.innerHTML = '';
	
	var X= Obj.X;
	var res = '';
	Podpisi();
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	 
	print (obj1, res);
    print ("button", '<button onclick="Main()">ОК</button>');
	 for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        {
	document.getElementById('a'+(i+1)+(j+1)).value = parseFloat(Obj.A[i][j]);
	} 		
	 }
	 
}}}


 //Вычисление обратной матрицы
 function inverseMatrix(matrix) 
  {  
    var a = matrix;  var count = Obj.N;
    var e = Matrix(Obj.N,Obj.N);  
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
 
 //Проверка ввода данных
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
 
 //Функция умножения матриц
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
 
 
 
 //Вывод среднего значения Y
 function MYexp(){
		
		var mys = document.getElementById('MY2');
		
		
		var A = Obj.A;
		var  N= Obj.N;
	var X= Obj.X;
	 if (!mys){
		 

	 var razv = document.getElementById('button3');
	 	var my2 = document.createElement('div');
		my2.setAttribute("id", "MY2");
		razv.after(my2);
	var i=0; var sum =0; var txt= ''; var txt2='('; var ii = (N-1);
		
		for (var i=0;i<X;i++){
		
			sum+=A[i][ii];
		txt2+= A[i][ii]; 
		if (i<(X-1)){txt2+=' + ' ;} 
		
		}
	txt2+=') / ' + X+ ' &nbsp;&nbsp;=&nbsp;&nbsp; <b>' + Fix(sum/X)+'</b>';
		
	txt+= "<br/><b>M(Y) &nbsp;&nbsp;=&nbsp;&nbsp; </b>" + txt2;
	
		txt2='('; sum = 0; 
my2.innerHTML=txt; }
 else {mys.remove();
		}	}
 
 //Среднее значение Y
 function MY(A){
 txt2 = "";
	    //M(y)
		var my = 0;
    for(var i=0;i<X;i++)
    {
        my += A[i][N-1];
    }
    my = my/X;
txt2 += "<b>M(Y)</b> = " + Fix(my);
Obj.txt += '\r\n\r\nM(Y) = ' + Fix(my);
txt2+=  '<br/><button class = "button2" id= "button3" onclick=MYexp()>Развернуть</button>'+ "<br/>";
print ('MY', txt2);
Obj.my = my;
return my;
 }
 
 //Для кнопки
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
 
 
 //Вывод среднего значения Х[i]
	function MXexp(){
		
		var est = document.getElementById('MX2');
		var A = EnterMatrix();
		var  N= Obj.N;
	var X= Obj.X;
	 if (!est){
	 var razv = document.getElementById('button2');
	 	var mx2 = document.createElement('div');
		mx2.setAttribute("id", "MX2");
		razv.after(mx2);
	var i=0; var sum =0; var txt= ''; var txt2='(';
	do{
		for (var j=0;j<X;j++){
			
			sum+=A[j][i];
		txt2+= Fix(A[j][i]); if(j<(X-1)){
		txt2+=' + ' ; }}
	txt2+=') / ' + X+ '&nbsp;&nbsp; = &nbsp;&nbsp;(' + Fix(sum) + ' / ' + X +')&nbsp;&nbsp; = &nbsp;&nbsp;'  + '<b>'+Fix(sum/X)+'</b>';
	
	
	txt+= "<br/><b>M(X" + (i+1) + ")</b> = " + txt2;
	
	
	
		txt2='('; sum = 0; i++;
		}
		while (i<(N-1)) 
mx2.innerHTML=txt;}
 else {est.innerHTML = ""; est.remove();
		}}
 
 //Среднее значение от Х[i]
 function MX(A){
var N=Obj.N; var X= Obj.X; var txt123='';
	 	var mx = A.reduce(function(r, e, i) {
  e.forEach((a, j) => r[j] = (r[j] || 0) + a)
  if (i == A.length - 1) r = r.map(el => el / A.length);
  return r;
}, [])
	
	if (!document.getElementById('s1')){
		var txt= "<center><b>Лабораторная работа по теме" + "<br/>Парная регрессия:" + "</b></center><br/><br/>";
	Obj.txt+='Лабораторная работа №1\r\nПарная регрессия:\r\n';
	}
	else {
	var txt= "<center><b>Лабораторная работа по теме" + "<br/>Множественная регресия:" + "</b></center><br/><br/>";	
	Obj.txt+='Выполнение лабораторной работы №1\r\nМножественная регрессия:\r\n';
	}
	for (var i=0;i<N-1;i++){
	txt+= "<br/><b>M(X" + (i+1) + ")</b> = " + Fix(mx[i]);
	txt123+= '\r\nM(X'+(i+1) +') = ' +Fix(mx[i]);
	}
	
	Obj.txt+= txt123;
	txt+= '<br/><button class = "button2" id= "button2" onclick=MXexp()>Развернуть</button>'+ "<br/>";
	print ('MX', txt + '<br/>');
	Obj.mx= mx;
	
	return mx;
	 
 }
 
//Вывод корреляции
 function CorrEXP(){
	 
	 var razv2 = document.getElementById('CORR2'); 
		var A = Obj.A; var  N= Obj.N; var X= Obj.X; 
		if (!razv2){ 
		var q =0; var txt='<br/>';
		
		var gl = document.getElementById('button7');
				var corr2 = document.createElement('div');
		corr2.setAttribute('id', 'CORR2');
		gl.after(corr2); var dispX=[];
	 
    var my = Obj.my;
var mx = Obj.mx;
var expX= expressionX(A,mx);

var expY = expressionY(A,my)
var temp1=0; var temp2=0; var temp3=[];var temp4=[];
do{
	
//Код
txt+="<b>Correllation (X" + (q+1)+ ')&nbsp; = &nbsp;</b>';

		var cov =Obj.cov; cov2=[]; var supertemp=[];

    for(var j=0;j<N-1;j++)
		
        {
			
            for(var i=0;i<X;i++)
            {
        
				cov2[j] = Math.sqrt(expX[j]*expY);
		}}

		txt += '<b>[</b>';
		for (i=0;i<X;i++){
		txt += ' <b>(</b> (' + Fix(A[i][q]) + CheckPlus(Fix(mx[q])) +') * '+ '('+ Fix(A[i][N-1]) + CheckPlus(Fix(my))+ ' ) <b>)</b>'; 
		if (i<(X-1)){
			txt+= ' + '; 
		}} txt += '<b> ]</b> / ';
		txt+='<b>[</b> [ ';
		
		for (i=0;i<X;i++){
		txt += '( ' + Fix(A[i][q]) + ' - ' + Fix(mx[q]); 
		if (i<(X-1)){
			txt+= ')<sup>2</sup> + '; }
			
		else{txt += ')<sup>2</sup>]<b> * </b>['; }} 
		
		for (i=0;i<X;i++){
			txt += '( ' + Fix(A[i][N-1]) + ' - ' + Fix(my); 
			if (i<(X-1)){
			txt+= ')<sup>2</sup> + '; }
			else{txt += ')<sup>2</sup>]'; }}
		txt+= ' <b>] <sup>&frac12</sup></b> &nbsp;&nbsp; = &nbsp;&nbsp;<b>[</b>';
		
	
	temp1=0; temp2=0; 
		for (i=0;i<X;i++){
			temp1=(A[i][q]-mx[q]);
			temp2= (A[i][N-1] - my); temp1=Fix(temp1); temp2=Fix(temp2);
		txt += ' <b>(</b>' + temp1 + ' * ' + temp2 + '<b>)</b>' ; if (i<(X-1)){
			txt+= ' + ';
		}else {txt+='<b> ] / [(</b>';}}
		
		for (i=0;i<X;i++){
		txt += ' ' + Fix(A[i][q]- mx[q]); 
		if (i<(X-1)){
			txt+= '<sup>2</sup> + '; }
			
		else{txt += ')<sup>2</sup><b> * </b>('; }} 
		
		for (i=0;i<X;i++){
		txt += ' ' + Fix(A[i][N-1] - my); 
		if (i<(X-1)){
			txt+= '<sup>2</sup> + '; }
			
		else{txt += '<sup>2</sup>)<b>]<sup>&frac12</sup> </b>'; }} 
		
		
	
		
		
		temp1=[]; temp2=[]; txt+=' &nbsp;&nbsp;=&nbsp;&nbsp; <b>(</b>';
			for (i=0;i<X;i++){
			temp1[q]=(A[i][q]-mx[q]);
		temp2[q]= (A[i][N-1] - my); temp1[q]=Fix(temp1[q]); temp2[q]=Fix(temp2[q]); 
		if (i==0){			
		txt += ' ' + Fix(temp1[q] * temp2[q]) + ' ' ; }

		else {
			txt += ' ' + CheckMinus(Fix(temp1[q] * temp2[q])) + ' ' ; }
		} 
		txt+= '<b>)</b>' + ' / <b>[ </b>(' ;
	for (i=0;i<X;i++){
		txt +=  Fix(Math.pow(A[i][q]- mx[q],2)); 
		if (i<(X-1)){
			txt+= ' + '; }
	else{txt += '<b>) * </b>('; }}
	
		for (i=0;i<X;i++){
		txt += '' + Fix(Math.pow(A[i][N-1]- my,2)); 
		if (i<(X-1)){
			txt+= ' + '; }
	else{txt += ') '; }}
	
	
  txt+= ' <b>]<sup>&frac12</sup></b>';

	txt+=' &nbsp;&nbsp;=&nbsp;&nbsp; <b>(</b>'+ Fix(cov[q])+' / ';
	txt+= ' ('+Fix(expX[q]) + ' * ' + Fix(expY) + ')<b><sup>&frac12</sup>)</b>'
	

	txt+=' &nbsp;&nbsp;=&nbsp;&nbsp; <b>('+ Fix(cov[q])+' / ' +Fix(cov2[q]) + '</b>) &nbsp;=&nbsp; <b>' + Fix(cov[q]/cov2[q]) +'</b>';
		
	txt+='<br/><br/>';
	
	q++;
	
}while (q<(N-1))
	
corr2.innerHTML= txt;

		}	else{
		razv2.remove();
	}

	 
 }
  
//Корреляция
 function correllation(A,mx,my,expY,expX){
print ('CORR','');
	var corrX=[]; var corrtrue= true;
	 /*	var my = 0;
    for(var i=0;i<X;i++)
    {
        my += A[i][N-1];
    }
    my = my/X;
	*/
	for(var j=0;j<N-1;j++)
	{
		corrX[j]=0;
		for(var i=0;i<X;i++)
		{
			corrX[j] += (A[i][j]-mx[j]) * (A[i][N-1]-my)/Math.sqrt(expX[j]*expY);
		}}
		Obj.corr= corrX;

		var q = 0;
		do{
		if(isNaN(corrX[q])===true){
			if (q==0){
				Obj.alerttxt+='\r\n';
			}
			Obj.alerttxt+= '\r\nНевозможно посчитать коэффициент корреляции (Х'+(q+1)+')\r\nОбычно это происходит, если взят всего один опыт, или вся строка состоит из одинаковых чисел.';
			Obj.alerttrue=true;
			corrtrue=false;
			
		}
		q++;}
		while(q<corrX.length);

if (corrtrue==true){

		Obj.txt+='\r\n\r\n';
	 	 var txt4= "<br/>";
	   
		for(j=0;j<corrX.length;j++){
			if(isNaN(corrX[j])==false){
				
			txt4+="<b>Correlation(X" + (j+1) +")</b> = " + Fix(corrX[j]);
			Obj.txt+='Correllation(X' +(j+1)+ ') = ' + Fix(corrX[j]);}
			if (j<(N-2)){
			txt4+= "<br/>";
			Obj.txt+='\r\n';}
		}
			
						
			txt4+='<br/><button class = "button2" id= "button7" onclick=CorrEXP()>Развернуть</button>'
			print ('CORR',txt4);}
        
		return corrX;
	 
 }
 
//Для Корреляции
 function expressionY(A,my){
	 
	 	var expY=0;
    for(var i=0;i<X;i++)
    {
        expY += Math.pow(A[i][N-1] - my,2);
    }
	//print ('EXPY', "<br/><b>Exp(Y)</b> = " + expY.toFixed(2));
	return expY;
 }
 
 //Дисперсия Х
 function DispEXP(){
	 var razv2 = document.getElementById('DISP2'); 

		var A = Obj.A; var  N= Obj.N; var X= Obj.X;  
				if (!razv2){ 
			 	var mx = Obj.mx;
		var txt='<br/>'; var q =0; 		var gl = document.getElementById('button4');
				var dispr2 = document.createElement('div');
		dispr2.setAttribute('id', 'DISP2');
		gl.after(dispr2); var dispX=[];
		do{
			dispX[q]=0;
			txt+= '<b>Disp (X'+(q+1)+') &nbsp;=&nbsp; </b>' ;  
			
				for (i=0;i<X;i++){
				txt+= ' ( ('+Fix(A[i][q])+' ';
				if (q<(N-1)){
				txt+=' - ';} txt+= Fix(mx[q])+ ')<sup>2</sup> / ( '+ X +' - ' + 1 +') )'; if (i<(X-1)){
				txt+=' + ';	
				}}
				txt+= ' &nbsp;&nbsp; = &nbsp;&nbsp; ';
		for (i=0;i<X;i++){
				
		txt+='('+Fix(A[i][q]-mx[q])+ '<sup>2</sup> / ' + (X-1)+')';
		if (i<(X-1)){
		txt+= ' + ';
		}}
		txt+= ' <b> &nbsp;&nbsp;=&nbsp;&nbsp; </b> ';
		for (i=0;i<X;i++){
		txt += '('+ Fix(Math.pow(A[i][q]-mx[q],2))+ ' / ' + (X-1)+ ')';

		if (i<(X-1)){
		txt+= ' + ';
		}
		} 
		txt+= ' <b> &nbsp;&nbsp;=&nbsp;&nbsp; </b>' ;
		for (i=0;i<X;i++){
		txt += Fix((Math.pow(A[i][q]-mx[q],2))/(X-1));

		if (i<(X-1)){
		txt+= ' + ';
		}
		} 
		
		
		for(var i=0;i<X;i++)
            {
                dispX[q] += Fix(Math.pow(A[i][q]-mx[q],2));
				
			}
			dispX[q]= dispX[q]/(X-1);
			txt += ' = <b>' + Fix(dispX[q])+ '</b><br/>'; q++;		
			  } while (q<(N-1))
	dispr2.innerHTML= txt; }
else
{ razv2.remove(); }	
 }

//Дисперсия Х
 function Dispersion(A,mx){
	 var disptrue=true;
	 var dispX=[]; 
	 var j=0;
	 do{
	 dispX[j]=0;
	 for(let i=0;i<X;i++)
	 {
		 dispX[j] += Math.pow(A[i][j]-mx[j],2);
	 }
	 dispX[j] = dispX[j]/(X-1);
	 
	 if (isNaN(dispX[j])===true)
	 {
	 Obj.alerttrue = true;
	 Obj.alerttxt+= '\r\nОшибка при подсчёте дисперсии (Х'+(j+1)+') = NaN';
	 disptrue=false;
	 }j++;}while(j<(N-1));
	 
	 if(disptrue==true){

	 var j=0; var txt1=""; Obj.txt+='\r\n\r\n';
	  do 
        {
		
			
			txt1 += "<b>Disp (X" + (j+1) + ")</b> = " + Fix(dispX[j]); 
			Obj.txt+= 'Disp (X' + (j+1)+') = ' + Fix(dispX[j]);
			j++;	
       if(j==(N-1)){txt1+="<br/>" + '<button class = "button2" id= "button4" onclick=DispEXP()>Развернуть</button>'+ "<br/>"; } 
		 else {(txt1+="<br/>"); Obj.txt+= '\r\n' }
	
        }while (j<(N-1));
Obj.txt+='\r\n';
	print ('DISP', '<br/>'+ txt1); 	}
Obj.dispX=dispX;	
		return dispX;
	 
 }
 
 function DeterminationEXP(){
	 
	 var razv3 = document.getElementById('DET2'); 
	 var lastdisp= Obj.lastdisp; var dispY = Obj.dispY; var txt='';
	 if(!razv3){
		  var gl = document.getElementById('button10');
				var deter = document.createElement('div');
		deter.setAttribute('id', 'DET2'); 
		gl.after(deter); 
		txt+='<br/><b> Коээфициент детерминации &nbsp;&nbsp; = &nbsp;&nbsp;</b> 1 - <b>(</b>'+ Fix(lastdisp) +'/'+ Fix(dispY) +'<b>) &nbsp;&nbsp; = &nbsp;&nbsp;'+ Obj.det +'</b><br/>';
		deter.innerHTML = txt; 
	 } else {
	 razv3.remove();
	 }
 }
  
 // Детерминация
  function Determination(lastdispY, DispersionY){
	 
	 determ = 1- (lastdispY/DispersionY);
	 determ = Fix(determ);
	 
	 		
	Obj.det=determ;
	if (isNaN(determ)===true){
		Obj.alerttrue = true;
		
		Obj.alerttxt += '\r\n\r\nНевозможно вычислить коэффициент детерминации, т.к. ошибка при подсчёте определителя обратной матрицы коэффициентов, вследствии чего невозможно посчитать остаточную дисперсию\r\nОбычно это происходит, если строки одинаковы, все элементы в строке одинаковы, или кол-во опытов меньше трёх, или дисперсия от Y = 0.';
		print ('DET','');
	}else{
		Obj.txt+='\r\nКоэффициент детерминации = ' +determ +'\r\n';
		print ('DET', '<br/><b>Коэффициент детерминации &nbsp;=&nbsp; </b>'+ determ +  '<br/><button class = "button2" id= "button10" onclick=DeterminationEXP()>Развернуть</button><br/>');
	}
	return determ;
	 
 }
 
  function lastDispEXP(){
	  
	  var razv = document.getElementById('LASTDISP2'); 
		var A = Obj.A; var  N= Obj.N; var X= Obj.X;  var coeffs = Obj.coeffs; var equation = Obj.equation;
	  if (!razv){
	 txt= '<br/>';
  var gl = document.getElementById('button9');
				var lastdisp2 = document.createElement('div');
		lastdisp2.setAttribute('id', 'LASTDISP2'); var q=0;
		gl.after(lastdisp2); 
		
		
			var w=0;
			do{
				
				txt+= '<b>Y<sub>' + (w+1) + 'T</sub> = </b>';
				
					
				for (j=0;j<(N-1);j++){
				
				txt+= '('+A[w][j] + ' * ' + coeffs[0][(j+1)] + ')';
				if (j<(N-2))
				{
				txt+= ' + ';	
				}
				
				}
					txt+= CheckMinus(coeffs[0][0]) +' = ' + Fix(equation[w]);
 				txt+='<br/>';
			w++;
			}while(w<X)
		
		txt+='<br/><b> Остаточная дисперсия =&nbsp; (</b>';

			do{
		txt+= '('+ Fix(A[q][N-1]) + CheckPlus(Fix(equation[q])) + ')<sup>2</sup>';
			if (q<(X-1)){
txt+= ' + ';
			}	
		
			q++;
		} while (q<X)
					
		txt+='<b>)</b> / ('+X + ' - 1) &nbsp;&nbsp;=&nbsp;&nbsp; (';
		q=0;
		
		do{
		txt+='' +Fix(A[q][N-1]-equation[q])+ '<sup>2</sup>'
		if (q<(X-1)){
txt+= ' + ';	}	
			q++;
		} while (q<X);
		txt+= ') / ' +(X-1) +' &nbsp;&nbsp;=&nbsp;&nbsp; ';
				q=0;
				do{
		txt+=Fix(Math.pow(A[q][N-1]-equation[q],2));
		if (q<(X-1)){
txt+= ' + ';	}	
			q++;
		} while (q<X);
		
		txt+= ' / ' + (X-1) + ' &nbsp;&nbsp;=&nbsp;&nbsp; <b>' + Fix(Obj.lastdisp) + '</b>';
		lastdisp2.innerHTML = txt;
		} else {razv.remove();}
  }
	  
	  
 //Остаточная дисперсия
 function lastDisp(A,coeffs){
	 var  N= Obj.N; var X= Obj.X; 	 
	 	var eq=0; var equation=[]; 
	for (q=0;q<X;q++){
				equation[q]=0; 
			for (w=0;w<(N-1);w++){
				
			equation[q] += parseFloat(coeffs[0][w+1])*A[q][w];}
		  equation[q] = equation[q]+parseFloat(coeffs[0][0]);
			}
 for (i=0;i<X;i++){
	
			 eq += Math.pow(A[i][N-1] - equation[i],2)
	 }
	 eq = eq / (N-1);
	
	 Obj.lastdisp=eq;

	 if(isNaN(eq)==true){
	Obj.alerttrue = true;
	Obj.alerttxt += '\r\n\r\nНевозможно вычислить остаточную дисперсию, т.к. ошибка при подсчёте определителя обратной матрицы коэффициентов.\r\nОбычно это происходит, если строки одинаковы, все элементы в строке одинаковы, или кол-во опытов меньше трёх.';
	print('LASTDISP','');

	 }else{
		Obj.txt+='\r\n\r\nОстаточная дисперсия = '+Fix(eq)+ '\r\n';
		print ('LASTDISP', '<br/><b>Остаточная дисперсия</b> = '+ Fix(eq) + '<br/><button class = "button2" id= "button9" onclick=lastDispEXP()>Развернуть</button><br/>');
	 }

	 Obj.equation = equation;
	return eq; 
 }

//Вывод Ковариации
function CovEXP(){
	var razv2 = document.getElementById('COV2'); 
	var A = Obj.A; var  N= Obj.N; var X= Obj.X;  
		var my = Obj.my;
	
		var mx = Obj.mx;

	if (!razv2){ 	var temp1=0, temp2=0;
	var txt=''; txt+= '<br/>'; var q=0;
 var razv = document.getElementById('button6');
	 	var cov2 = document.createElement('div');
		cov2.setAttribute("id", "COV2");
		razv.after(cov2);
		
		var cov = Obj.cov;
		do{
		txt += '<b>COV(X'+(q+1)+') &nbsp;= &nbsp;</b> ';
		txt += '<b>[</b>';
		for (i=0;i<X;i++){
		txt += ' <b>(</b> (' + Fix(A[i][q]) + CheckPlus(Fix(mx[q])) +') * '+ '('+ Fix(A[i][N-1]) + CheckPlus(Fix(my))+ ') <b>)</b>' ; if (i<(X-1)){
			txt+= ' + '; 
		}
		} txt += '<b> ]</b> &nbsp;&nbsp;=&nbsp;&nbsp; <b>[</b> ';
		temp1=0; temp2=0;
		for (i=0;i<X;i++){
			temp1=(A[i][q]-mx[q]);
			temp2= (A[i][N-1] - my); temp1=Fix(temp1); temp2=Fix(temp2);
		txt += ' <b>(</b>' + temp1 + ' * ' + temp2 + '<b>)</b>' ; if (i<(X-1)){
			txt+= ' + ';
		}}
		txt+= '<b> ]</b> &nbsp;&nbsp;=&nbsp;&nbsp; ';
		temp1=[]; temp2=[];
		for (i=0;i<X;i++){
			temp1[q]=(A[i][q]-mx[q]);
		temp2[q]= (A[i][N-1] - my); temp1[q]=Fix(temp1[q]); temp2[q]=Fix(temp2[q]); 
		if (i==0){			
		txt += ' ' + Fix(temp1[q] * temp2[q]) + ' ' ; }

		else {
			txt += ' ' + CheckMinus(Fix(temp1[q] * temp2[q])) + ' ' ; }
		} 
		
		txt+=' &nbsp;&nbsp;=&nbsp;&nbsp; <b>'+ Fix(cov[q])+'</b>';
		
		
		
		txt += '<br/>';
		q++; }
		while (q<(N-1))
		cov2.innerHTML= txt; }
else
{ razv2.remove(); }	
	
}

//Ковариация
function covariation(A,mx,my){
	var cov =[]; var txt = ''; Obj.txt+='\r\n'
for (let i=0;i<N-1;i++){
cov[i] = 0;}
    for(var j=0;j<N-1;j++)
        {
            for(var i=0;i<X;i++)
            {
                cov[j] += (A[i][j]-mx[j]) * (A[i][N-1]-my);
				
            }   txt += "<br/><b>COV(X" + (j+1) +")</b> = " + Fix(cov[j]); Obj.txt+= '\r\nCOV(X'+ (j+1)+ ') = '+ Fix(cov[j])   ; } 
			txt+= '<br/><button class = "button2" id= "button6" onclick=CovEXP()>Развернуть</button>'+ "<br/>";
		print ('COV', txt);
		Obj.cov=cov;
}
 
 
 //Для корелляции
function expressionX(A,mx){
	var expX = []; var txt3="<br/>";
	
    for(var j=0;j<N-1;j++)
        {
			expX[j]=0;
            for(var i=0;i<X;i++)
            {
                expX[j] += Math.pow(A[i][j]-mx[j],2);
				
            } 
        }
		return expX;
}

//Дисперсия Y
function DispersionY(A,my){
	
		var dispY= 0;
    for(var i=0;i<X;i++)
    {
         dispY += Math.pow(A[i][N-1] - my,2);
    }
	dispY = dispY/(X-1);
	
	if (isNaN(dispY)===true){
		Obj.alerttrue = true;
		Obj.alerttxt+= '\r\n\r\nОшибка при вычислении дисперсии от Y = NaN\r\nОбычно это происходит, если всего один коэффициент';
		print('DY','');
	}else{

	Obj.txt += '\r\n\Disp(Y) = '+ Fix(dispY); 
	print ('DY', "<br/><b>Disp(Y)</b> = " + Fix(dispY) + '<br/><button class = "button2" id= "button5" onclick=DYexp()>Развернуть</button>');
	}
	Obj.dispY=dispY;
	return dispY;
}




//Вывод дисперсии Y
function DYexp(){
	
	var txt=''; 		var razv2 = document.getElementById('DY2');
		
		
	if (!razv2){ 
	var A = Obj.A;
		var  N= Obj.N;
	var X= Obj.X;
	
	var q = (N-1); 
		var button13 = document.getElementById('button5');
			var dispY2 = document.createElement('div');
		dispY2.setAttribute('id', 'DY2');
		button13.after(dispY2); 
	txt += '<br/>';
	
		var my = Obj.my;
	
	dispY=0;
			txt+= '<b>Disp (Y) &nbsp;&nbsp;=&nbsp;&nbsp; </b>' ;  
			
				for (i=0;i<X;i++){
				txt+= ' <b>(</b> ('+ Fix(A[i][q]) + ' ';
					txt+=' - '; txt+= Fix(my)+ ')<sup>2</sup> / ( '+ X +' - ' + 1 +') <b>)</b>'; 
					
					if (i<(X-1)){
				txt+=' + ';	
				}
				}
				txt+= ' &nbsp;&nbsp;=&nbsp;&nbsp; ';
		for (i=0;i<X;i++){
				
		txt+='<b>(</b>'+ Fix(A[i][q]-my)+ '<sup>2</sup> / ' + (X-1)+'<b>)</b>';
		if (i<(X-1)){
		txt+= ' + ';
		}}
		txt+= ' <b> &nbsp;&nbsp;=&nbsp;&nbsp; </b> ';
		for (i=0;i<X;i++){
		txt += '<b>(</b>'+ Fix(Math.pow(A[i][q]-my,2))+ ' / ' + (X-1)+ '<b>)</b>';

		if (i<(X-1)){
		txt+= ' + ';
		}
		} 
		txt+= ' <b> &nbsp;&nbsp;=&nbsp;&nbsp; </b> ' ;
		for (i=0;i<X;i++){
		txt += Fix((Math.pow(A[i][q]-my,2))/(X-1));

		if (i<(X-1)){
		txt+= ' + ';
		}
		} 
		
		
		for(var i=0;i<X;i++)
            {
                dispY += Math.pow(A[i][q]-my,2);
				
			}
			dispY= dispY/(X-1);
			txt += ' = <b>' + Fix(dispY)+ '</b><br/>'; q++;		
			 
	
	dispY2.innerHTML = txt;
	}	
	else { razv2.remove(); }
	
}



 //Инициализация матрицы 0-выми значениями
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

 
//Подписи переменных


//Вывод данных
function vyvod(){
	Obj.alerttrue= false;
	var q = document.getElementById('MX');

	if (!q){
		
	var div = document.createElement('div');
	div.className = "scrollbar";
	div.setAttribute("id", "scroll");
	
	var tablet = document.getElementById('button');
	tablet.after(div);
	
	var scrolling = document.getElementById('scroll');
	
	var mxx = document.createElement('div');
		mxx.setAttribute("id", "MX");
	
	var myy = document.createElement('div');
		myy.setAttribute("id", "MY");
	
	var dispp = document.createElement('div');
		dispp.setAttribute("id", "DISP");

	var dyy= document.createElement('div');
	dyy.setAttribute("id", "DY");
	var Gp = document.createElement('div');
		Gp.setAttribute("id", "Gp");
	var covv = document.createElement('div');
		covv.setAttribute("id", "COV");
		
	var expxx= document.createElement('div');
		expxx.setAttribute("id", "EXPX");
		
	var expyy= document.createElement('div');
	expyy.setAttribute("id", "EXPY");
	
	var corrr= document.createElement('div');
	corrr.setAttribute("id", "CORR");
	
		var lastDisp= document.createElement('div');
	lastDisp.setAttribute("id", "LASTDISP");
	
	
		var eq11= document.createElement('div');
	eq11.setAttribute("id", "EQ1");
	
	var canvas2= document.createElement("canvas");
	canvas2.setAttribute("id", "canvas1");
	Obj.ctx= canvas2;
	
	var dett= document.createElement('div');
	dett.setAttribute("id", "DET");
	
	var space= document.createElement('div');
	space.setAttribute("id", "SPACE");
	space.innerHTML= "<br/><br/><br/><br/>";
	
		var exp22= document.createElement('div');
	exp22.setAttribute("id", "EXP2");

	var exp33= document.createElement('div');
	exp33.setAttribute("id", "checking");
	
	var exp333= document.createElement('div');
	exp333.setAttribute("id", "checkingcoefffs");

	var dett2= document.createElement('div');
	dett2.setAttribute("id", "Fisher");
	
	var dispcheck= document.createElement('div');
	dispcheck.setAttribute("id", "dispcheck");

	var a= document.createElement('a');
	a.setAttribute("id", "a");
	
	
	
	scrolling.before(space);
	
	scrolling.append(mxx);
	scrolling.append(myy);
	scrolling.append(dispp);
	scrolling.append(dyy);
	scrolling.append(covv);
	scrolling.append(expxx);
	scrolling.append(expyy);
	scrolling.append(corrr);
	
	scrolling.append(eq11);
	
	scrolling.append(exp22);
	
	scrolling.append(lastDisp);
	scrolling.append(dett);
	scrolling.append(exp33);
	scrolling.append(exp333);
	scrolling.append(dett2);
	scrolling.append(dispcheck);
	scrolling.append(a);
	a.innerHTML = '<button id = "button13" onclick = "create()"> Скачать результат </button>';
	
	}

}


function fishertable(f1,f2){
	var fisher = 0;
	

		if (f1==1){
			if(f2==1){	fisher=161.4;}
			if(f2==2){	fisher=18.51;}
			if(f2==3){	fisher=10.13;}
			if(f2==4){	fisher=7.71;}
			if(f2==5){	fisher=6.61;}
			if(f2==6){	fisher=5.99;}
			if(f2==7){	fisher=5.59;}
			if(f2==8){	fisher=5.32;}
			if(f2==9){	fisher=5.12;}
			if(f2==10){	fisher=4.96;}
			if(f2==11){	fisher=4.84;}
			if(f2==12){	fisher=4.75;}
			if(f2==13){	fisher=4.67;}
			if(f2==14){	fisher=4.6;}
			if(f2==15){	fisher=4.54;}
			if(f2==16){	fisher=4.49;}
			if(f2==17){	fisher=4.45;}
			if(f2==18){	fisher=4.41;}
			if(f2==19){	fisher=4.38;}
			if(f2==20){	fisher=4.35;}
			if(f2==21){	fisher=4.32;}
			if(f2==22){	fisher=4.30;}	
			if(f2==23){	fisher=4.28;}
			if(f2==24){ fisher=4.26;}
			if(f2==25){ fisher=4.24;}
			if(f2==26){	fisher=4.22;}
			if(f2==27){	fisher=4.21;}
			if(f2==29){	fisher=4.2;}
			if(f2==29){	fisher=4.18;}
			if(f2==30){	fisher=4.17;}
			if(f2>30&&f2<=40){	fisher=4.08;}
			if(f2>40&&f2<=60){	fisher=4;}
			if(f2>60&&f2<=120){	fisher=3.92;}
			if(f2>120){	fisher=3.84;}
			}

			if (f1==2){
				if(f2==1){	fisher=199.5;}
				if(f2==2){	fisher=19;}
				if(f2==3){	fisher=9.55;}
				if(f2==4){	fisher=6.94;}
				if(f2==5){	fisher=5.79;}
				if(f2==6){	fisher=5.14;}
				if(f2==7){	fisher=4.74;}
				if(f2==8){	fisher=4.46;}
				if(f2==9){	fisher=4.26;}
				if(f2==10){	fisher=4.1;}
				if(f2==11){	fisher=3.98;}
				if(f2==12){	fisher=3.88;}
				if(f2==13){	fisher=3.8;}
				if(f2==14){	fisher=3.74;}
				if(f2==15){	fisher=3.68;}
				if(f2==16){	fisher=3.63;}
				if(f2==17){	fisher=3.59;}
				if(f2==18){	fisher=3.55;}
				if(f2==19){	fisher=3.52;}
				if(f2==20){	fisher=3.49;}
				if(f2==21){	fisher=3.47;}
				if(f2==22){	fisher=3.44;}	
				if(f2==23){	fisher=3.42;}
				if(f2==24){ fisher=3.4;}
				if(f2==25){ fisher=3.38;}
				if(f2==26){	fisher=3.37;}
				if(f2==27){	fisher=3.35;}
				if(f2==29){	fisher=3.34;}
				if(f2==29){	fisher=3.33;}
				if(f2==30){	fisher=3.32;}
				if(f2>30&&f2<=40){	fisher=3.23;}
				if(f2>40&&f2<=60){	fisher=3.15;}
				if(f2>60&&f2<=120){	fisher=3.07;}
				if(f2>120){	fisher=2.99;}
				}

				if (f1==3){
					if(f2==1){	fisher=215.7;}
					if(f2==2){	fisher=19.16;}
					if(f2==3){	fisher=9.28;}
					if(f2==4){	fisher=6.59;}
					if(f2==5){	fisher=5.41;}
					if(f2==6){	fisher=4.76;}
					if(f2==7){	fisher=4.35;}
					if(f2==8){	fisher=4.07;}
					if(f2==9){	fisher=3.86;}
					if(f2==10){	fisher=3.71;}
					if(f2==11){	fisher=3.59;}
					if(f2==12){	fisher=3.49;}
					if(f2==13){	fisher=3.41;}
					if(f2==14){	fisher=3.34;}
					if(f2==15){	fisher=3.29;}
					if(f2==16){	fisher=3.24;}
					if(f2==17){	fisher=3.2;}
					if(f2==18){	fisher=3.16;}
					if(f2==19){	fisher=3.13;}
					if(f2==20){	fisher=3.1;}
					if(f2==21){	fisher=3.07;}
					if(f2==22){	fisher=3.05;}	
					if(f2==23){	fisher=3.03;}
					if(f2==24){ fisher=3.01;}
					if(f2==25){ fisher=2.99;}
					if(f2==26){	fisher=2.98;}
					if(f2==27){	fisher=2.96;}
					if(f2==29){	fisher=2.95;}
					if(f2==29){	fisher=2.93;}
					if(f2==30){	fisher=2.92;}
					if(f2>30&&f2<=40){	fisher=2.84;}
					if(f2>40&&f2<=60){	fisher=2.76;}
					if(f2>60&&f2<=120){	fisher=2.68;}
					if(f2>120){	fisher=2.6;}
					}

					if (f1==4){
						if(f2==1){	fisher=224.6;}
						if(f2==2){	fisher=19.25;}
						if(f2==3){	fisher=9.12;}
						if(f2==4){	fisher=6.39;}
						if(f2==5){	fisher=5.19;}
						if(f2==6){	fisher=4.53;}
						if(f2==7){	fisher=4.12;}
						if(f2==8){	fisher=3.84;}
						if(f2==9){	fisher=3.63;}
						if(f2==10){	fisher=3.48;}
						if(f2==11){	fisher=3.36;}
						if(f2==12){	fisher=3.26;}
						if(f2==13){	fisher=3.18;}
						if(f2==14){	fisher=3.11;}
						if(f2==15){	fisher=3.06;}
						if(f2==16){	fisher=3.01;}
						if(f2==17){	fisher=2.96;}
						if(f2==18){	fisher=2.93;}
						if(f2==19){	fisher=2.9;}
						if(f2==20){	fisher=2.87;}
						if(f2==21){	fisher=2.84;}
						if(f2==22){	fisher=2.82;}	
						if(f2==23){	fisher=2.8;}
						if(f2==24){ fisher=2.78;}
						if(f2==25){ fisher=2.76;}
						if(f2==26){	fisher=2.74;}
						if(f2==27){	fisher=2.73;}
						if(f2==29){	fisher=2.71;}
						if(f2==29){	fisher=2.7;}
						if(f2==30){	fisher=2.69;}
						if(f2>30&&f2<=40){	fisher=2.61;}
						if(f2>40&&f2<=60){	fisher=2.52;}
						if(f2>60&&f2<=120){	fisher=2.45;}
						if(f2>120){	fisher=2.37;}
						}

						if (f1==5){
							if(f2==1){	fisher=230.2;}
							if(f2==2){	fisher=19.3;}
							if(f2==3){	fisher=9.01;}
							if(f2==4){	fisher=6.26;}
							if(f2==5){	fisher=5.05;}
							if(f2==6){	fisher=4.39;}
							if(f2==7){	fisher=3.97;}
							if(f2==8){	fisher=3.69;}
							if(f2==9){	fisher=3.48;}
							if(f2==10){	fisher=3.33;}
							if(f2==11){	fisher=3.2;}
							if(f2==12){	fisher=3.11;}
							if(f2==13){	fisher=3.02;}
							if(f2==14){	fisher=2.96;}
							if(f2==15){	fisher=2.9;}
							if(f2==16){	fisher=2.85;}
							if(f2==17){	fisher=2.81;}
							if(f2==18){	fisher=2.77;}
							if(f2==19){	fisher=2.74;}
							if(f2==20){	fisher=2.71;}
							if(f2==21){	fisher=2.68;}
							if(f2==22){	fisher=2.66;}	
							if(f2==23){	fisher=2.64;}
							if(f2==24){ fisher=2.62;}
							if(f2==25){ fisher=2.6;}
							if(f2==26){	fisher=2.59;}
							if(f2==27){	fisher=2.56;}
							if(f2==29){	fisher=2.56;}
							if(f2==29){	fisher=2.54;}
							if(f2==30){	fisher=2.53;}
							if(f2>30&&f2<=40){	fisher=2.45;}
							if(f2>40&&f2<=60){	fisher=2.37;}
							if(f2>60&&f2<=120){	fisher=2.29;}
							if(f2>120){	fisher=2.21;}
							}


return fisher;

}


function dispcheck(){

	var txt= '<br/><b>Проверка однородности дисперсий:</b><br/>Max <b>(</b>' ;
	
	var f1=Obj.N-1; var f2= Obj.X; 
var fisher= fishertable(f1,f2); Obj.fishertable = fisher;
console.log(fisher);
	
	for (i=0;i<Obj.N-1;i++){

	txt+= Fix(Obj.dispX[i]);
	if (i<Obj.N-2){

		txt+= ' ; ';
	}} txt+= '<b>) / </b>Min <b>(</b>';
	for (i=0;i<Obj.N-1;i++){

		txt+= Fix(Obj.dispX[i]);
		if (i<Obj.N-2){
	
			txt+= ' ; ';
		}}  txt+='<b>) &nbsp&nbsp=&nbsp&nbsp </b>' + Fix(Math.max(...Obj.dispX)) + ' / ' + Fix(Math.min(...Obj.dispX)) + ' &nbsp&nbsp=&nbsp&nbsp <b>' 
		+ Fix(parseFloat(Math.max(...Obj.dispX)/Math.min(...Obj.dispX))) +'</b>';
		
		if (parseFloat(Math.max(...Obj.dispX)/Math.min(...Obj.dispX))>fisher){
			txt+=' <b> > </b> G<sub>T</sub>(0.05, '+f1 + ', ' + f2 + ') &nbsp&nbsp=&nbsp&nbsp ' + Fix(parseFloat(Math.max(...Obj.dispX)/Math.min(...Obj.dispX)))
			+ ' > '  + fisher + '<b> (Дисперсии неоднородны)</b>';

		}else{
			txt+=' <b> < </b> G<sub>T</sub>(0.05, '+f1 + ', ' + f2 + ') &nbsp&nbsp=&nbsp&nbsp ' + Fix(parseFloat(Math.max(...Obj.dispX)/Math.min(...Obj.dispX)))
			+ ' < '  + fisher + '<b> (Дисперсии однородны)</b>';
		}

if (isNaN(parseFloat(Math.max(...Obj.dispX)/Math.min(...Obj.dispX)))==true){

print('dispcheck','');
}	
else{ 
print('dispcheck',txt);}

}

function FisherCheck(){

var txt='<br/><br/><br/>';
var f1 = 1; var f2 = Obj.X-2;
var fisher = Fix(Obj.lastdisp/Obj.dispY);
var fishertabl = fishertable(f1,f2);
txt+='<b>Проверка адекватности модели:</b><br/>' + Fix(Obj.lastdisp) + ' / ' + Fix(Obj.dispY) + ' &nbsp=&nbsp <b>' + fisher +'</b>' ;
if (fisher<fishertabl){

txt+= '<b> < </b>F<sub>T</sub><b> (</b>0.05, ' + f1 +', '+ f2 + '<b>)</b> = '+ fisher + ' <b> < </b> ' + fishertabl + ' <b> (Модель адекватна) </b>';
}



print('Fisher',txt);
return fisher;
}

function checkingcoeffsEXP(){
	var razv2 = document.getElementById('checkingcoeffs2'); 
	

	if (!razv2){ 	
	var txt='<br/>'; var q=0;
 var razv = document.getElementById('button18');
	 	var cov2 = document.createElement('div');
		cov2.setAttribute("id", "checkingcoeffs2");
		razv.after(cov2); 
var koeff = [];
		do{
koeff[q]=(Math.abs(Obj.coeffs[0][(q+1)]))/Math.sqrt(Obj.dispX[q]/Obj.X);
txt+= "<b>Значимость коэффициента Х"+ (q+1) + " &nbsp=&nbsp</b> " + "<b>|</b> " + Obj.coeffs[0][(q+1)] + ' <b>| /</b> ' + Fix(Math.sqrt(Obj.dispX[q]/Obj.X)) + ' &nbsp=&nbsp <b>' 
+ Fix(koeff[q]) +'</b>';
if( Math.abs((Obj.coeffs[0][(q+1)]) / Math.sqrt(Obj.dispX[q]/Obj.X) < Obj.corrtable))
{ txt+= " <b> < </b> "+ Obj.corrtable + ' <b>(Коэффициент значимый)</b><br/>'; } 
else {  
txt+= " <b> > </b> "+ Obj.corrtable + ' <b>(Коэффициент незначимый)</b><br/>';
}

q++;
}while (q<(Obj.N-1))


print('checkingcoeffs2',txt);
}else{razv2.remove();}

}


function checkingcoeffs(){
	var q=0; var koeff = []; var koefftrue=false;
	do{
		koeff[q]=(Math.abs(Obj.coeffs[0][(q+1)]))/Math.sqrt(Obj.dispX[q]/Obj.X); 
		if(isNaN(koeff[q])==true){
			koefftrue=true;
		}
		q++;}  while(q<(Obj.N-1));

if(koefftrue==false){
var txt= '<br/><b>Значимость коээфициентов</b><br/>';

txt+='<button class = "button2" id= "button18" onclick=checkingcoeffsEXP()>Показать</button>';

print('checkingcoefffs',txt);}
else{print('checkingcoefffs',''); }
}



function checkingcorrelations(){
	var razv2 = document.getElementById('checkingcorr'); 
	

	if (!razv2){ 	
	var txt=''; var q=0;
 var razv = document.getElementById('button16');
	 	var cov2 = document.createElement('div');
		cov2.setAttribute("id", "checkingcorr");
		razv.after(cov2);

do{

txt+='<br/><b>Значимость '+(q+1) + ' коэффициента корреляции: (|</b> '+ Fix(Obj.corr[q])+ '<b> |</b> * ('+Obj.X+' - 2)<sup>1/2</sup><b>) / (</b>1 - ' ;
if(Obj.corr[q]>0){
txt+= Fix(Obj.corr[q]) ;}
else{

	txt+='<b>(</b>' + Obj.corr[q].toFixed(2) + "<b>)</b>";
} 
txt+= '<sup>2</sup><b>)<sup>1/2</sup></b> &nbsp=&nbsp ' + Fix(Math.abs(Obj.corr[q])*Math.sqrt(Obj.X-2))+ ' <b>/</b> '
+ Fix(1-(Obj.corr[q])**2);
if (Obj.corrcheck[q]>Obj.corrtable){
	txt+= '&nbsp&nbsp = ' + Obj.corrcheck[q]+' > ' + Obj.corrtable + ' &nbsp&nbsp<b>(значимый коэффициент)</b>';
	}
	else{
		txt+= '&nbsp&nbsp = ' + Obj.corrcheck[q]+'  < ' + Obj.corrtable + ' &nbsp&nbsp<b>(незначимый коэффициент)</b>';
	}

q++;
}while(q<(Obj.N-1))


print('checkingcorr',txt);

}else{razv2.remove();}

}

function studentcheck(){
var txt='<br/><b>Значимость коэффициентов корреляции</b><br/>'; var f = Obj.X-2;
var corrtable = 0;

function tablestudent(){
	var corrtable= 0;
if (f==1){corrtable = 12.71;}
if (f==2){corrtable = 4.3;}
if (f==3){corrtable = 3.18;} 
if (f==4){corrtable = 2.78;}
if (f==5){corrtable = 2.57;} 
if (f==6){corrtable = 2.45;} 
if (f==7){ corrtable = 2.36;}
if (f==8){	corrtable = 2.31;}
if (f==9){	corrtable = 2.26;}
if (f==10){	corrtable = 2.23;}
if (f==11){	corrtable = 2.2;}
if (f==12){	corrtable = 2.18;}
if (f==13){	corrtable = 2.16;}
if (f==14){	corrtable = 2.14;}
if (f==15){	corrtable = 2.13;}
if (f==16){	corrtable = 2.12;}
if (f==17){	corrtable = 2.11;}
if (f==18){	corrtable = 2.1;}
if (f==19){	corrtable = 2.09;}
if (f==20){	corrtable = 2.09;}
if (f==21){	corrtable = 2.08;}
if (f==22||f==23){	corrtable = 2.07;}
if (f==24||f==25||f==26){	corrtable = 2.06;}
if (f==27||f==28||f==29){	corrtable = 2.05;}
if (f==30){	corrtable = 2.04;}
if (f>30&&f<=40){	corrtable = 2.02;}
if (f>40&&f<=60){	corrtable = 2;}
if (f>60&&f<=120){	corrtable = 1.98;}
if (f>120){	corrtable = 1.96;}

return corrtable;
}
Obj.corrtable = tablestudent();
corrtable = Obj.corrtable;
var q=0; var corrcheck=[];
do {

//txt+= '<b>Значимость ' + (q+1) + ' коэффициента коррелляции &nbsp=&nbsp </b> '; 

corrcheck[q]= (Math.abs(Obj.corr[q]) * Math.sqrt(Obj.X-2)) / Math.sqrt(1-(Obj.corr[q]**2));
corrcheck[q]= Fix(corrcheck[q]);
/*
if (corrcheck[q]>corrtable){
txt+= '&nbsp&nbsp (' + corrcheck[q].toFixed(3)+' ) > ' + corrtable + ' &nbsp&nbsp<b>(значимый коэффициент)</b>';
}
else{
	txt+= '&nbsp&nbsp (' + corrcheck[q].toFixed(3)+' ) < ' + corrtable + ' &nbsp&nbsp<b>(незначимый коэффициент)</b>';
}*/
//txt+='<br/>';
	q++;
} while (q<(Obj.N-1))
Obj.corrcheck = corrcheck;

var corrtruely=false;
for(q=0;q<Obj.corrcheck.length;q++){
if (isNaN(Obj.corrcheck[q])==true){

	corrtruely = true;
}}

if (corrtruely==false){
print('checking',txt+'<button class = "button2" id= "button16" onclick=checkingcorrelations()>Показать</button>');
}else{ print('checking',''); }



}

//Рассчёт коэффициентов
function calculate(A){
			
	var aa =Matrix(N,N);
	
	var Y=0;
for (i=0; i<X;i++){
Y+=A[i][(N-1)];	}
		for (j=1;j<N;j++){
		eval('var X'+j+ '=0'); eval ('var X1'+j+'=0');
		eval('var YX'+j+'=0'); 	
		for (i=0; i<X;i++){
		eval('X'+j+'+= A[i]['+(j-1)+']');
		eval('YX'+j+'+=A[i]['+(N-1)+']*A[i]['+(j-1)+']');
		eval('X1'+j+'+=A[i][0]*A[i]['+(j-1)+']');
		}}
	
		for (j=2;j<N;j++){	
			eval ('var X2'+j+'=0');
			for (i=0;i<X;i++){
			eval ('X2'+j+'+=A[i][1]*A[i]['+(j-1)+']');
			}}
	if (N>3){
	for (j=3; j<N;j++){
		eval('X3'+j+'=0');
		for (i=0;i<X;i++){
			eval ('X3'+j+ '+=A[i][2]*A[i]['+(j-1)+']');	
	}}}

	if (N==2)
	{
var XX = 0;
for (i=0;i<X;i++){
	XX+= (A[i][0])**2;
} var XX2 = X1**2;
	
		var A1 = ((Y*XX) - (YX1*X1))/((X*XX)-XX2);
		var A2= ((X*YX1)- (Y*X1))/((X*XX)-XX2);

		var bb = [[A1,A2]];
		
	}
	if (N==3){


		aa = [[X,X1,X2],[X1,X11,X12],[X2,X12,X22]];
		
	var transpA= inverseMatrix(aa);

	var cc = [[Y,YX1,YX2]]; 

	var bb = multMatrix(transpA,cc);

	}
	
	if (N==4){
		var aa =[[X,X1,X2,X3],[X1,X11,X12,X13],[X2,X12,X22,X23],[X3,X13,X23,X33]];
		var transpA= inverseMatrix(aa);	
		var cc= [[Y,YX1,YX2,YX3]]; 
		var bb = multMatrix(transpA,cc);	}
	
	if (N==5){
		var X44=0;
		for (i=0; i<X;i++){
		X44+= A[i][3]*A[i][3];			}

		var aa =[[X,X1,X2,X3,X4],[X1,X11,X12,X13,X14],[X2,X12,X22,X23,X24],[X3,X13,X23,X33,X34],[X4,X14,X24,X34,X44]];
		var transpA= inverseMatrix(aa); 
		console.log(transpA);
		var cc= [[Y,YX1,YX2,YX3,YX4]];
		console.log(cc);
		var bb = multMatrix(transpA,cc);
		console.log(bb);
	}
	
	if (N==6){
		var X44=0, X45=0, X55=0, Y = 0; 
		
		for (i=0; i<X;i++){
		
		Y+= A[i][5];
		X44+= A[i][3]*A[i][3];
		X45+= A[i][3]*A[i][4];
		X55+= A[i][4]*A[i][4];
		}
		
		var aa =[[X,X1,X2,X3,X4,X5],[X1,X11,X12,X13,X14,X15],[X2,X12,X22,X23,X24,X25],[X3,X13,X23,X33,X34,X35],[X4,X14,X24,X34,X44,X45],[X5,X15,X25,X35,X45,X55]];
		var transpA= inverseMatrix(aa);
		var cc= [[Y,YX1,YX2,YX3,YX4,YX5]]; var bb = multMatrix(transpA,cc);
	}
	
	if (N==7){
			
		var X55=0, X56=0, X66=0, Y = 0; 
		
		for (i=0; i<X;i++){
		Y+= A[i][6];
		X55+= A[i][4]*A[i][4];
		X56+= A[i][4]*A[i][5];
		X66+= A[i][5]*A[i][5];
		}
		for (j=4; j<N;j++){
		eval('X4'+j+'=0');
		for (i=0;i<X;i++){
			eval ('X4'+j+ '+=A[i][3]*A[i]['+(j-1)+']');
		}}
		
		var aa = [[X,X1,X2,X3,X4,X5,X6],[X1,X11,X12,X13,X14,X15,X16],[X2,X12,X22,X23,X24,X25,X26],
		[X3,X13,X23,X33,X34,X35,X36],[X4,X14,X24,X34,X44,X45,X46],[X5,X15,X25,X35,X45,X55,X56],[X6,X16,X26,X36,X46,X56,X66]];
		var transpA= inverseMatrix(aa);
		var cc= [[Y,YX1,YX2,YX3,YX4,YX5,YX6]];
		var bb = multMatrix(transpA,cc);
		}
		var coefficienttrue=false;
	 for (i=0;i<N;i++){
		 if (Number.isInteger(bb[0][i])==false){
			 if(isNaN(bb[0][i])===true){
				 Obj.alerttrue = true;
				 
				 coefficienttrue=true;
			 }
			
	bb[0][i]=Fix(bb[0][i]);} } if (coefficienttrue==true)
{Obj.alerttxt+= '\r\n\r\nОшибка при подсчёте определителя из обратной матрицы коэффициентов. Проверьте пожалуйста данные.\r\nОбычно такое происходит при одинаковых строках, или в случае, если число опытов меньше трёх.';}
	Obj.coeffs =bb;
	 return bb;
}

//Транспонирование матрицы
function transpose(A)       //На входе двумерный массив
{
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++)
     { AT[i] = [];
       for (var j = 0; j < m; j++) AT[ i ][j] = A[j][ i ];
     }
    return AT;
}
