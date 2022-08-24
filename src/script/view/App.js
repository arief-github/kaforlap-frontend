import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

export default class App {
    constructor({content}) {
        this._content = content;
    }
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        // untuk menjalankan render UI
        this._content.innerHTML = await page.render();
        // untuk menjalankan interaktifitas UI
        await page.afterRender();
    }
}



