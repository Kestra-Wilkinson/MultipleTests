import LoginPage from '../pageobjects/login.page.js';
import HamburgerMenu from '../pageobjects/Hamburgermenu.js';

describe('Hamburger Menu Tests', () => {
    before(async () => {
        // Navigate to the SauceDemo login page and log in
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce');
    });
})
    // Tests for menu interactions
    describe('Menu Interactions', () => {
        it('should open and close the hamburger menu', async () => {
            // Open and close the hamburger menu
            await HamburgerMenu.openMenu();
            await HamburgerMenu.closeMenu();
        });
    });

    describe('Navigation', () => {
        it('should navigate to "All Items"', async () => {
            // Open the menu and navigate to "All Items"
            await HamburgerMenu.openMenu();
            await HamburgerMenu.navigateToAllItems();
        })
  })

  describe('User Actions', () => {
    it('should log out the user', async () => {
        // Open the menu and log out
        await HamburgerMenu.openMenu();
        await HamburgerMenu.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })
})