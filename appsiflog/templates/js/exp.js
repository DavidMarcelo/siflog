function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
const $expExcel = document.querySelector("#expExcel");
$tabla = document.querySelector("#tabla");
$expExcel.addEventListener("click", function(){
    console.log('Aqui');
    //Creamos un Elemento Temporal en forma de enlace
    var tmpElemento = document.createElement('a');
    // obtenemos la información desde el div que lo contiene en el html
    // Obtenemos la información de la tabla
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('tabla');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + tabla_html;
    //Asignamos el nombre a nuestro EXCEL
    tmpElemento.download = 'Nombre_De_Mi_Excel.xls';
    // Simulamos el click al elemento creado para descargarlo
    tmpElemento.click();
});

//var hora = new Date();
//var gethora = hora.getHours();
//var getMinuto = hora.getMinutes();
console.log(suma);
var temp = 600000;
minuto();
function fgm(){
    console.log('hola');
    var h = new Date();
    var getMinuto = h.getMinutes();
    return getMinuto;
}

function minuto(getMinuto){
    console.log('Temp: ',temp);
    setTimeout(function() {
        getMinuto = fgm();
    }, temp);
    if (getMinuto>50){
        if (getMinuto==59){
            activar();
            minuto();
        }
    }else{
        console.log('else');
        setTimeout(function() {
            getMinuto = fgm();
        }, temp);
    }
}
var horaEntrada;
var horaSalida;
var horaExtra;
var suma = 60000 * 60;
//activar();
const saludar = (nombre, edad) => {
    activar();
    console.log('Hola ${nombre} tu edad es de ${edad}');
    //Funcion para guardar en la base de datos.
};
// Llamar a saludar y pasarle argumentos
function activar(){
    if (gethora == horaEntrada){
        //Definir la hora de entrada
    }
    if(gethora == horaSalida){
        //Definir la hora de salida
    }
    if (gethora > horaSalida){
        //Contador de horas extras del trabajador
        horaExtra = gethora - horaSalida;
        getMinuto = hora.getMinutes();
    }
    setTimeout(function() {
        saludar("Luis", 21);
    }, suma);
}

/*$expExcel.addEventListener("click", function(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    
    dd = addZero(dd);
    mm = addZero(mm);

    console.log(dd+'/'+mm+'/'+yyyy);
    let tablaExp = new TableExport($tabla, {
        exportButtons: false,
        filename: "Nombre del archivo excel",
        sheetname: "Mi tabla excel",
    })
    let datos = tablaExp.getExportData();
    let preferenciasDocumento = datos.tabla.xlsx;
    tablaExp.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});*/