import { useEffect, useState } from 'react';
import styles from './AllProducts.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from '../../components/Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts, getProductDetail } from '../../redux/apiRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AllProducts() {
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    const productDetail = useSelector((state) => state.products.getDetail?.productDetail);
    useEffect(() => {
        if (productDetail) {
            setView(true);
        } else if (!productDetail) {
            setView(false);
        }
    }, [productDetail]);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
        if (user) {
            getAllProducts(dispatch);
        }
    }, [user]);
    const handleQuickView = (id) => {
        getProductDetail(dispatch, id);
    };
    const handleDetailView = (id) => {
        getProductDetail(dispatch, id);
    };
    const handleClose = () => {
        setView(false);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <Sidebar />
            <div className={cx('container', 'row', 'no-gutters')}>
                <h1 className={cx('title')}>All Products</h1>
                <p style={{ fontSize: '1.6rem' }}>Number of product: {allProducts?.length}</p>
                {allProducts?.map((product) => (
                    <div className={cx('product-div', 'col', 'l-12')}>
                        <img className={cx('product-img')} src={product.imageUrl} alt="Product image" />
                        <div className={cx('info-div')}>
                            <p className={cx('product-name')}>{product.name}</p>
                            <div className={cx('btn-div')}>
                                <Link to={`/${product._id}`}>
                                    <button onClick={() => handleDetailView(product._id)} className={cx('btn')}>
                                        Detail
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
