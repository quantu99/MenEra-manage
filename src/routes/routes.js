import AddProduct from '../pages/AddProduct/AddProduct';
import AllProducts from '../pages/AllProducts/AllProducts';
import AllUsers from '../pages/AllUsers/AllUsers';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Order from '../pages/Order/Order';
import OrderDetail from '../pages/Order/OrderDetail';
import OrderHistory from '../pages/OrderHistory/OrderHistory';
import OrderHistoryDetail from '../pages/OrderHistory/OrderHistoryDetail';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import UserDetail from '../pages/UserDetail/UserDetail';

const publicRoutes = [
    // { path: '/', component: Home },
    { path: '/', component: AllProducts },
    { path: '/add-product', component: AddProduct },
    { path: 'all-users', component: AllUsers },
    { path: 'login', component: Login },
    { path: 'order', component: Order },
    { path: 'orderDetail/:id', component: OrderDetail },
    { path: '/order-history', component: OrderHistory },
    { path: '/order-history/id', component: OrderHistoryDetail },
    { path: '/user-detail/:id', component: UserDetail },
    { path: '/:id', component: ProductDetail },
];
export { publicRoutes };
