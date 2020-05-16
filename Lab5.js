Obj = {
clicked:false, A:'',X:'',N:'', checked:false, firsttrue:'', checkstop:false, index: '', B:false, entered:'', txt:'', res:'', krit:''

};
 //Вывод значений в какой-то блок
 function print (obj, txt){
	 
  document.getElementById(obj).innerHTML = txt;
  
}

function Fix(num){
  const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
  
  return num.toFixed(Obj.krit);
}

function checkthird(){
	var a = document.getElementById('krit').value;
  var div = document.getElementById('scroll');

  const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

if (f(a)>0||a<1||a>100||isNaN(a)==true){
  if (div){
    div.remove();} 
    if (isNaN(a)==true){
alert ("Введите корректное кол-во знаков после запятой.")
    }
    else {alert('Количество знаков после запятой должно быть от 1 до 100!')}
  return false;
  }
  else {return true;}

}

function checkFirst(){
	Obj.firsttrue=false;
	var div = document.getElementById('scroll');
	var First = document.getElementById("n").value; 
	const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

	if (f(First)>0||First<2||First>200||First ==""||isNaN(First)==true){
		if (div){
    div.remove();} 
    if(First==1){if(div){div.remove();} document.getElementById('matrix1').innerHTML=''; document.getElementById('button123').innerHTML=''; alert('Количество итераций должно быть более одного!');}
		else if(First==''){if(div){div.remove();} document.getElementById('matrix1').innerHTML=''; document.getElementById('button123').innerHTML=''; alert('Введите количество итераций!');  }else{
				alert('Введите корректное количество итераций!');if(div){div.remove();} document.getElementById('matrix1').innerHTML=''; document.getElementById('button123').innerHTML='';  }
		Obj.firsttrue= true;
		return false;
	}
		else{
			Obj.firsttrue=false;
			return true;
		}
  }
  
function getSize(){
	size = document.getElementById('s1'),
    N = (size.value*1); return N;
}

function checking(){
	var div = document.getElementById('scroll');
		 var A = []; var second = true; var third = true; fourth=true; var fifth=true; var txt='';
    var X = Obj.N; var N= Obj.N;

  var indexes = [];
    for (var i = 0; i < X; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
		{if (document.getElementById('a'+(i+1)+(j+1)).value =="") {second=false;}
    if(isNaN(document.getElementById('a'+(i+1)+(j+1)).value)==true){ third=false;}
    if((document.getElementById('a'+(i+1)+(j+1)).value)<0||(document.getElementById('a'+(i+1)+(j+1)).value)>1){ fourth=false; }
    
    }} console.log(A)
    if (fourth==false){second=false; third=true;}

    var sum=0;
    for (j=0;j<N;j++){
    sum=0;
    for(i=0;i<N;i++){
    sum+= parseFloat(document.getElementById('a'+(j+1)+(i+1)).value) ;
    
  }
  sum=Fix(sum);
console.log(sum);
  if (sum!=1){fifth=false; second=false;
  indexes.push(j+1);
  }
    }

		if (second==false){
      if (div){
        div.remove();}
        if (second=false&&third==true&&fourth==true){  alert('Введите матрицу!');  }
		
			if (third==false&&fourth==true){ alert('Введите корректные данные!'); }
      if (second==false&&third==true&&fourth==false)
      {
        alert('Числа должны быть от 0 до 1!');
      }
      if(fifth==false){

        for (i=0;i<indexes.length;i++){
          if (i==0){
        txt+='Сумма каждой строки должна равняться 1!\r\nНомера строк, где сумма не равняется единице: ';}
      txt+= indexes[i];
      if (i<indexes.length-1){
        txt+=', ';
      }
      }
      alert(txt);
      }
			return false;
		}
		else {
			return true;
		}
	}

function createMatrix(obj1)
{   
	if (Obj.checked == false){
    var first = checkFirst();
  
    if (first==true){
      var sec = checkthird();
      if (sec==true){
      Obj.B = false;
     
	var N = getSize();
  Obj.N = N; 
      Obj.X = document.getElementById('n').value*1;
  var X=N;


var res = '<br/><b>Матрица состояний</b><br/>';

	//Podpisi();
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 58px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	print (obj1, res);
    print ("button123", '<button class ="button2" onclick="Main()">ОК</button>');
    }}}

    else{
      
      var first = checkFirst();
      if (first==true){
        var sec = checkthird();
        if (sec==true){
        Obj.B = false;
        console.log('Robyt');
        var A = Obj.A;
    var N = Obj.N;
        Obj.X = document.getElementById('n').value*1;
    var X=N;
 
  
  var res = '<br/><b>Матрица состояний</b><br/>';
  
    //Podpisi();
      for (var i = 0; i < X; i++)
       { for (var j = 0; j < N; j++)
          { res += '<input style="width: 58px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
         res += '<br/>';
       }
    print (obj1, res);
      print ("button123", '<button class ="button2" onclick="Main()">ОК</button>');
      
      for (var i = 0; i < X; i++)
      { for (var j = 0; j < N; j++)
         { document.getElementById('a'+(i+1)+(j+1)).value=A[i][j]; }
        
      }

    }}}
    

}

function checksecond(){
var asd = false;
  for (var i = 0; i < N; i++)
  { A[i] = [];
    for (var j = 0; j < X; j++)
 {if (document.getElementById('b'+(i+1)+(j+1)).value !="") {asd=true;}}}
 if (asd==true){
   Obj.B=false;

 }else{
   Obj.B=true;

  }

  if (Obj.B==true){
   
      var div = document.getElementById('scroll');
         var A = []; var second = true; var third = true; fourth=true; var fifth=true;
        var X = Obj.N; var N= 1;
      
        for (var i = 0; i < N; i++)
         { A[i] = [];
           for (var j = 0; j < X; j++)
        {if (document.getElementById('b'+(i+1)+(j+1)).value =="") {second=false;}
        if(isNaN(document.getElementById('b'+(i+1)+(j+1)).value)==true){ third=false;}
        if((document.getElementById('b'+(i+1)+(j+1)).value)<0||(document.getElementById('a'+(i+1)+(j+1)).value)>1){ fourth=false; }
        
        }}
        if (fourth==false){second=false; third=true;}
    
        var sum=0;
        for (j=1;j<2;j++){
        sum=0;
        for(i=1;i<X+1;i++){
        sum+= parseFloat((document.getElementById('b'+(j)+(i)).value)) ;
      }
    console.log(sum);
      if (sum!==1){fifth=false; second=false;}
        }
    
        if (second==false){
          if (isNaN(sum)==false&&sum!=0){
          if (div){
            div.remove();}
            if (second=false&&third==true&&fourth==true){    }
        
          if (third==false&&fourth==true){ alert('Введите корректные данные в векторе состояний'); }
          if (second==false&&third==true&&fourth==false)
          {
            alert('Числа должны быть от 0 до 1!');
          }
          if(fifth==false){
            
            alert('Сумма вектора должна равняться одному!');}
        Obj.B=true;
        console.log(Obj.B);
          return false;
        }
        else{
         Obj.B=false;
         console.log(Obj.B);
          return true;
        }
        
      }
        
        else {
        
          return true;
        }
      

}

else{
  return true;
}
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
       
function podskazka(){
	var txt= '     При вводе данных из файла, ваш файл должен быть в формате .txt, и иметь одинаковое количество столбцов и строк.\r\n\r\n     Каждый новый элемент строки в матрице - ';
	txt+='разделяется запятой, а добавление новой строки - переходом на следующую строку.\r\n\r\n';
	txt+='     В случае, если вы введёте разное количество столбцов и строк - ';
	txt+='программа выдаст ошибку и все исследования, которые вы делали до этого будут удалены.\r\n\r\n';
  txt+='     Для того, чтобы ввести матрицу + матрицу состояний - выберите файл, с добавлением одной строку снизу.'
  txt+= 'Кол-во строк в таком случае должно равняться кол-ву столбцов +1, и система создаст для вас дополнительно вектор состояний.'
  alert(txt);
	}

  function expiters(){
    var mys = document.getElementById('exp');
 
    
    if (!mys){
      var razv = document.getElementById('button4');
      var yexp = document.createElement('div');
     yexp.setAttribute("id", "exp");
     razv.after(yexp);
    Obj.checkstop = false; var summa = 0; Obj.index = '';
  var res = '<br/>';
    if(Obj.checked==false){
      A = []; var N=Obj.N; NN = document.getElementById('n').value*1; var X = N; var B= Matrix(1,N); }
else {

  A = Obj.A; N=Obj.N; NN = Obj.X; var X = N; var B= Matrix(1,N); 
}



  for (var i = 0; i < N; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
        { A[i][j] = 1*document.getElementById('a'+(i+1)+(j+1)).value; }
     }
	 if (Obj.B==true){
	 for (var i = 0; i < 1; i++)
     { B[i] = [];
       for (var j = 0; j < N; j++)
        { B[i][j] = 1*document.getElementById('b'+(i+1)+(j+1)).value; }
     }
    }
    var D1 = Matrix(N,X); 
  D1 = multMatrix(A,A);
  
  res+='<b>Итерация № 1</b><br/>';

  for (var i = 0; i < X; i++)
   { for (var j = 0; j < N; j++)
      { res+= '<input style="width: 58px;" type="text" disabled id="c'+(i+1)+(j+1)+'"/>' ; 

    }

     res += '<br/>';
   }
   var kriter= 0.1;

   if (Obj.krit>1){
   for (i=0;i<Obj.krit-1;i++){
     kriter=kriter*0.1;
   }
   }
  if (NN>1){
    q=0;
    do{
      eval('var D'+(q+2)+' = Matrix(X,N)') ;	
    eval('D'+(q+2)+' = multMatrix(A,D'+(q+1)+')') ;	
    summa=0;
  for (var j=0;j<X;j++){
    for (var i=0;i<X;i++){
  summa+= Math.abs(parseFloat(eval('D'+(q+2)+'[i][j]-D'+(q+1)+'[i][j]')));
  
    }
  } if (Math.abs(summa<kriter)){
    Obj.checkstop=true; Obj.index = (q+2);
  }
 
    res += '<br/><b>Итерация №' +  (q+2) + ':</b><br/>' ;
      for (var i = 0; i < X; i++)
       { for (var j = 0; j < N; j++)
         { res += '<input style="width: 58px;" type="text" disabled id="c'+(q+1)+(i+1)+(j+1)+'"/>' ;
       
        }
        
         res += '<br/>';
        
    }
  
    if(Obj.checkstop==true){
     //res+="<br/><br/><b>После " + (q+2)+ " итерации можно не продолжать исследования, так как суммарная разница по сравнению с предыдущим опытом - составляет "+ Fix(summa) + '.</b><br/>';
    
     break;}
    q++;
   
    } 
      while (q<NN-1) 
  
  
  }


  
print('exp',res);

for (var i = 0; i < X; i++)
    { for (var j = 0; j < N; j++){
  document.getElementById('c'+(i+1)+(j+1)).value = Fix(D1[i][j]);}}


  q=0;
  do{
  for (var i = 0; i < X; i++)
  { 
    
    for (var j = 0; j < N; j++){
document.getElementById('c'+(q+1)+(i+1)+(j+1)).value = eval ('Fix(D'+(q+2)+'[i][j])');}}
console.log(eval('D'+(q+2)));
q++;} 
while (q<NN-1);

  }
  else {mys.remove();}
  }


function EnterMatrix()
{
  Obj.txt=''; Obj.krit = document.getElementById('krit').value*1;

var kriter= 0.1;

if (Obj.krit>1){
for (i=0;i<Obj.krit-1;i++){
  kriter=kriter*0.1;
}
}

  var first = checkFirst();
    if (first==true){
  var check = checking();
  if (check == true){
    if (Obj.B==true){
  var check2 = checksecond();}
  else {var check2=true;}
 if (check2==true){
 

if (document.getElementById('umnozh')!=''){
  print('umnozh','');
}
	
   
  Obj.checkstop = false; var summa = 0; Obj.index = '';
  
    if(Obj.checked==false){
      A = []; var N=Obj.N; NN = document.getElementById('n').value*1; var X = N; var B= Matrix(1,N); }
else {

  A = Obj.A; N=Obj.N; NN = Obj.X; var X = N; var B= Matrix(1,N); 
}


  for (var i = 0; i < N; i++)
     { A[i] = [];
       for (var j = 0; j < N; j++)
        { A[i][j] = 1*document.getElementById('a'+(i+1)+(j+1)).value; }
     }
	 if (Obj.B==true){
	 for (var i = 0; i < 1; i++)
     { B[i] = [];
       for (var j = 0; j < N; j++)
        { B[i][j] = 1*document.getElementById('b'+(i+1)+(j+1)).value; }
     }
    }
    var D1 = Matrix(N,X); 
	D1 = multMatrix(A,A);
Obj.txt+= 'Лабораторная работа по теме: Цепи Маркова. Начальные данные:\r\nПервая матрица:\r\n\r\n';
for (i=0;i<N;i++){
for (j=0;j<N;j++){
Obj.txt+= A[i][j] + '  ';
}
Obj.txt+= '\r\n';
}
Obj.txt+='\r\n';
if (Obj.B==true){
Obj.txt+='А матрица состояний:\r\n\r\n';

  for (j=0;j<N;j++){
  Obj.txt+= B[0][j] + '  ';
  }
  Obj.txt+= '\r\n\r\n';
  

}

var res = '<center><b>Лабораторная работа по теме:<br/>"Цепи Маркова"</b></center><br/>';

	Obj.txt+='Итерация №1:\r\n';
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { ; 
      Obj.txt+=Fix(D1[i][j]) + '  ';
      }
      Obj.txt+='\r\n';
     
     }
	Obj.txt+='\r\n';
     document.getElementById('matrix2').innerHTML = res;
   
   
	var q=0; 
	if (NN>1){
	do{
		eval('var D'+(q+2)+' = Matrix(X,N)') ;	
	eval('D'+(q+2)+' = multMatrix(A,D'+(q+1)+')') ;	
  summa=0;
for (var j=0;j<X;j++){
  for (var i=0;i<X;i++){
summa+= Math.abs(parseFloat(eval('D'+(q+2)+'[i][j]-D'+(q+1)+'[i][j]')));

  }
} if (Math.abs(summa<kriter)){
  Obj.checkstop=true; Obj.index = (q+2);
}
  Obj.txt+='\r\nИтерация №'+ (q+2) + ':\r\n';
	Obj.res += '<br/><b>Итерация №' +  (q+2) + ':</b><br/>' ;
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
       { Obj.res += '<input style="width: 58px;" type="text" disabled id="c'+(q+1)+(i+1)+(j+1)+'"/>' ;
      Obj.txt+= eval ('Fix(D'+(q+2)+'[i][j]) + " " ');
      }
      Obj.txt+='\r\n';
     
      
  }

  if(Obj.checkstop==true){
   res+="<b>После " + (q+2)+ " итерации можно не продолжать исследования, так как суммарная разница по сравнению с предыдущим опытом - составляет "+ Fix(summa) + '.</b><br/>';
  Obj.txt+= '\r\nПосле '+(q+2)+' итерации можно не продолжать исследования, так как суммарная разница по сравнению с предыдущим опытом - составляет '+ Fix(summa);
   break;}
  q++;
 
	} 
    while (q<NN-1) 

    if(Obj.checkstop==false){
      Obj.txt+='\r\n\r\nПосле ' + (NN) +" итерации не было выявлено закономерности, рекомендуемо увеличить количество итераций.\r\nФинальная итерация - была:\r\n\r\n";
      res+='<b>После ' + (NN) +" итерации не было выявлено закономерности, рекомендуемо увеличить количество итераций.<br/>";
      res+= '<br/><b>Финальная итерация - была:</b><br/><br/>';
      for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
       { res += '<input style="width: 58px;" type="text" disabled id="cc'+(i+1)+(j+1)+'"/>' ; 
     
      
  
      Obj.txt+= eval('Fix(D' + NN + '[i][j]) + "  "');
    
      }
       res += '<br/>';
      Obj.txt+='\r\n'
  }
    }

  if(Obj.checkstop==true){
res+= '<br/><br/><b>Полученная нами матрица конечная матрица состояний:</b><br/>';
Obj.txt+='\r\n\r\nПолученная нами конечная матрица состояний:\r\n';

for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
       { res += '<input style="width: 48px;" type="text" disabled id="cc'+(i+1)+(j+1)+'"/>' ;
       Obj.txt+= eval('Fix(D' +Obj.index + '[i][j]) + "  "');
      }
       res += '<br/>'; Obj.txt+='\r\n';
      
  }


  }

res+='<br/><button class = "button2" id= "button4" onclick=expiters()>Развернуть</button><br/>';
    document.getElementById('matrix2').innerHTML = res;
    for (var i = 0; i < X; i++)
    { for (var j = 0; j < N; j++){
 
  if (Obj.checkstop==true){
  document.getElementById('cc'+(i+1)+(j+1)).value = eval('Fix(D' +Obj.index + '[i][j])');}
  else{
    document.getElementById('cc'+(i+1)+(j+1)).value = eval('Fix(D' + NN + '[i][j])');}
  }
}

}}
  

var res2='<br/>';
if(Obj.B==true){
res2+= '<br/><b>А так же мы умножаем полученную матрицу на вектор состояний, и получаем:</b><br/><br/>';
Obj.txt+='\r\nА так же мы умножаем полученную матрицу на вектор состояний, и получаем:\r\n\r\n';
 var resultat =Matrix(1,N);

for (var i = 0; i < 1; i++)
  {
 for (var j = 0; j < N; j++){
   B[i][j] = 1*document.getElementById('b'+(i+1)+(j+1)).value; 

}}

var C = Matrix(N,1); var D =Matrix(1,N);

 for (var j = 0; j < N; j++){
C[j][0]=B[0][j];

 }


if (Obj.checkstop==true){
resultat = multMatrix(eval('D'+ Obj.index),B);}
else{
  resultat = multMatrix(eval('D'+ NN),B); 
}


 for (var j = 0; j < N; j++)
  { res2 += '<input style="width: 58px;" type="text" disabled id="ddd'+(1)+(j+1)+'"/>' ;
Obj.txt+= Fix(resultat[0][j])+ '  ';
}

print('umnozh',res2);
  for (var j = 0; j < N; j++){
  document.getElementById('ddd'+(1)+(j+1)).value = Fix(resultat[0][j]);
 
 }

}

  } }
Obj.checked = false;
}




  
function vyvod(){
	Obj.alerttrue= false;
	var q = document.getElementById('checking2');

	if (!q){

    var div = document.createElement('div');
    div.className = "scrollbar";
    div.setAttribute("id", "scroll");
  
    var tablet = document.getElementById('button123');
    tablet.after(div);
    
    var scrolling = document.getElementById('scroll');

	var space= document.createElement('div');
	space.setAttribute("id", "SPACE");
  space.innerHTML= "<br/><br/>";
  
  var exp33= document.createElement('div');
  exp33.setAttribute("id", "checking2");
  
  var exp= document.createElement('div');
  exp.setAttribute("id", "matrix2");



	var a= document.createElement('a');
	a.setAttribute("id", "a");
  var umn= document.createElement('div');
  umn.setAttribute("id", "umnozh");

  scrolling.before(space);
 
  scrolling.append(exp);
  scrolling.append(exp33);
  scrolling.append(umn);

  scrolling.append(a);
	a.innerHTML = '<button id = "button13" onclick = "create()"> Скачать результат </button>';
  }


}
		
function create() {
  if (document.getElementById('matrix2')){
  text = Obj.txt;
 name = 'Markov.txt';
    
   type = 'text/plain';
  
 var a = document.getElementById("a");
 var file = new Blob([text], {type: type});
 a.href = URL.createObjectURL(file);
  a.download = name;}
  else {
    alert('Нету данных, введите сначала данные, чтобы вывести их в файл');
  }
}
	
function createMatrix2(obj)
{  
  Obj.B = true;
  if (Obj.checked == false){
    var first = checkFirst();
    if (first==true){
      
  obj.innerHTML='';
var res = '<br/><b>Матрица состояний</b><br/>';
var N = getSize();
Obj.N = N;
    Obj.X = document.getElementById('n').value*1;
var X=N; Obj.X =X;
	
    for (var i = 0; i < X; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="number" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	 res += '<b>Вектор состояний:</b><br/>';
	    for (var i = 0; i < 1; i++)
     { for (var j = 0; j < N; j++)
        { res += '<input style="width: 48px;" type="number" id="b'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
    print(obj,res);
    print ("button123", '<button class ="button2" onclick="Main()">ОК</button>');
}
}
else{
  

  var first = checkFirst();
  if (first==true){
  
obj.innerHTML='';
var A = Obj.A;
var B = Obj.entered;
var res = '<br/><b>Матрица состояний</b><br/>';
var N = Obj.N;
  Obj.X = document.getElementById('n').value*1;
var X=N; 

  for (var i = 0; i < N; i++)
   { for (var j = 0; j < N; j++)
      { res += '<input style="width: 48px;" type="number" id="a'+(i+1)+(j+1)+'"/>'; }
     res += '<br />';

   }
 res += '<b>Вектор состояний:</b><br/>';
  for (var j = 0; j < N; j++)
      { res += '<input style="width: 48px;" type="number" id="b'+(1)+(j+1)+'"/>'; }
     res += '<br />';
   
  print(obj,res);
  print ("button123", '<button class ="button2" onclick="Main()">ОК</button>');


  for (var i = 0; i < N; i++)
  { for (var j = 0; j < N; j++)
     { document.getElementById('a'+(i+1)+(j+1)).value=parseFloat(A[i][j]); }
    
  }

 
   for (var j = 0; j < N; j++)
     { document.getElementById('b'+(1)+(j+1)).value=parseFloat(Obj.entered[0][j]); }
    
}
}
}



if ( ! (window.File && window.FileReader && window.FileList && window.Blob)) {
  alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(evt) {
	//var deleted = document.getElementById('matrix1'); deleted.remove();
	Obj.checked = true;
    var file = evt.target.files[0];
    console.log(evt.target.files[0]);
    if (!file.type.match('text.*')) {
            return alert(file.name + " is not a valid text file.");
    }
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
       var textToArray = reader.result.split("\n").map(function(x){return x.split(",")});
var N = textToArray[0].length;	
var X = textToArray.length;	   var AA = Matrix(N,N); var D = Matrix(1,N);
	  if (N>1&&N<7&&isNaN(N)==false&&(X==N||X==N+1)){
      if (X==N){
       Obj.A= textToArray; 
		Obj.N = N;
      }
      if (X==N+1){

        for (i=0;i<N;i++){ for (j=0;j<N;j++){
          AA[i][j]=textToArray[i][j]; 
        }
        }
        for (i=0;i<N;i++){

          D[0][i]=parseFloat(textToArray[N][i]);
          }
        Obj.entered = D;
Obj.A = AA;
Obj.N= N;
      }
  }

      console.log(N);
      console.log(X);
if (N<1||N>6||isNaN(N)==true||(X!=N&&X!=N+1))
{
  if(X!=N||X!=N+1){
  alert ("Количество строк должно равняться количеству столбцов!");}
  else{ alert('Введите корректный файл!');}
}
else{
  if (X==N){
createMatrix('matrix1');}
else {
  createMatrix2('matrix1');
}
  }
     }
     document.getElementById("file").value = ""; 
 }

window.onload = function () {
 document.getElementById('file').addEventListener('change', handleFileSelect, false); 

}

function handleFileSelect2(evt) {
	//var deleted = document.getElementById('matrix1'); deleted.remove();
	Obj.checked = true;
    var file = evt.target.files[0];
    if (!file.type.match('text.*')) {
            return alert(file.name + " is not a valid text file.");
    }
  
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
       var textToArray = reader.result.split("\n").map(function(x){return x.split(",")});
var N = textToArray[0].length;	
var X = textToArray.length;	   var C = Matrix(N,N); var D = Matrix(1,N);
    console.log(textToArray);
for (i=0;i<N;i++){
for (j=0;j<N;j++){
C[i][j]=parseFloat(textToArray[i][j]);

}
}

console.log(typeof C[0][0]);

if(X!=N+1){
  alert ("Количество строк должно быть на 1 больше, чем кол-во столбцов!");}
for (i=0;i<N;i++){

D[0][i]=parseFloat(textToArray[N][i]);
}
console.log(typeof D[0][0]);

if (N>1&&N<7&&isNaN(N)==false&&X==N+1){
       Obj.A= C; 
    Obj.N = N;
    Obj.entered = D;
    
  }
   
			
if (N<1||N>6||isNaN(N)==true||X!=N+1)
{
  
   alert('Введите корректный файл!');
}
else{

createMatrix2('matrix1');}

     }
     document.getElementById("file2").value = ""; 
 }
 