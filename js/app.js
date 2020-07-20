//variables
var carrito;
var datos;
var searchButton;
var searchBoxInput;
var searchBoxInputValue;
var searchWords=[];
var btnConfirm;


//Generación de la estructura HTML de la lista de productos

function renderProducts(productList){
    
    var html="";

    productList.forEach(item => {

        html=html+`        
        <div class="col-lg-4  col-md-5 ">
            <article class="search-item">
                <div class="col-" >
                    <img id="test" src = "${item.img}">
                </div>
                <div class="col-">
                    <h2>${item.typeProduct} ${item.description}</h2>
                    <p>$${item.precio}</p>
                    <div> 
                        <!-- Button to Open the Modal -->                                  
                        <button type="button" class="btn -primary" data-toggle="modal" data-target="#${item.id}D">Ver detalle
                        </button>
                        <input type="button" class="btn -secondary" value="Agregar al carrito" onclick="addToCart('${item.id}')">                 
                    </div>
                </div>
            </article>        
        </div>`
        
    });
    return html     
}

//En shoppingcart.js disponemos de la función constructora ShoppingCart

//para renderizar el carrito de Compra

function renderShoppingCart(datos){ 
    $(".hidden").show(); 
    $("#count-cart").html(`<b>Carrito de Compras (${carrito.get().length})</b>`);
    $("#list-cart").html(carrito.show());
    if (carrito.get().length>0){ 
        $("#cost-shopping-Cart").html(`<p>El precio total es <strong>$${carrito.totalPrice()}</strong></p>`);
        } 
    else  emptyCart();
}


//renderizar la orden de los productos a comprar

function renderOrdenShoppingCart(){           
    $("#titulo-order").html(`<strong>Lista de Productos a Comprar</strong>`);
    $("#list-order-shoppingCart").html(carrito.showOrder());
    $("#total-cost").html(`Total: <strong>$${carrito.totalPrice()}</strong>`);
    $("#form-pay").html(`<div class=column-sm-12>
        <label>Forma de Pago</label>    
        <fieldset>
            <h2 id="price-display"></h2>
            <input type="radio" name="pay" value="C">Credito
            <input type="radio" name="pay" value="D">Debito
            <input type="radio" name="pay" value="T">Transferencia
            <h2 id="noPay"></h2>
            <input type="text" name="comment" class="form-control" placeholder="Comentario..."/>
            <button type="button" class="btn btn-block btn-dark" id="btn-confirm">Confirmar pedido</button>
        </fieldset>        
        </div>`);
    btnConfirm = $("#btn-confirm");
    btnConfirm.click(function(){
       
        pay = $('input[name="pay"]:checked');        
        comment =$('input[name="comment"]');
        if (pay.val()=="C"||pay.val()=="D"||pay.val()=="T"){
            $("#resumebuy").hide();
            $("#noPay").html("");
            $("#itemTobuy").html((carrito.showOrder()));            
            $('#pay-display').html(`Modo de pago: ${pay.val()}`);            
            $('#total-pay').html(`Total: <strong>$${carrito.totalPrice()}</strong>`);    
            $('#comment-display').html(`${comment.val()}`);
            $('#information').html(`<b>"En breves momentos nos comunicaremos a su correo para completar el pago"</b>`);
        emptyCart();
        
        }
        else
            $("#noPay").html("Debe indicar la forma de Pago");
                        

});

}

function addToCart(pid){               
           datos.forEach(item =>{
            if (item.id==pid){
                carrito.add(item)                
            } 
           });
           renderShoppingCart(carrito);//Se debe rebderizar el carrito           
           renderModalOrden();//se debe renderizar el modal          
        }

function removeFromCart(pid){

        carrito.del(pid);       
        renderShoppingCart(carrito);//Se debe renderizar los artículos en el carrito        
        renderModalOrden(); //al eliminar del carrito se debe renderizar la orden      

        }

//Para vaciar el carrito de Compra       

function emptyCart(){
    carrito.empty();
          $("#count-cart").html(`<b>Carrito de Compras (0)</b>`);          
          $("#list-cart").html(carrito.show());         
          $("#cost-shopping-Cart").html("");
          $(".hidden").hide();  
        }

//Para comprar lo indicado en el Carrito de Compra

function buyOrder(){
    order=carrito.cart
   console.log(order[0]);
}

//Elimina espacios vacios

function noSpace(x){
    return x != ""
 }    

//Para obtener los Productos de la búsqueda

function getProductInputSearch(event){

   
    var searchBoxInput= $("#search-box-input");   
    
    var searchBoxInputValue=searchBoxInput.val();//Valor del Item buscado
    searchWords=searchBoxInputValue.split(" ");//separa la cadena de texto con espacio  
    searchWords=searchWords.filter(noSpace);//Elimina espacios vacios para no considerarlos en el array

    var searchResult=[];// Se guarda el arrays con las palabras insertadas en la búsqueda

    //Se busca cada palabra en nuestra base de datos 
    datos.forEach(item=>{
        var times=0;
        searchWords.forEach(word=>{

            var value1 = item.typeProduct.toUpperCase().search(word.toUpperCase());
            var value2 = item.description.toUpperCase().search(word.toUpperCase());
            var value3 = item.dictionary.toUpperCase().search(word.toUpperCase());
           
            if ((value1>=0)||(value2>=0)||(value3>=0)){times+=1}
        })
        if (times>0) {
            searchResult.push(item);

        }
     })
   
    $("#result").html(`<b>${searchResult.length}</b> resultados para la búsqueda <b>${searchBoxInput.val()}</b>
        `);    

    $("#home").click(function(){
        $("#show-box").html(renderProducts(datos));
        $("#result").html("");
        $("#search-box-input").val(""); 

    });    

    $("#show-box").html(renderProducts(searchResult));    

    return searchResult; 
}

function getBuycart() {            
    // formato de la compra
    $("#step2").hide();
    $('#step1Label').css('font-weight', 'bold');
    $("form[name='step1']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: 'El campo email es obligatorio',
                email: 'Ingrese un email valido'
            },
            password: {
                required: 'El campo password es obligatorio',
                minlength: 'El password debe tener un minimo de 5 caracteres'
            }            
        },
        submitHandler: function(form) {
            $("#step1").slideUp("slow", function() {
                $("#step2").slideDown("slow", function(){
                    $('#step1Label').css('font-weight', 'normal');
                    $('#step2Label').css('font-weight', 'bold');
                })
            });                    
        }                
    });

    $("form[name='step2']").validate({
        rules: {
            apellido: {
                required: true,
            },
            nombre: {
                required: true,
            }
        },
        messages: {
            apellido: {
                required: 'El campo apellido es obligatorio',
            },
            nombre: {
                required: 'El campo nombre es obligatorio',
            }            
        },
        submitHandler: function(form) {
            $("#step2").slideUp("slow", function() {
                $('#step2Label').css('font-weight', 'normal')
                $('#step3Label').css('font-weight', 'bold')
                $('#resumeName').html($('input[name="nombre"]').val() + " " + $('input[name="apellido"]').val());
                $('#resumeEmail').html($('input[name="email"]').val());                                                
                renderOrdenShoppingCart();                                
            });                    
        }                
    });
}


$(document).ready(function(){
    datos=[];
    $.ajax({
        method: 'GET',
        url:"json/data.json",
        dataType:'json'
    }).done(function(data){ 
        datos=data;

        $("#show-box").html(renderProducts(datos));//renderizar todos los productos
        $("#modal-List").html(renderModal(datos));//renderizar el modal
        carrito= new ShoppingCart;
        carrito.fill();
        renderShoppingCart(datos);//renderizar los datos del carrito de compra
        renderModalOrden();        

        //Búsqueda de Productos
        searchButton = $("#search-button");
        searchButton.attr("disabled",true);
        searchButton.click(function(){getProductInputSearch();}) //renderizar el resultado de la búsqueda desde el botón buscar   
        searchBoxInput=$("#search-box-input");
        searchBoxInput.keyup(function() {
        var entrada=searchBoxInput.val();        
        if(entrada.trim().length>1 ){
            $("#search-button").attr("disabled",false);}
        else {$("#search-button").attr("disabled",true);}
        
      });

        // Al hacer enter en el formulario
        formSearch = $("#form-search");
        formSearch.submit(function( event ) {
        event.preventDefault();// no enviar el submit
        if ($("#search-button").attr("disabled")!="disabled") {getProductInputSearch();} 

        });        
        
         
        
    }).fail(function(error){
        console.log(error);
    }) 
    

});
