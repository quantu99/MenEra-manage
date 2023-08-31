import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '../../../createInstance';
import { logoutSuccess } from '../../../redux/authSlice';
import { logoutUser } from '../../../redux/apiRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const handleClick = () => {
        logoutUser(user?.accessToken, dispatch, navigate, user?._id, axiosJWT);
    };

    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('title', 'col', 'l-5')}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
                        Men's Era Manage
                    </Link>
                </div>
                <div className={cx('hello', 'col', 'l-3', 'l-o-4')}>
                    <label htmlFor="checkbox">
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
                    </label>
                    <input type="checkbox" className={cx('checkbox')} id="checkbox" />
                    {user && (
                        <div className={cx('dashboard')}>
                            <h1 className={cx('dashboard-title')}>Dashboard</h1>
                            <div className={cx('dashboard-content')}>
                                <Link to={'/add-product'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <p className={cx('add')}>Add products</p>
                                </Link>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <p className={cx('all-products')}>All products</p>
                                </Link>
                                <Link to={'/all-users'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <p className={cx('all-users')}>Men's Era' Users</p>
                                </Link>
                                <Link to={'/order'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <p className={cx('all-orders')}>All orders</p>
                                </Link>
                            </div>
                            <p onClick={handleClick} className={cx('logout')}>
                                Log out
                            </p>
                        </div>
                    )}
                    {!user && (
                        <div className={cx('dashboard-no-user')}>
                            <p>Please login to continue</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
