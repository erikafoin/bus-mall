import { productData as products } from '../products.js';
import { ProductData } from '../productArray.js';
const productData = new ProductData(products); //now all tests have the data

const test = QUnit.test;

test('Retrieve products by id', function(assert) {

    const id = 'banana-slicer';
    const expected = {
        id: 'banana-slicer',
        name: 'Banana Slicer',
        image: 'bus-mall/assets/banana.jpg'
    };
    
    const foundProduct = productData.getProductById(id);

    assert.deepEqual(foundProduct, expected);
});

test('remove product by ID', function(assert) {

    const id = 'banana-slicer';
    const expected = null;
    
    const removedProduct = productData.removeProductById(id);

    assert.equal(removedProduct, expected);
});

test('retrieve products', function(assert) {

    const quantity = 20;
    const expected = 20;
        
    const productList = products.length;

    assert.equal(productList, expected);
});

test('has any products', function(assert) {

    const quantity = 20;
    const expected = 20;
        
    const productList = products.length;

    assert.equal(productList, expected);
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