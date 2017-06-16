//Validación de formulario y llamada a html "collage":

var boton = document.getElementById("boton-inicio");
boton.addEventListener("click", function() {
	var usuario = document.getElementById("username");
	var password = document.getElementById("password");	

	var usuarioOk = document.getElementsByClassName("input-group")[0];
	var passwordOk = document.getElementsByClassName("input-group")[1];

	var miBoton = document.getElementsByClassName("boton")[0];

	if (usuario.value == "") {
		var respuestaUser = document.createElement("span");  
      	respuestaUser.classList.add("s-span")
      	var textoUs = document.createTextNode("Ingrese un usuario, por favor.");
      	respuestaUser.appendChild(textoUs);   
      	usuarioOk.appendChild(respuestaUser);
	} else {
		miBoton.setAttribute("href","collage.html");
	}

	if ((password.value == "") || (password.value == 123456) || (password.value.length < 5) || (password.value.length > 7 )) {
		var respuestaPass = document.createElement("span");  
      	respuestaPass.classList.add("s-span")
      	var textoPs = document.createTextNode("Ingrese una contraseña, por favor.");
      	respuestaPass.appendChild(textoPs);   
      	passwordOk.appendChild(respuestaPass);
	} else {
		miBoton.setAttribute("href","collage.html");
	}

})