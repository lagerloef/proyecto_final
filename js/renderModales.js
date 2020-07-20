//Renderizar el body del la estructura HTML del Modal de la orden de compra
function renderModalOrden(){ 
    $("#modalToBuy").html(`    
    <div class="modal-dialog">
        <div class="modal-content">          
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Orden de Compra  en CompuTienda</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>            
            <!-- Modal body -->
            <div class="modal-body">
                    <div class=container>
                    <div class="row">
                        <div class="col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                <li class="breadcrumb-item" id="step1Label">Paso 1</li>
                                <li class="breadcrumb-item" id="step2Label">Paso 2</li>
                                <li class="breadcrumb-item" id="step3Label">Resumen</li>
                                </ol>
                            </nav>
                            </div>
                            <div class="col-sm-12" id="step1">
                                <form action="#" name="step1">
                                    <div class="form-group">
                                        <label for="exampleInputEmail">Email</label>
                                        <input type="email" name="email" id="email" class="form-control" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword">Password</label>
                                        <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                                    </div>
                                    <button type="submit" class="btn btn-dark">Siguiente</button>
                                </form>
                            </div>
                            <div class="col-sm-12" id="step2">
                                <form action="#" name="step2">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Apellido</label>
                                        <input type="text" name="apellido" id="apellido" class="form-control" placeholder="Apellido">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Nombre</label>
                                        <input type="text" name="nombre" id="nombre" class="form-control" placeholder="Nombre">
                                    </div>
                                    <button type="submit" class="btn btn-dark">Siguiente</button>
                                </form>
                            </div>
                            <div class="col-sm-12" id="resume">
                                <div id="resumebuy">                                    
                                    <h3 id="resumeName"></h3>
                                    <p id="resumeEmail"></p>
                                    <h2 id="titulo-order"></h2>
                                    <ul id="list-order-shoppingCart"class="list-group"></ul> 
                                    <h3 id="total-cost"></h3>
                                    <div id="form-pay"></div>
                                </div>
                                <div class="col-sm-12" >                               
                                    <p id="pay-display"></p>
                                    <ul id="itemTobuy" class="list-group"></ul>
                                    <h2 id="total-pay"></h2>
                                    <p id="comment-display"></p>
                                    <h2 id="information"></h2>
                                </div>          
                            </div>                                  
                    </div>
                    </div>
            </div>            
            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
            </div>            
        </div>
    </div>`); 

    getBuycart();
    
}



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
