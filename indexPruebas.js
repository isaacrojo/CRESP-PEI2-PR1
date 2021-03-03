//  Menu de hamburguesa desplegable 
var burgerIcon = document.getElementById("burger_icon");

var burgerOn = function (burgerMenu) {

    var menuButton = document.getElementById("burger_menu");
    var burgerMenu = document.getElementById("menu_options")

    //mostrar contenedor agregando la clase visible
    if (burgerMenu.className.indexOf("visible") === -1) {
        burgerMenu.className += " visible";
    }
    else {
        // strings no se puede modificar, asiganr de nuevo a variable: 
        burgerMenu.className = burgerMenu.className.replace("visible", ""); 
        
    }
}
burgerIcon.addEventListener("click", burgerOn);
//target.addEventListener(tipo, listener[, useCapture]);
// (tipo de evento),(Listener/objeto),(opcional..Si es true, useCapture indica que el usuario desea iniciar la captura.)

var form = document.getElementById("contact_form");

//Esta funcion recibe variable message que puede modificarse con comillas al llamarla 
var showErrorMessage = function (message) {

    var messageContainer = document.getElementById("message_danger"); //contenedor
    var messageText = document.getElementById("message_danger_text"); //texto

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    // Cambiar el texto del mensaje
    messageText.textContent = message;

}
var showFieldError = function () {
    var formLabels = document.getElementsById("field");
    //var formInput = document.getElementsByClassName("form-input");

    if (formLabels.className.indexOf("turn-red") === -1 ) {
        formLabels.className += " turn-red";
        //formInput.className += " turn-red";
    }
}

var sendButton = document.getElementById("send_button");

//sendButton.addEventListener("click", showFieldError);
//sendButton.addEventListener("click", showErrorMessage);
    
//valisend
var validateAndSend = function (e) {
    console.log("e", e); //para que no nos mande hasta arriba, no recargue
    //prevenir la funcionalidad default de un form (submit manual)
    e.preventDefault();
    console.log("validateAndSend");
    var nombre = inputNombre.value;
    var correo = inputCorreo.value;
    var mensaje = inputMensaje.value;
    console.log("nombre", nombre);
    console.log("mensaje", mensaje);
    console.log("correo", correo);

    //revisar que campos no esten null
    if (nombre === "" || correo === "" || mensaje === "" || formLabels.className.indexOf("turn-red") === -1 || formInput.className.indexOf("turn-red") === -1 ) {

        //marcarlo de color rojo junto con su label
        showFieldError();        
        showErrorMessage("Por favor introduce los datos requeridos.");
        return;
    }
}
form.addEventListener("submit", validateAndSend);