import { productData as products } from '../products.js';
import { ProductData } from '../api.js';
const productData = new ProductData(products); //now all tests have the data

const test = QUnit.test;

test('Retrieve products by id', function(assert) {

    const id = 'banana-slicer';
    const expected = {
        id: 'banana-slicer',
        name: 'Banana Slicer',
        image: '../assets/banana.jpg',
        description: 'Slice your long fruits into perfectly even coins with this plastic gadget of wonder.'
    };
    
    const foundProduct = productData.getProductById(id);

    assert.deepEqual(foundProduct, expected);
});

test('remove product by ID', function(assert) {
console.log(productData.hasAnyProducts());
    const id = 'banana-slicer';
    const expected = null;
    
    const removedProduct = productData.removeProductById(id);
    console.log(productData.hasAnyProducts());
    assert.equal(removedProduct, expected);
});
// test('get product by votes', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations

//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(true, false);
// });

// test('remove products not clicked', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations

//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(true, false);
// });

// test('get products displayed to user', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations

//     //Act 
//     // Call the function you're testing and set the result to a const

//     //Assert
//     // Make assertions about what is expected valid result
//     assert.equal(true, false);
// });