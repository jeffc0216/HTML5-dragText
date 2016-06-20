var file;
var fileReader;

function doFirst(){
	document.getElementById('dropZone').ondragover = dragOver;
	document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	file = e.dataTransfer.files[0];
	document.getElementById('fileName').innerHTML = file.name;
	
	fileReader = new FileReader();
	fileReader.readAsText(file);
	fileReader.onload = function(){
		document.getElementById('fileContent').value = fileReader.result;
	};

}

window.addEventListener('load', doFirst, false);