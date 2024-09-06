//import { expect } from '@wdio/globals'
import MainMenuPage from '../pageobjects/mainMenu.page';
import AlertAppPage from '../pageobjects/alertApp.page';
import AppMenuPage from '../pageobjects/app.page';
import AutoCompletePage from '../pageobjects/autoComplete.page';
import GalleryPage from '../pageobjects/gallery.page';
import wallpaperPage from '../pageobjects/wallpaper.page';
import testdata from '../testdata/testdata.json'

describe('Android app API Demo tests', () => {

    it('verify app name', async () => {
        await expect(MainMenuPage.appNameHeader).toHaveText(testdata.HEADER_TEXT);
    })

    it('Verify menu items', async () => {
        const actualMenuItems = await MainMenuPage.allMenuItemsElements.map(async menuItem => await menuItem.getText());
      expect(actualMenuItems).toEqual(testdata.MENU_ITEMS)
        expect(await MainMenuPage.allMenuItemsElements.length).toBeGreaterThan(0);
    })

    it('Verify Action bar menu item', async () => {
        await MainMenuPage.clickOnAppMenu();
        await expect(AppMenuPage.actionBar).toBeExisting();
    })

    it('Verify command two menu with app activity', async () => {
        await AlertAppPage.navigateToCommandTwoPopup()
        await expect(AlertAppPage.commandTwoMsgElement).toHaveText(testdata.COMMAND_TWO_POPUP_MSG);
    })

    it('Verify screen top sendkeys', async () => {
        await AutoCompletePage.openCountryInputPage()
        await AutoCompletePage.countryInputElement.setValue(testdata.country)
        await expect(AutoCompletePage.countryInputElement).toHaveText(testdata.country)
    })

    it('Verify alert text and accept alert', async () => {
        await AlertAppPage.openAlertPage()
        await AlertAppPage.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toContain(testdata.ALERT_TEXT)
        await driver.acceptAlert()
        await expect(AlertAppPage.alertTitleElement).not.toExist()
    })

    it('Verify alert text and dismiss alert', async () => {
        await AlertAppPage.openAlertPage()
        await AlertAppPage.clickOnOkCancelDialouge()
        expect(await driver.getAlertText()).toContain(testdata.ALERT_TEXT)
        await driver.dismissAlert()
        await expect(AlertAppPage.alertTitleElement).not.toExist()
    })

    it('Verify vertical scrolling', async () => {
        await MainMenuPage.openMainMenu()
        await MainMenuPage.clickOnAppMenu()
        await AppMenuPage.clickOnActivityMenu()
        await wallpaperPage.scrollAndclickOnWallpaperMenu()
        
    })

    it('Verify horizontal scrolling', async () => {
        await GalleryPage.openGalleryPage()
        await GalleryPage.scrollGalleryHorizontally()
    })
   
})

