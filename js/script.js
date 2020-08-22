
let produtos = [];

function validarCampos(){

    if(document.getElementById("txtCodigo").value == ""){

        alert("El campo Codigo no debe estar vacio");
        return false;
    }
    else if(document.getElementById("txtNombre").value == ""){

        alert("El campo Nombre no debe estar vacio");
        return false;
    }
    else if(document.getElementById("txtPrecio").value == ""){

        alert("El campo Precio no debe estar vacio");
        return false;
    }
    /*else if(document.getElementById("fileImage").value == ""){

        alert("El campo Imagen no debe estar vacio");
        return false;
    }*/
    else {
        return true;
    }

}

function Producto(codigo, nombre, precio){

    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    /*this.imagen = imagen;*/

}

function addProductArray(){

    var codigo = document.getElementById("txtCodigo").value;
    var nombre = document.getElementById("txtNombre").value;
    var precio = document.getElementById("txtPrecio").value;
    /*var imagen = document.getElementById("fileImage").value;*/

    var product = new Producto(codigo, nombre, precio);
    
    produtos.push(product);

}

function poblarTabla(){

    var scriptTable = "";

    for (let index = 0; index < produtos.length; index++) {
        
        scriptTable += "<tr>";
        scriptTable += "<td>" + produtos[index].codigo + "</td>";
        scriptTable += "<td>" + produtos[index].nombre + "</td>";
        scriptTable += "<td>" + produtos[index].precio + "</td>";
        scriptTable += "<td>" + "<img src='../images/milhoja.jpg' id='imgProducto' alt='imagen'></img>" + "</td>";
        scriptTable += "</tr>";

        document.getElementById("tbCatalogo").innerHTML = scriptTable;

    }

}

$("#btnAddProducto").click(function(){

    addProducto();

})

function addProducto(){

    if(validarCampos() == false){
        return false;
    }

    addProductArray();

    poblarTabla();

}

$("#btnMenos").click(function(){

    var contador = document.getElementById("txtcont").textContent;
    var precio = document.getElementById("txtprecio").textContent;
    
    if(parseInt(contador) > 0){

        document.getElementById("txtcont").innerHTML = (parseInt(contador)-1).toString();
        document.getElementById("txtTotal").innerHTML = parseFloat((parseInt(contador)-1) * precio).toFixed(2);
        
    }

})

$("#btnMas").click(function(){

    var contador = document.getElementById("txtcont").textContent;
    var precio = document.getElementById("txtprecio").textContent;

    if(parseInt(contador) >= 0){

        document.getElementById("txtcont").innerHTML = (parseInt(contador)+1).toString();
        document.getElementById("txtTotal").innerHTML = parseFloat((parseInt(contador)+1) * precio).toFixed(2);
    }

})


$("#btnConfirmarPedido").click(function(){

    window.location.replace("confirmacion.html");

})
