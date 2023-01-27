class ProductManager {
    constructor(){
        this.products = [];
        this.id = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) 
        return console.log('no tiene todos los campos necesarios')
        for ( let i = 0; i < this.products.length; i++){
            if (this.products[i].code === code) return console.error(`codigo ${code} repetido, porfavor insertar nuevo codigo`)
        }
        this.products.push({
            title, 
            description,
            price, 
            thumbnail,
            code,
            stock,
            id: this.id++
        });
    }

    getProduct (){
        return this.products;
    }

    getProductById(id){
        return this.products[id] || console.error ('No se encontro')
    }
}

const productos = new ProductManager();

productos.addProduct(
    'Sol',
    'cerveza',
    60,
    'sol.jpg',
    'abc1',
    6

)

productos.addProduct(
    'Don Simon',
    'Vino',
    300, 
    'donSimon.jpg',
    'abc2',
    3
)

productos.addProduct(
    'Absolute',
    'Vodka',
    250,
    'absolute.jpg',
    'abc3',
    7
)

productos.addProduct(
    'Absolute',
    'Vodka',
    250,
    'absolute.jpg',
    7
)

//console.log(productos.getProduct())

console.log(productos.getProductById(4))