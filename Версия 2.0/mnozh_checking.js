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
Obj.N = textToArray[0].length;	  
	  if ((Obj.N>2)&&(Obj.N<7)){
       Obj.A= textToArray;
		
		Obj.X = textToArray.length; }
	   
			
if ((Obj.N<3)||(Obj.N>7))
{
	alert ("Введите Правильный файл");
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

function podskazka2(){
	if (!document.getElementById('legend2')){
	var txt2 = '';
	txt2+= '<img id = "legend2" src="img/mnozh.png" width ="40%" height ="35%" alt="Картинки не поддерживаются в вашем браузере">';
	
	print('legendary2',txt2) 
	}else {
		print ('legendary2','');
	}
	
}