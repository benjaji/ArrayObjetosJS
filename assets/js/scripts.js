//ESTRUCTURA DE DATOS DE ACUERDO AL REQUERIMIENTO
let radiologia =
[
  {
    "HORA":"11:00:00 AM",
    "ESPECIALISTA":"IGNACIO SCHULZ",
    "PACIENTE":"FRANCISCA ROJAS",
    "RUT":"9878782-1",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"11:30:00 AM",
    "ESPECIALISTA":"FEDERICO SUBERCASEAUX",
    "PACIENTE":"PAMELA ESTRADA",
    "RUT":"15345241-3",
    "PREVISION":"ISAPRE",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"03:00:00 PM",
    "ESPECIALISTA":"FERNANDO WURTHZ",
    "PACIENTE":"ARMANDO LUNA",
    "RUT":"16445345-9",
    "PREVISION":"ISAPRE",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"03:30:00 PM",
    "ESPECIALISTA":"ANA MARIA GODOY",
    "PACIENTE":"MANUEL GODOY",
    "RUT":"17666419-0",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  },
  {
    "HORA":"04:00:00 PM"
    ,"ESPECIALISTA":"PATRICIA SUAZO",
    "PACIENTE":"RAMON ULLOA",
    "RUT":"14989389-K",
    "PREVISION":"FONASA",
    "AREA":"RADIOLOGIA"
  }

];
let traumatologia= [
{"HORA":"08:00:00 AM","ESPECIALISTA":"MARIA PAZ ALTUZARRA","PACIENTE":"PAULA SANCHEZ","RUT":"15554774-5","PREVISION":"FONASA","AREA":"TRAUMATOLOGIA"},
{"HORA":"10:00:00 AM","ESPECIALISTA":"RAUL ARAYA","PACIENTE":"ANGELICA NAVAS","RUT":"15444147-9","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"10:30:00 AM","ESPECIALISTA":"MARIA ARRIAGADA","PACIENTE":"ANA KLAPP","RUT":"17879423-9","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"11:00:00 AM","ESPECIALISTA":"ALEJANDRO BADILLA","PACIENTE":"FELIPE MARDONES","RUT":"1547423-6","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"11:30:00 AM","ESPECIALISTA":"CECILIA BUDNIK","PACIENTE":"DIEGO MARRE","RUT":"16554741-K","PREVISION":"FONASA","AREA":"TRAUMATOLOGIA"},
{"HORA":"12:00:00 PM","ESPECIALISTA":"ARTURO CAVAGNARO","PACIENTE":"CECILIA MENDEZ","RUT":"9747535-8","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"},
{"HORA":"12:30:00 PM","ESPECIALISTA":"ANDRES KANACRI","PACIENTE":"MARCIAL SUAZO","RUT":"11254785-5","PREVISION":"ISAPRE","AREA":"TRAUMATOLOGIA"}
];
let dental = [
{"HORA":"08:30:00 AM","ESPECIALISTA":"ANDREA ZUNIGA","PACIENTE":"MARCELA RETAMAL","RUT":"11123425-6","PREVISION":"ISAPRE","AREA":"DENTAL"},
{"HORA":"11:00:00 AM","ESPECIALISTA":"MARIA PIA ZANARTU","PACIENTE":"ANGEL MUNOZ","RUT":"9878789-2","PREVISION":"ISAPRE","AREA":"DENTAL"},
{"HORA":"11:30:00 AM","ESPECIALISTA":"SCARLETT WITTING","PACIENTE":"MARIO KAST","RUT":"7998789-5","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"01:00:00 PM","ESPECIALISTA":"FRANCISCO VON TEUBER","PACIENTE":"KARIN FERNANDEZ","RUT":"18887662-K","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"01:30:00 PM","ESPECIALISTA":"EDUARDO VINUELA","PACIENTE":"HUGO SANCHEZ","RUT":"17665461-4","PREVISION":"FONASA","AREA":"DENTAL"},
{"HORA":"02:00:00 PM","ESPECIALISTA":"RAQUEL VILLASECA","PACIENTE":"ANA SEPULVEDA","RUT":"14441281-0","PREVISION":"ISAPRE","AREA":"DENTAL"}
];


//RADIOLOGIA
//Buscar elementos en el DOM
let elTituloR = document.getElementById('titulo_rad');
let primeraAtencionRadiologia = document.getElementById('primera_at_rad');
let ultimaAtencionRadiologia = document.getElementById('ultima_at_rad');


//RECORRO CADA LISTADO MOSTRANDO EL NOMBRE DEL PACIENTE Y LA PREVISION DEL PRIMER Y ULTIMO REGISTRO
for(let i = 0 ; i< radiologia.length; i++)
{
  let mensaje1R = 'Primera Atencion: ';
  let mensaje2R = 'Ultima Atencion: ';
  let tituloAtencionR = '';
  if(i==0)
  {
    tituloAtencionR = radiologia[i]["AREA"];
    mensaje1R = mensaje1R + radiologia[i]["PACIENTE"]+"-"+radiologia[i]["PREVISION"];
    //enviamos los datos identificados al html
    elTituloR.innerHTML=tituloAtencionR;
    primeraAtencionRadiologia.innerHTML=mensaje1R;
    console.log(mensaje1R);
  }
  else if(i== (radiologia.length - 1)){
    tituloAtencionR = radiologia[i]["AREA"];
    elTituloR.innerHTML=tituloAtencionR;
    mensaje2R = mensaje2R + radiologia[i]["PACIENTE"]+"-"+radiologia[i]["PREVISION"];
    ultimaAtencionRadiologia.innerHTML = mensaje2R;
    console.log(mensaje2R);
  }
}




//TRAUMATOLOGIA
//Buscar elementos en el DOM
let elTituloT = document.getElementById('titulo_trau');
let primeraAtencionTraumatologia = document.getElementById('primera_at_trau');
let ultimaAtencionTraumatologia= document.getElementById('ultima_at_trau');


//RECORRO CADA LISTADO MOSTRANDO EL NOMBRE DEL PACIENTE Y LA PREVISION DEL PRIMER Y ULTIMO REGISTRO
for(let i = 0 ; i< traumatologia.length; i++)
{
  let mensaje1T = 'Primera Atencion: ';
  let mensaje2T = 'Ultima Atencion: ';
  let tituloAtencionT = '';
  if(i==0)
  {
    tituloAtencionT = traumatologia[i]["AREA"];
    mensaje1T = mensaje1T + traumatologia[i]["PACIENTE"]+"-"+traumatologia[i]["PREVISION"];
    //enviamos los datos identificados al html
    elTituloT.innerHTML=tituloAtencionT;
    primeraAtencionTraumatologia.innerHTML=mensaje1T;
    console.log(mensaje1T);
  }
  else if(i== (traumatologia.length - 1)){
    tituloAtencionT = traumatologia[i]["AREA"];
    elTituloT.innerHTML=tituloAtencionT;
    mensaje2T = mensaje2T + traumatologia[i]["PACIENTE"]+"-"+traumatologia[i]["PREVISION"];
    ultimaAtencionTraumatologia.innerHTML = mensaje2T;
    console.log(mensaje2T);
  }
}



//CICLO PARA CREAR LA TABLA radiologia
//buscamos la tabla en el DOM
let tablaR = document.getElementById('tablaRadiologia');

//variable para los encabezados y las filas/columnas creadas dinamicamente por el ciclo for
let textoRadiologia = "<tr><th>HORA</th> <th>ESPECIALISTA</th> <th>PACIENTE</th> <th>RUT</th> <th>PREVISION</th> <th>AREA</th>  </tr>";

for(let i=0;i<radiologia.length;i++ )
{
  textoRadiologia +=
  `
  <tr>
      <td>${radiologia[i]["HORA"]}</td>
      <td>${radiologia[i]["ESPECIALISTA"]}</td>
      <td>${radiologia[i]["PACIENTE"]}</td>
      <td>${radiologia[i]["RUT"]}</td>
      <td>${radiologia[i]["PREVISION"]}</td>
      <td>${radiologia[i]["AREA"]}</td>
  </tr>
  `;
}

tablaR.innerHTML = textoRadiologia;



//CICLO PARA CREAR LA TABLA traumatologia
//buscamos la tabla en el DOM
let tablaT = document.getElementById('tablaTraumatologia');

//variable para los encabezados y las filas/columnas creadas dinamicamente por el ciclo for
let textoTraumatologia = "<tr><th>HORA</th> <th>ESPECIALISTA</th> <th>PACIENTE</th> <th>RUT</th> <th>PREVISION</th> <th>AREA</th>  </tr>";

for(let i=0;i<traumatologia.length;i++ )
{
  textoTraumatologia +=
  `
  <tr>
      <td>${traumatologia[i]["HORA"]}</td>
      <td>${traumatologia[i]["ESPECIALISTA"]}</td>
      <td>${traumatologia[i]["PACIENTE"]}</td>
      <td>${traumatologia[i]["RUT"]}</td>
      <td>${traumatologia[i]["PREVISION"]}</td>
      <td>${traumatologia[i]["AREA"]}</td>
  </tr>
  `;
}

tablaT.innerHTML = textoTraumatologia;
