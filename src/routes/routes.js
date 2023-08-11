import AddProduct from '../pages/AddProduct/AddProduct';
import AllProducts from '../pages/AllProducts/AllProducts';
import AllUsers from '../pages/AllUsers/AllUsers';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/add-product', component: AddProduct },
    { path: 'all-products', component: AllProducts },
    { path: 'all-users', component: AllUsers },
    { path: 'login', component: Login },
    { path: '/:id', component: ProductDetail },
];
export { publicRoutes };
