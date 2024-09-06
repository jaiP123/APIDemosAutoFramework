import BasePage from "./base.page.js"

class WallpaperPage extends BasePage {

    async scrollAndclickOnWallpaperMenu() {
        await this.scrollAndClickByText('Wallpaper')
    }

    get wallpaperTextElement() { return $('//*[@resource-id="io.appium.android.apis:id/text"]') }

}
export default new WallpaperPage()