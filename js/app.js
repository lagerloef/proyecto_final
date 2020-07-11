var carrito;
var searchResult;

//Generación de la estructura HTML del Modal
function renderModal(modalList){
    var html2="";

    modalList.forEach(item => {

        html2 = html2+`

        <div class="container">
        
        <!-- The Modal -->
        <div class="modal fade" id="${item.id}D">
            <div class="modal-dialog">
                <div class="modal-content">
          
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">${item.typeProduct}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
            
                    <!-- Modal body -->
                    <div class="modal-body">

                        <!--Carousel¡--> 
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>                         
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active ">
                                    <img src="${item.img2}" class="d-block" >                        
                                </div>
                                <div class="carousel-item">
                                    <img src="${item.img}" class="d-block">
                                </div>

                                <a class="carousel-control-prev"  href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon"   aria-hidden="true"></span>
                                    <span class="sr-only" >Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon"  aria-hidden="true"></span>
                                    <span class="sr-only" >Next</span>
                                </a>
                            </div>
                        </div>                
                        <img id="test" src = "${item.img3}"> 

                    </div>
            
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                    </div>
            
                </div>

            </div>
            </div> 

        </div>`; 

    });
    
    return html2

}

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
                        <input type="button" class="btn -secondary"  value="Agregar al carrito" onclick="addToCart('${item.id}')">                 
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

    $("#count-cart").html(`<b>Carrito de compras (${carrito.get().length})</b>`);
    $("#list-cart").html(carrito.show());
    if (carrito.get().length>0){        
        
        $("#cost-shopping-Cart").html(`<p>El precio total es <strong>$${carrito.totalPrice()}</strong></p>`);
        } 
    else  emptyCart();
}


function addToCart(pid){               
           datos.forEach(item =>{
            if (item.id==pid){
                carrito.add(item)                
            } 
           });

           renderShoppingCart(carrito);          
        }

function removeFromCart(pid){
        carrito.del(pid);
        renderShoppingCart(carrito);

         }

//Para vaciar el carrito de Compra       

function emptyCart(){
    carrito.empty();           

          
          $("#count-cart").html(`<b>Carrito de compras (0)</b>`);          
          $("#list-cart").html(carrito.show());         
          $("#cost-shopping-Cart").html("");  
        }

// EL llamado para hacer la descarga

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


$(document).ready(function(){

$("#show-box").html(renderProducts(datos));//renderizar todos los productos
$("#modal-List").html(renderModal(datos));//renderizar el modal
carrito= new ShoppingCart;
carrito.fill();
renderShoppingCart(datos);//renderizar los datos del carrito de compra

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

})

})