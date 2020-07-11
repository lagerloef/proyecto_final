//funcion que permitirá crear los elementos y métodos para el carrito de Compra o Shopping Cart

function ShoppingCart() {
    this.cart = [];
    
    this.get = function() {
        return this.cart;
    }

    this.add = function(item) {
        this.cart.push(item); 
        localStorage.setItem('savedCart', JSON.stringify(this.cart));              
    }

    this.del = function(pid) {
        var naco=0;
        this.cart.forEach(item =>{
            if (item.id==pid){
                this.cart.splice(naco,1);                                
            }            
            naco=naco+1;
        });        
        localStorage.setItem('savedCart', JSON.stringify(this.cart));
    }
   
    this.show = function(){
        var html=""; 
        this.cart.forEach(item =>{
        html=html+`<li class="list-group-item"><input type="button" class="btn-dark"  value="-" onclick="removeFromCart('${item.id}')">  ${item.typeProduct} ,$${item.precio}</li>`;
        
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
