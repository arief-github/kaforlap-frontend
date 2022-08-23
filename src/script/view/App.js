import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

export default class App {
    constructor({content}) {
        this.content = content;
    }
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}


