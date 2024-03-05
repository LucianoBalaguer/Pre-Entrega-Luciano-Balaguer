//varaibles alojadas

function informacionDePrendas(nombre,primerPrecio,segundoPrecio,tercerPrecio,material,descuento){
    this.nombre= nombre,
    this.primerPrecio= primerPrecio,
    this.segundoPrecio= segundoPrecio,
    this.tercerPrecio= tercerPrecio,
    this.material= material 
    this.descuento= descuento
};

const array = [
  //Informacion de la seccion Masculina
  new informacionDePrendas("Remeras",15500,13000,17700,"algodon","descuento"),
  new informacionDePrendas("Bermudas", 20500, 14000, 18700, "algodon", ""),
  new informacionDePrendas("mayas", 19500, 13000, 18200, "nailon", "descuento"),
  //Informacion de la seccion Femenina
  new informacionDePrendas("Remeras",18500,22500,20222,"algodon","descuento"),
  new informacionDePrendas("joggins", 21500, 27500, 20850, "nailon", ""),
  new informacionDePrendas("camperas",32500,42750,25200,"cuero","descuento"),
];

// FUNCIONES =

//Primera funcion de cobro

function CobrarSinDescuento(opreacion) {
  switch (opreacion) {
    case true:
      return (precio) => (saldoCuenta = saldoCuenta - precio);
    default:
      return "opracion no valida"; //esto es por si ingresas un valor que no es + ni -
  }
}

const alojarPrimeraFuncionDeCobro = CobrarSinDescuento(true); //En esta funcion mayor estoy solicitando la funcion de restar dos valores y devolverme la resta...

//segunda funcion de cobro con descuento

function CobrarConDescuento(opreacion) {
  switch (opreacion) {
    case true:
      return (precio) =>
        (saldoCuenta = saldoCuenta - (precio - (precio * 20) / 100));
    default:
      return "opracion no valida"; //esto es por si ingresas un valor que no es + ni -
  }
}

const alojarSegundaFuncionDeCobro = CobrarConDescuento(true); //En esta funcion mayor estoy solicitando la funcion de restar dos valores y devolverme la resta...

//Primera funcion de filtrar por material
function porMaterial(material) {
  let filtrado = array2.filter((el) => {
    return el.material == material;
  });
  console.log(filtrado);

  filtrado.forEach((el) => {
    alert(el.nombre + " y su valor es de: " + el.primerPrecio);
    switch (
      prompt(
        "Ingrese la opcion C si desea comprar la prenda o N si desea continuar con el siguiente modelo"
      )
    ) {
      case "C":
        alert(
          "La compra fue procesada, su saldo restante es de: " +
            alojarPrimeraFuncionDeCobro(el.primerPrecio)
        );
        break;
      case "N":
    }
  });
}

//Segunda funcion de filtrar por las prendas que tengan descuento
function porDescuento(descuento) {
  let filtrado = array2.filter((el) => {
    return el.descuento.includes(descuento);
  });
  console.log(filtrado);

  filtrado.forEach((el) => {
    alert(
      el.nombre +
        ", su valor es de: " +
        el.primerPrecio +
        " y su descuento del 20%"
    );
    switch (
      prompt(
        "Ingrese la opcion C si desea comprar la prenda o N si desea continuar con el siguiente modelo"
      )
    ) {
      case "C":
        alert(
          "La compra fue procesada, su saldo restante es de: " +
            alojarSegundaFuncionDeCobro(el.primerPrecio)
        );
        break;
      case "N":
    }
  });
}

//Funcion de CONFIRMAR COMPRA 

function confirmarCompra(varaibleDeConfirmacion){

    while (varaibleDeConfirmacion != "C"){
      //condicion de salida
      varaibleDeConfirmacion= prompt(  "... Introdusca C- para confirmar la compra");
    }
    
}

//Inicio de sesión
for (let i = 0; i < 3; i++) {
    let email = prompt("REZARROWS || sing in\nIngrese el correo para registrarse: ");
    let password = prompt("Ingrese una contraseña: ");
    let confirmPassword = prompt("Vuelva a ingresar la misma contraseña: ");
  
    if (password === confirmPassword) {
      alert("¡Perfecto, pudiste ingresar con éxito!");
      break; // Sale del bucle si la contraseña es correcta
    } else {
      alert(
        "Las contraseñas no coinciden. Te quedan " + (2 - i) + " intentos más."
      );
  
      if (i === 2) {
        alert("Has agotado tus intentos. La contraseña no coincide. ¡Adiós!");
      }
    }
  }
  

//Bienvenida (USUARIO)
let nombre = prompt("REZARROWS || Lobby\nIngrese su nombre y apellido para empezar a navegar...");
alert("Bienvenido " + nombre + " a la familia más grande de ropa deportiva");
let saldoCuenta = parseInt(prompt("REZARROWS || Bank\nIngrese su saldo $$"));

let genero = prompt("REZARROWS || Lobby\nSeleccione el genero de ropa para navegar. Ingrese... \n-M para masculino \n-F para femenino \n-P para filtrar productos ");

//Seccion de FILTRADO
if(genero == "P" || genero == "p")
switch (prompt("Tienes las siguientes opciones para filtrar informacion:\npor material(Ingresa material) \npor descuento(ingresa descuento)")){ 
    case "material":
        let material = prompt("Ingrese el tipo de material... \n algodon \nnailon \ncuero");
        porMaterial(material);
    break;

    case "descuento":
        porDescuento("descuento");
    break;
}
//seccion MASCULINA
if (genero == "M" || genero == "m") {
  alert("Ingreso a la seccion Masculina");
  let selecion = prompt(
    "Seleccione el tipo de prenda deseada: \n1-Remeras \n2-Bermudas \n3-Mayas"
  );

  switch (selecion) {
    case "1":
      alert("Selecciono Remeras");
      let selecionarModelo1 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $17.700");

      switch (selecionarModelo1) {
        case "1":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[0].primerPrecio));
          selecionarModelo1 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo1)
        break;

        case "2":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[0].segundoPrecio));
          selecionarModelo1 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo1)
        break;

        case "3":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " +alojarPrimeraFuncionDeCobro(array[0].tercerPrecio));
          selecionarModelo1 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo1)
        break;
        }
        alert("Hasta la proxima!");

    break;

    case "2":
      alert("Selecciono Bermudas");
      let selecionarModelo2 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $20.500 \n2° modelo / $14.000 \n3° modelo / $18.700");

      switch (selecionarModelo2) {
        case "1":alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[1].primerPrecio));
          selecionarModelo2 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo2)
        break;

        case "2":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[1].segundoPrecio));
          selecionarModelo2 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo2)
        break;

        case "3":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[1].tercerPrecio));
          selecionarModelo2 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo2)
        break;
        }
        alert("Hasta la proxima!");

    break;

    case "3":
      alert("Selecciono Mayas");
      let selecionarModelo3 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $15.500 \n2° modelo / $13.000 \n3° modelo / $18.200");

      switch (selecionarModelo3) {
        case "1":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[2].primerPrecio));
          selecionarModelo3 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo3) 
        break;

        case "2":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[2].segundoPrecio));
          selecionarModelo3 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo3)
        break;

        case "3":
          alert("Seleccionaste la prenda deseada!");
          alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[2].tercerPrecio));
          selecionarModelo3 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
          confirmarCompra(selecionarModelo3)
        break;
        }
        alert("Hasta la proxima!");

    break;
  }
} else {
  //seccion Femenina
  if (genero == "F" || genero == "f") {
    alert("Ingreso a la seccion Femenina");
    let selecionarModelo4 = prompt("Seleccione el tipo de prenda deseada: \n1-Remeras manga larga \n2-joggins \n3-camperas");

    switch (selecionarModelo4) {

      case "1":
        alert("Selecciono Remeras manga larga");
        let selecionarModelo4 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $18.500 \n2° modelo / $22.500 \n3° modelo / $20.222");

        switch (selecionarModelo4) {

          case "1":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[3].primerPrecio));
                selecionarModelo4 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo4)
            break;

          case "2":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " +alojarSegundaFuncion(array[3].segundoPrecio));
                selecionarModelo4 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo4)
            break;

          case "3":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[3].tercerPrecio));
                selecionarModelo4 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo4)
            break;
        }
        alert("Hasta la proxima!");

        break;

      case "2":
        alert("Selecciono Joggins");
        let selecionarModelo5 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $21.500 \n2° modelo / $27.500 \n3° modelo / $20.850");

        switch (selecionarModelo5) {

          case "1":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[4].primerPrecio));
                selecionarModelo5 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo5)
            break;

          case "2":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(Jarray[4].segundoPrecio));
                selecionarModelo5 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo5)
            break;

          case "3":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[4].tercerPrecio));
                selecionarModelo5 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo5)
            break;
        }
        alert("Hasta la proxima!");
        break;

      case "3":
        alert("Selecciono Camperas");
        let selecionarModelo6 = prompt("Seleccione uno de los siguientes modelos a comprar \n1° modelo / $32.500 \n2° modelo / $42.750 \n3° modelo / $25.200");

        switch (selecionarModelo6) {

          case "1":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[5].primerPrecio));
                selecionarModelo6 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo6)
            break;

          case "2":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " +alojarPrimeraFuncionDeCobro(array[5].segundoPrecio));
                selecionarModelo6 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo6)
            break;

          case "3":
                alert("Seleccionaste la prenda deseada!");
                alert("el precio de la prenda se desconto con exito de su cuenta!\nsu saldo queda en: " + alojarPrimeraFuncionDeCobro(array[5].tercerPrecio));
                selecionarModelo6 = prompt("... Introdusca C- para confirmar la compra y cerrar la tienda");
                confirmarCompra(selecionarModelo6)
            break;
        }
        alert("Hasta la proxima!");
        break;
    }
  }
}
