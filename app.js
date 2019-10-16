import { productData } from './products.js';
import { ProductData } from '/ProductArray.js';

const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const productRadioTags = document.querySelectorAll('input');
// const productName = document.querySelectorAll('product-name');
const choiceContainer = document.getElementById('product-choice-container');
const nextContainer = document.getElementById('next-container');
const nextButton = document.getElementById('next-button');
const products = new ProductData(productData);
let randomProduct1 = products.getRandomProducts();
let randomProduct2 = products.getRandomProducts(); 
let randomProduct3 = products.getRandomProducts();

let totalClicks = 0;
let live = true;
const clickArray = [];
const shownArray = [];

// const masterProductData = new ProductData(products);

// const handleUserChoice = (event) => {
//     if (!live) return;
//     const radioElement = event.target;
//     choiceContainer.classList.add('reveal');
//     radioElement.parentNode.classList.add('choice');

//     totalClicks++;

//     const userChoice = products.id === radioElement.value;

//     else (userChoice) {
//         masterProductSet.addById(userChoice.id);
//     }

//     else { (totalClicks < 1), 
//     removeProductById(products.id)};
// };

// for (let i = 0; i < radioInputs.length; i++) {
//     const radioInput = radioInputs[i];
//     radioInput.addEventListener('input', handleUserChoice);
// }

// nextButton.addEventListener('click', () => {
//     if (masterProductSet.hasProdcuts()) {
//         displayFinalResults();
//         return;
//     }
// });

while (randomProduct1 === randomProduct2) {
    randomProduct2 = products.getRandomProducts();
}
while (randomProduct3 === products.getRandomProducts() || randomProduct3 === randomProduct1 || randomProduct3 === randomProduct2) {
    randomProduct3 = products.getRandomProducts();
}

img1.src = randomProduct1.image;
img2.src = randomProduct2.image;
img3.src = randomProduct3.image;

// const radioButtonClickHandler = 
        
productRadioTags.forEach((radioTag, i) => {
    if (i === 0) {
        radioTag.value = randomProduct1.id;
        radioTag.addEventListener('click', (event) => {
            const radioValue = event.target.value;
        });
    } else if (i === 1) {
        radioTag.value = randomProduct2.id;
        radioTag.addEventListener('click', (event) => {
            const radioValue = event.target.value;
        });
    } else if (i === 2) {
        radioTag.value = randomProduct3.id;
        radioTag.addEventListener('click', (event) => {
            const radioValue = event.target.value;
        });
    }
});
