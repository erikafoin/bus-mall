import { productData } from './products.js';
import { ProductData } from '/bus-mall/ProductArray.js';

const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const productRadioTags = document.querySelectorAll('input');
// const productName = document.querySelectorAll('product-name');
const products = new ProductData(productData);
let randomProduct1 = products.getRandomProducts();
let randomProduct2 = products.getRandomProducts(); 
let randomProduct3 = products.getRandomProducts();

// productRadioTags.forEach(radioTag) => {
//     radioTag.addEventListener('click', (event)) => {
//         if (event.target.value === productID) {
//             myVotes++;
//         }
//     }
// }
while (randomProduct1 === randomProduct2) {
    randomProduct2 = products.getRandomProducts();
}
while (randomProduct3 === products.getRandomProducts() || randomProduct3 === randomProduct1) {
    randomProduct3 = products.getRandomProducts();
}

img1.src = randomProduct1.image;
img2.src = randomProduct2.image;
img3.src = randomProduct3.image;

        // productImageTags.forEach((imageTag, i) => {
        //     if (i === 0) {
        //         imageTag.src = randomProduct.image;
        //     } else if (i === 1) {
        //         imageTag.src = randomProduct2.image;
        //     }
        //     else if (i === 2) {
        //         imageTag.src = randomProduct3.image;
        //     }
        // });
productRadioTags.forEach((radioTag, i) => {
    if (i === 0) {
        radioTag.value = randomProduct1.id;
    } else if (i === 1) {
        radioTag.value = randomProduct2.id;
    } else if (i === 2) {
        radioTag.value = randomProduct3.id;
    }
    console.log(radioTag.value);
});
    