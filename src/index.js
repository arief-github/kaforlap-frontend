import './style/style.css';
import App from './script/view/App';
// import bootstrap (css and js)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const app = new App({ content: document.querySelector("#main-content") })

window.addEventListener('hashchange', () => {
    app.renderPage();
})


window.addEventListener("DOMContentLoaded", () => {
    app.renderPage();
});