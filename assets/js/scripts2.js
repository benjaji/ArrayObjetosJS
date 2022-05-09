let automovil =
{
  marca: {
    nombre: 'Mazda',
    origen: 'Japon'
  },
  modelo: '3 sport',
  patente: 'LJKH63',
  color: 'azul',
  kilometraje: : 15000,
  usado: false,
  encender: function(){
    alert('Automovil encendido');
  },
  apagar: function(){
    alert('Automovil apagado');
  }

};
//notacion 1 para acceder a sus propiedades
console.log(automovil.marca.nombre);
alert(automovil.marca.nombre);

console.log(automovil['marca']['nombre']);
alert(automovil['marca']['nombre']);
//notacion 2 para acceder a sus propiedades
console.log(automovil['kilometraje']);
// invocamos el metodo encender
automovil.encender();
//invocamos el metodo apagar mediante la notacion2
automovil['apagar']();

automovil.kilometraje = 45000;
console.log(automovil.kilometraje);
