import LoginPage from '../pageobjects/login.page.js';
import ProductPage from '../pageobjects/product.page.js';

describe('Add to Cart Functionality', () => {
    before(async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should add a product to the cart', async () => {
      
        await ProductPage.addToCart();
        
        
        await ProductPage.verifyCartItemCount('1'); 
    });

    it('should open the cart and display the added item', async () => {
        
        await ProductPage.openCart();
        
    
    });
});