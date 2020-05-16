function Main()
{
	 
		var check = checking();  
	var second = checkSecond();
	if (check == true&&second==true){
		
		
		
var A =EnterMatrix();
var N= Obj.N;
	var X= Obj.X;
	
	var q=vyvod();
	var KohrenTabl = kohrentable();
	var StudentTabl = studenttable();
	var FisherTabl = fishertable();
	printMatrix();
	var x_t = transpX();
	var Y = ySredn();
		
	var B = koeffs();
	var srednee2 = sredn();
	var Su2=su2();var yteor = Yteor();
	checkcoeffs();
	model();
	var alertcheck = checkingalert();
	Obj.znak='';
}
}