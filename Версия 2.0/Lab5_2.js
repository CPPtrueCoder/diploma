Obj={

  A:'', checked:false
}

function print (obj, txt){
	 
  document.getElementById(obj).innerHTML = txt;
  
}

function vyvod (){

  var q = document.getElementById('podpis');

  if (!q){

	var div = document.createElement('div');
	div.className = "scrollbar";
  div.setAttribute("id", "scroll");
  
  var tablet = document.getElementById('button123');
  tablet.after(div);
  
 
	
	var mxx = document.createElement('div');
		mxx.setAttribute("id", "podpis");

	var mxy = document.createElement('div');
    mxy.setAttribute("id", "podpis2");
    
    var space= document.createElement('div');
    space.setAttribute("id", "SPACE");
    space.innerHTML= "<br/><br/><br/>";

    var m311 = document.createElement('div');
    m311.setAttribute("id", "reshenie");

    div.before(space);
    div.append(mxx);
    div.append(mxy);
    div.append(m311);}

}

function createMatrix(obj)
{   
var res = 'Матрица №1<br/>';
	size = document.getElementById('s3'),
    X = size.value*1;
	
	size2 = document.getElementById('s4'),
    n = size2.value*1;
	
    for (var i = 0; i < 2; i++)
     { for (var j = 0; j < X; j++)
		
        { res += '<input style="width: 48px;" type="text" id="a'+(i+1)+(j+1)+'"/>'; }
       res += '<br />';
     }
	
  
    print (obj, res);
      print ("button123", '<button class ="button2" onclick="Main()">ОК</button>');
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
       
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function EnterMatrix()
{

    var A = [], size = document.getElementById('s3'),
   X = size.value*1;
	
	size2 = document.getElementById('s4'),
    n = size2.value*1;
	
  for (var i = 0; i < 2; i++)
     { A[i] = [];
       for (var j = 0; j < X; j++)
        { A[i][j] = 1*document.getElementById('a'+(i+1)+(j+1)).value; }
     }
	  var XX = A[0]; var p = [];
	  
	  if (X==3){
	  p = [0,A[1][0],A[1][0]+A[1][1],A[1][0]+A[1][1]+A[1][2]];
	  }
	  
	  if (X==4){
	  p = [0,A[1][0],A[1][0]+A[1][1],A[1][0]+A[1][1]+A[1][2],A[1][0]+A[1][1]+A[1][2]+A[1][3]];
	  }
	  	  
	  if (X==5){
	  p = [0,A[1][0],A[1][0]+A[1][1],A[1][0]+A[1][1]+A[1][2],A[1][0]+A[1][1]+A[1][2]+A[1][3],A[1][0]+A[1][1]+A[1][2]+A[1][3]+A[1][4]];
    }
    if (X==6){
      p = [0,A[1][0],A[1][0]+A[1][1],A[1][0]+A[1][1]+A[1][2],A[1][0]+A[1][1]+A[1][2]+A[1][3],A[1][0]+A[1][1]+A[1][2]+A[1][3]+A[1][4],A[1][0]+A[1][1]+A[1][2]+A[1][3]+A[1][4]+A[1][5]];
      }
      console.log(p);
	print('podpis2',p);
	
	var y = [], x1= [], x2 = [];
	res = "<br/><br/>";
	
	
		if (X==3){
	
	for (var j=0; j<n; j++)
{

y[j]= [getRandomFloat(0,1), getRandomFloat(0,1)];

if (y[j][0]>p[0] && y[j][0]<p[1]){  
x1[j]=A[0][0];
}
if (y[j][1]>p[0] && y[j][1]<p[1]){  
x2[j]=A[1][0];
}

if (y[j][0]>p[1] && y[j][0]<p[2]){  
x1[j]=A[0][1];
}
if (y[j][1]>p[1] && y[j][1]<p[2]){  
x2[j]=A[1][1];
}

if (y[j][0]>p[2] && y[j][0]<p[3]){  
x1[j]=A[0][2];
}
if (y[j][1]>p[2] && y[j][1]<p[3]){  
x2[j]=A[1][2];
}

		}}
	
	
		if (X==4){
	
	for (var j=0; j<n; j++)
{

y[j]= [getRandomFloat(0,1), getRandomFloat(0,1)];

if (y[j][0]>p[0] && y[j][0]<p[1]){  
x1[j]=A[0][0];
}
if (y[j][1]>p[0] && y[j][1]<p[1]){  
x2[j]=A[1][0];
}

if (y[j][0]>p[1] && y[j][0]<p[2]){  
x1[j]=A[0][1];
}
if (y[j][1]>p[1] && y[j][1]<p[2]){  
x2[j]=A[1][1];
}

if (y[j][0]>p[2] && y[j][0]<p[3]){  
x1[j]=A[0][2];
}
if (y[j][1]>p[2] && y[j][1]<p[3]){  
x2[j]=A[1][2];
}

if (y[j][0]>p[3] && y[j][0]<p[4]){  
x1[j]=A[0][3];
}
if (y[j][1]>p[3] && y[j][1]<p[4]){  
x2[j]=A[1][3];
		
}}
		
}

	if (X==5){
	
	for (var j=0; j<n; j++)
{

y[j]= [getRandomFloat(0,1), getRandomFloat(0,1)];

if (y[j][0]>p[0] && y[j][0]<p[1]){  
x1[j]=A[0][0];
}
if (y[j][1]>p[0] && y[j][1]<p[1]){  
x2[j]=A[1][0];
}

if (y[j][0]>p[1] && y[j][0]<p[2]){  
x1[j]=A[0][1];
}
if (y[j][1]>p[1] && y[j][1]<p[2]){  
x2[j]=A[1][1];
}

if (y[j][0]>p[2] && y[j][0]<p[3]){  
x1[j]=A[0][2];
}
if (y[j][1]>p[2] && y[j][1]<p[3]){  
x2[j]=A[1][2];
}

if (y[j][0]>p[3] && y[j][0]<p[4]){  
x1[j]=A[0][3];
}
if (y[j][1]>p[3] && y[j][1]<p[4]){  
x2[j]=A[1][3];
		
}
if (y[j][0]>p[4] && y[j][0]<p[5]){  
x1[j]=A[0][4];
}
if (y[j][1]>p[4] && y[j][1]<p[5]){  
x2[j]=A[1][4];
		
}}}

if (X==6){
	
	for (var j=0; j<n; j++)
{

y[j]= [getRandomFloat(0,1), getRandomFloat(0,1)];

if (y[j][0]>p[0] && y[j][0]<p[1]){  
x1[j]=A[0][0];
}
if (y[j][1]>p[0] && y[j][1]<p[1]){  
x2[j]=A[1][0];
}

if (y[j][0]>p[1] && y[j][0]<p[2]){  
x1[j]=A[0][1];
}
if (y[j][1]>p[1] && y[j][1]<p[2]){  
x2[j]=A[1][1];
}

if (y[j][0]>p[2] && y[j][0]<p[3]){  
x1[j]=A[0][2];
}
if (y[j][1]>p[2] && y[j][1]<p[3]){  
x2[j]=A[1][2];
}

if (y[j][0]>p[3] && y[j][0]<p[4]){  
x1[j]=A[0][3];
}
if (y[j][1]>p[3] && y[j][1]<p[4]){  
x2[j]=A[1][3];
		
}
if (y[j][0]>p[4] && y[j][0]<p[5]){  
x1[j]=A[0][4];
}
if (y[j][1]>p[4] && y[j][1]<p[5]){  
x2[j]=A[1][4];
		
}
if (y[j][0]>p[5] && y[j][0]<p[6]){  
  x1[j]=A[0][5];
  }
  if (y[j][1]>p[5] && y[j][1]<p[6]){  
  x2[j]=A[1][5];

}}}


for (var w= 0; w<n; w++)
{
res+= "Опыт №" + (w+1) + " = " + x1[w] + " / " +x2[w] + "<br/>";
}
res+="<br/>";
for (var i=0; i<n; i++){

rj = [];
rj [i] = (x1[i]+x2[i])/ 2;
res+= "rj ("+ (i+1)+ ") =" + rj[i] + "<br/>";
}
var sredn_rh = 0;

for (var a=0; a<n; a++)
{
sredn_rh = sredn_rh + x1[a]+x2[a];

} 
var rh = sredn_rh/(n*2);
res+="<br/>X штрих общий= <br/> " + rh;
document.getElementById('podpis2').innerHTML = res;


}

function Fix(num){
  const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
  if (f(num)<5){
  return num.toFixed(f(num));}
  else{
    return num.toFixed(5);

  }
  }