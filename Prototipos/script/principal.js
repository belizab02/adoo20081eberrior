function ingresar(){
	var usuario = document.getElementById("usuario");	
	var clave = document.getElementById("clave");	
	if(usuario && clave && usuario.value !='' && clave.value !=''){
		location.href='html/principal.html';
	}else{
		alert('Ingrese el usuario y clave');
	}
}

function calendario(campo){
	alert('Se muestra el calendario donde podrá seleccionar la fecha.');
	var fecha = fechaActual();
	document.getElementById(campo).value = fecha;
}

function filtrar(){
	alert('Se muestra una lista con todos los bug que correspondan a las opciones de filtro seleccionadas.');
	location.href='filtro.html';
}

function consultar(codigo){
	alert('Se muestra el historial del bug seleccionado.');
	location.href='consulta.html';
}

function exportar(){
	alert('Se exporta a excel la lista de bugs.');
	//location.href='principalFiltro.html';
}

function numero(campo){ 
	var tam = campo.value.length;
      if (isNaN(campo.value)) { 
	  	campo.value = campo.value.substring(0,tam-1);
		alert("Debe ingresar solo numeros positivos");
      }
}

function adjuntar(){
	alert('Se selecciona archivo y se adjunta.');
}

function guardar(url){
	alert('Se guardaron correctamente los datos.');
	location.href=url;
}

function modificarUsuario(){
	var tipo = document.getElementById("tipo");	
	var numero = document.getElementById("numero");	
	if(tipo && numero && tipo.value !=0  && numero.value != ''){
		location.href='usuarioModif.html';
	}else{
			alert('Debe seleccionar un tipo de identificación e ingresar un número de identificación.');
	}	
}

function modificarProyecto(){
	var proyecto = document.getElementById("proyecto");	
	if(proyecto && proyecto.value !=0){
		location.href='proyectoModif.html';
	}else{
			alert('Debe seleccionar un proyecto.');
	}	
}

function estadoAsignado(){
	var estado = document.getElementById('estado').value;
	if(estado == 2){
		document.getElementById('usuarios').className='mostrar';
	}else{
		document.getElementById('usuarios').className='noMostrar'; 
	}
}

function cerrar(){	
	alert('Se ha cerrado correctamente el bug.');
	var fecha = fechaActual();
	document.getElementById("feCierre").value=fecha;	
	document.getElementById("estado").value='Cerrado';	
}

function fechaActual(){
	var mydate=new Date();
	var year=mydate.getYear();
	if (year < 1000)
		year+=1900;
	var day=mydate.getDay();
	var month=mydate.getMonth()+1;
	if (month<10)
		month="0"+month;
	var daym=mydate.getDate();
	if (daym<10)
		daym="0"+daym;
	
	var fecha = year+'/'+month+'/'+daym;
	return fecha;
}

