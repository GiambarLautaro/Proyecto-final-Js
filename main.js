// FUNCION con control de flujo

function mainUserData(name, surname, language) {
  let msg1 = "";
  if (language == "english") {
    alert(
      "hello, we are currently working on adding more languages to our platform"
    );
  } else {
    alert(
      "Bienvenido, estamos trabajando para añadir diferentes idiomas a nuestro sitio web"
    );
  }

  let msg2 = "";
  if (language == "english") {
    msg2 = "We are happy to help you ";
  } else {
    msg2 = "Es un gusto ayudarte ";
  }

  alert(msg1 + " " + name + " " + surname + " " + msg2);
}

mainUserData("Lautaro", "Giambartolomei", "español");



// OBJETOS y funcion con objeto

function program(name, price, profitTarget ){
  this.name = name;
  this.price = price;
  this.profitTarget = profitTarget;
  }
  
  const program1 = new program ("InstantFunding", "$270", "6% of account")
  const program2 = new program ("ToTheMoonAndBeyond" , "$1500", "6% of account")
  const program3 = new program ("bootcamp","$30","18% of account")

  console.log(program1)
  console.log(program2)
  console.log(program3)


// objeto con variable y prompt

  class ClientHelp{
        constructor(countryZone, program){
            this.countryZone = countryZone;
            this.program = program;
        }
        isAvailable(time){
            if (((time  >= 8) && (time  <= 12))||((time >= 15) && (time <= 19))) {
                return true;
            }
            return false;
        }
    }
    const ClientHelp1 = new ClientHelp("LatinAmerica,InstantFunding");
    for (let index = 0; index < 1 ; index++) {
        let entrada = parseInt(prompt("Enter Time, Please "));
        if(ClientHelp1.isAvailable(entrada)){
            alert("Client help is Available for consulting about InstantFunding Program at "+entrada)
        }else{
            alert("Client help is NOT Available for consulting about InstantFunding Program at "+entrada)
        }
    }

  // ARRAY

let programs = ["Bootcamp","ToTheMoonAndBeyond","InstantFunding"]
alert("we have different options for you regarding trading programs")
alert( programs)

// FUNCION ORDEN SUPERIOR (almacenar informacion de los distintos examenes de trading en el local storage)

class Evaluation {
  constructor(nombre, precioUsd, PrecioArs, limiteDias) {
      this.nombre = nombre;
      this.precio = parseFloat(precioUsd);
      this.PrecioArs = parseFloat(PrecioArs)
      this.limiteDias = parseInt(limiteDias);
  }
}
const Evaluations = [];
Evaluations.push(new Evaluation("InstantFunding", 270, 76950 ,180));
Evaluations.push(new Evaluation("TotheMoonAndBeyond", 1500,427500 , 365));
Evaluations.push(new Evaluation("Bootcamp", 30, 8550, 365));

localStorage.setItem('evaluations', JSON.stringify(Evaluations));




