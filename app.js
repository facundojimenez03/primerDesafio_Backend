class ProducManager{
    constructor(){
        this.products = []
    }

  addProducts(title,description,price,thumbnail,code,stock){
     const product_id = this.products.length + 1
     if (!this.products.some(product => product.code === code) && title && description && price && thumbnail && code && stock ) {
      const product ={
        id: product_id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      }
      this.products.push(product);
    }
  }
  getProductById(product_id){
    const product_encontrado = this.products.find((product)=> product.id === product_id)
    if(!product_encontrado){
        console.log("Not found")
        return 
        
    }else{
       return product_encontrado
    }

  }
    getProducts(){
        return this.products
    }
}







const productManager = new ProducManager();

// Agregar productos
productManager.addProducts("licuadora", " mezclador de jugo fresco, carga inalámbrica", 1200, "/imgs/licuadora.jpg", "licuados", 25);
productManager.addProducts("cargador ", "Cargador rápido inalámbrico magnético", 8300, "/imgs/cargador.jpg", "12vl", 32);

// Obtener todos los productos
console.log("Todos los productos:", productManager.getProducts());

// Obtener un producto por ID
console.log("Producto con ID 1:", productManager.getProductById(1));