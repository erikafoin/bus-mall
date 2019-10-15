import { productData } from './products.js';
import { ProductArray } from './ProductArray.js';

const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const productName = document.getElementById('product');
const products = new ProductArray(productData);

const generateProducts = () => {
    const randomProduct = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct(); {
    while (randomProduct2 === products.getRandomProduct();
}
let randomProduct3 = products.getRandomProduct();
while (randomProduct3 === products.getRandomProduct() || randomProduct3.id === randomProduct.id) {

productImageTags.forEach((imageTag, i) => {
if (i === 0) {
    imageTag.src = randomProduct.image;
} else if (i === 1) {
    imageTag.src = randomProduct2.image;
}
else if (i === 2) {
    imageTag.src = randomProduct3.image;
}
});
productRadioTags.forEach((radioTag, i) => {
    if (i === 0) {
        radioTag.value = randomProduct.id;
    } else if (i === 1) {
        radioTag.value = randomProduct2.id;
    } else if (i === 2) {
        radioTag.value = randomProduct3.id;
    }
    console.log(radioTag.value);
    });
};
