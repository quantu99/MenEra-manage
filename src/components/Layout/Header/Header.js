import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '../../../createInstance';
import { logoutSuccess } from '../../../redux/authSlice';
import { logoutUser } from '../../../redux/apiRequest';
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
                    Hi, {user?.firstname} {user?.lastname}
                    <p onClick={handleClick} className={cx('logout')}>
                        Log out
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
