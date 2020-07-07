//variables

var searchButton;
var searchBoxInput;
var searchBoxInputValue;
var searchWords=[];

//Lista de los Productos del JSON  en data.js

// descarga el HTML para el boton deescripción
function showModal(modalList){
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

// La función que muestra la lista de Productos en el HTML

function showProducts(productList){
    
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
                        <button type="button" id=${item.id} class="btn -secondary add-cart"  >Agregar al carrito</button>                 
                    </div>
                </div>
            </article>        
        </div>`
        
    });
    return html  
    
}



//Carrito de Compras

//onclick para agregar productos en el carrito de compra

function addToCart(pid){    
           datos.forEach(item =>{
            if (item.id==pid){
                carrito.add(item)
            }
           });
          $("#count-cart").html(`<b>Carrito de compras (${carrito.get().length})</b>`);
          $("#list-cart").html(carrito.show());          
          $("#cost-shopping-Cart").html(`<p> El costo total es $${carrito.totalPrice()}</p>`);
        }


//onclick para agregar vaciar el carrito de compra

function emptyCart(){
    carrito.empty();           

          
          $("#count-cart").html(`<b>Carrito de compras (0)</b>`);          
          $("#list-cart").html(carrito.show());         
          $("#cost-shopping-Cart").html("");  
        }

      

    //Funcion constructora de las propiedades y métodos del carrito de compra  

function ShoppingCart() {
    this.cart = [];
    
    this.get = function() {
        return this.cart;
    }

    this.add = function(item) {
        this.cart.push(item); 
        localStorage.setItem('savedCart', JSON.stringify(this.cart));              
    }

    this.show = function(){
        var html=""; 
        this.cart.forEach(item =>{
        html=html+`<li>${item.typeProduct} ,$${item.precio}</li>`;
        
    }) 
    return html;   
    
    }

    this.totalPrice = function(){
        var price=0;
        this.cart.forEach(item =>{
            price+=item.precio;
        })
        return price

    }

        this.empty = function(item) {
        this.cart=[];
        localStorage.setItem('savedCart', JSON.stringify(this.cart));
    }

    this.fill = function(){
        this.cart = (localStorage.getItem('savedCart')) ? JSON.parse(localStorage.getItem('savedCart')) : [];
        //console.log(this.cart);
       
        }

};


function noSpace(x){
    return x != ""
 }    

function getProductInputSearch(event){
   
    var searchBoxInput= $("#search-box-input");   
    
    var searchBoxInputValue=searchBoxInput.val();   
    searchWords=searchBoxInputValue.split(" ");
  
    searchWords=searchWords.filter(noSpace);


    var searchResult=[];
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
    //console.log(searchResult);
    

   
    $("#result").html(`<b>${searchResult.length}</b> resultados para la búsqueda <b>${searchBoxInput.val()}</b>
        <button type="button" id="home" class="tertiary" >ir a inicio</button>`);    

    $("#home").click(function(){
        $("#show-box").html(showProducts(datos));
        $("#result").html("");
        $("#search-box-input").val("");

        //activar el click del carrito de compra
        $(".add-cart").click(function() {
        var idProduct=$(this).attr("id");
        addToCart(idProduct);    


      });

    });    

    $("#show-box").html(showProducts(searchResult));
    $(".add-cart").click(function() {
        var idProduct=$(this).attr("id");
        addToCart(idProduct);
      });

    return searchResult;        

}


// EL llamado para hacer la descarga JS

$(document).ready(function(){
    $("#modal-List").html(showModal(datos));
    $("#show-box").html(showProducts(datos));    
    $(".add-cart").click(function() {
        var idProduct=$(this).attr("id");
        addToCart(idProduct);
      });
    

    carrito = new ShoppingCart();
    carrito.fill(); 
    $("#count-cart").html(`<b>Carrito de compras (${carrito.get().length})</b>`);    
    $("#list-cart").html(carrito.show());
    if (carrito.get().length>0){        
        
        $("#cost-shopping-Cart").html(`<p> El precio total es <strong>$${carrito.totalPrice()}</strong>`);
        }
    
    //Búsqueda de Productos

    searchButton = $("#search-button");

    searchButton.attr("disabled",true);
    searchButton.click(function(){getProductInputSearch();})
    
    searchBoxInput=$("#search-box-input");

    searchBoxInput.keyup(function() {
        var entrada=searchBoxInput.val();        
        if(entrada.trim().length>1 ){
            $("#search-button").attr("disabled",false);}
        else {$("#search-button").attr("disabled",true);}
        
      });

    
    // para activar el enter en el formulario
    
    //formSearch = document.getElementById("form-search");
    
   
    formSearch = $("#form-search")
    formSearch.submit(function( event ) {
        event.preventDefault();
        if ($("#search-button").attr("disabled")!="disabled") {getProductInputSearch();}
        
        
    });  

});  


