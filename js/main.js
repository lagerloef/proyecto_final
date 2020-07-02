//variables

var searchButton;
var searchBoxInput;
var searchBoxInputValue;
var searchWords=[];

//Lista de los Productos del JSON

var datos = [
    {    
    "id":"NB000001",
    "img":"images/Notebook_GADNIC_GLOWN.png",
    "typeProduct":"Notebook GADNIC GLOWN",    
    "description":"Intel Atom x5 Z8350 14 Pulgada",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/Notebook_GADNIC_GLOWN_3p.png",
    "img3":"images/Caracterítica_Gadnic.png",
    "precio":47999
    },    
    {
    "id":"NB000002",
    "img":"images/Lenovo_V15_IIL.png",
    "typeProduct":"Notebook Lenovo V15 IIL",    
    "description":"Intel Core i7 -1065G7 15.6 Pulgada",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/Lenovo_V15_IIL_122999_2p.png",
    "img3":"images/Caracterítica_Lenovo_V15 IIL.png",
    "precio":122999
    },
    {
    "id":"NB000003",
    "img":"images/Notebook_HP_240_g5.png",
    "typeProduct":"Notebook HP 240",     
    "description":"Core i5 I58265U 14 Pulgada",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/características_HP_240_2p.png",
    "img3":"images/Caracterítica_HP_240.png",
    "precio":89999
    },
    {
    "id":"NB000004",
    "img":"images/Laptop_Cloudbook.png",
    "typeProduct":"Notebook CX 23500W",    
    "description":"Intel Atom x5 Z8350 14,1 Pulgada",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/Laptop_Cloudbook_CX_2p.png",
    "img3":"images/Caracterítica_CX_23500W.png",
    "precio":48999
    },
    {
    "id":"NB000005",
    "img":"images/Laptop_HP 240.png",
    "typeProduct":"Notebook HP 240 G7 6GH55LT",     
    "description":"Core i5 I58265U 14 Pulgadas",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/Notebook_HP_240_g7_109999_3p.png",
    "img3":"images/Caracterítica_HP_240_G7.png", 
    "precio":109999    
    },
    {
    "id":"NB000006",
    "img":"images/Laptop_HP 14-dq1040wm.png",
    "typeProduct":"Notebook HP 14-dq1040wm",    
    "description":"Intel Core i5 -1035G1 14 Pulgadas",
    "dictionary":"portatil computadora pc ordenador laptop",
    "img2":"images/Notebook HP 14-dq1040wm_122999_3p.png",
    "img3":"images/Caracterítica_HP_14_dqqp40wm.png",
    "precio":122999
    },       
    {
    "id":"TB000001",
    "img":"images/tablet_Alcatel.png",
    "typeProduct":"Tablet Alcatel 1T 8082",    
    "description":"16G 1G 10.1 Pulgadas",
    "dictionary":"tableta",
    "img2":"images/Tablet_Alcatel_1T 8082_3.png",
    "img3":"images/Caracterítica_TB_Alcatel_T1.png",
    "precio":12999
    },
    {
    "id":"TB000002",
    "img":"images/Tablet_Lenovo_TB7305F.png",
    "typeProduct":"Tablet Lenovo TBT305",     
    "description":"16G 1G 7 Pulgadas",
    "dictionary":"tableta",
    "img2":"images/Tablet_Lenovo_TB7305F_5.png",
    "img3":"images/Caracterítica_TB_Lenovo.png",
    "precio":9499
    },
    {
    "id":"TB000003",
    "img":"images/Tablet_TCL_LT7M.png",
    "typeProduct":"Tablet TCL LT7-M",     
    "description":"16G 1G 7 Pulgadas",
    "dictionary":"tableta",
    "img2":"images/Tablet_TCL_LT7-M_4.png",
    "img3":"images/Caracterítica_TB_TCL_T7_PRIME.png",
    "precio":8999
    },
    
    {
    "id":"CI000001",
    "img":"images/celular_alcatel.png",
    "typeProduct":"Celular Alcatel 1",    
    "description":"16G 1G 5 Pulgadas",
    "dictionary":"celular, mobil, smartphone, telefono, teléfono",
    "img2":"images/celular_alcatel_1_1p.png",
    "img3":"images/Caracterítica_CI_Alcatel_1.png",
    "precio":9999
    },
    {
    "id":"CI000002",
    "img":"images/Celular_LG_K9.png",
    "typeProduct":"Celular LG K9",     
    "description":"16G 2G 5 Pulgadas",
    "dictionary":"celular, mobil, smartphone, telefono, teléfono",
    "img2":"images/detalles_celular_LG_K9_1_p.png",
    "img3":"images/Caracterítica_CI_LG_K9.png",
    "precio":12999
    },
    {
    "id":"CI000003",
    "img":"images/celular_motorola.png",
    "typeProduct":"Celular MOTOROLA E6 PLUS",     
    "description":"64G 4G 6.1 Pulgadas",
    "dictionary":"celular, mobil, smartphone, telefono, teléfono",
    "img2":"images/detalles_celular_motorola_1p.png",
    "img3":"images/Caracterítica_CI_Motorola_E6_Plus.png",
    "precio":23999
    }           
];

// descarga el HTML para el boton deescripción
function showModal(modalList){
    var html2="";

    modalList.forEach(item => {

        html2 = html2+`

        <div class="container">
        
        <!-- The Modal -->
        <div class="modal fade" id="${item.id}D">
            <div class="modal-dialog modal-md">
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
        <div class="col-md-4">
            <article class="search-item">
                <div class="col-md-8" >
                    <img id="test" src = "${item.img}" width=200px>
                </div>
                <div class="col-md-8">
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
    console.log(searchResult);
    
    
    $("#result").html(`<b>${searchResult.length}</b> resultados para la búsqueda <b>${searchBoxInput.val()}</b>`);    
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
        if(entrada.length>1){
            $("#search-button").attr("disabled",false);}
        else {$("#search-button").attr("disabled",true);}
        
      });

    
    // para activar el enter en el formulario
    
    formSearch = document.getElementById("form-search");
    
   
    formSearch = $("#form-search")
    formSearch.submit(function( event ) {
        event.preventDefault();    
        if ($("#search-button").attr("disabled",false)) {getProductInputSearch();}  
    });  

});  


