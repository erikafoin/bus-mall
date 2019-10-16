export class ProductData {
    constructor(products) {
        this.products = products.slice();
    }
    
    getProducts() {
        return this.products;
    }
    
    removeProductById(someId) {
        this.products.forEach(product => {
            if (someId === product.id) {
                this.products.splice(someId, 1);
            }
        });
    }
    
    getProductById(products, someId) {
        let productMatch;
        products.forEach(product => {
            if (someId === product.id) {
                productMatch = product;
            }
        });
        return productMatch;
    }
    
    hasAnyProducts() {
        return this.products.length;
    }
    
    getRandomProducts() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }
}
    // trackClicks() {
    //     const found = this.getProductById(products);
    //     if (found) {
    //         found.add++;
    //         return;
    //     }
    // }