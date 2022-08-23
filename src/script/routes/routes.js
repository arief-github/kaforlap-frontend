import Eksekutif from "../view/pages/eksekutif";
import Gudang from "../view/pages/gudang";
import LoginForm from "../view/pages/login";
import Pengadaan from "../view/pages/pengadaan";
import Personel from "../view/pages/personel";
import RegisterForm from "../view/pages/register";


const routes = {
    '/': LoginForm,
    '/register': RegisterForm,
    '/personel': Personel,
    '/gudang': Gudang,
    '/pengadaan': Pengadaan,
    '/Eksekutif': Eksekutif,
}

export default routes;