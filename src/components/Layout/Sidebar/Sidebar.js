import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faEye, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <h1 className={cx('sidebar-title')}>Dashboard</h1>
                    <ul className={cx('sidebar-list')}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/add-product'}>
                            <li className={cx('sidebar-list-item')}>
                                <FontAwesomeIcon className={cx('list-item-icon')} icon={faPlus} />

                                <p className={cx('list-item-para')}>Add the product</p>
                            </li>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/all-products'}>
                            <li className={cx('sidebar-list-item')}>
                                <FontAwesomeIcon className={cx('list-item-icon')} icon={faEye} />
                                <p className={cx('list-item-para')}> See all products</p>
                            </li>
                        </Link>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to={'/order'}
                            className={cx('sidebar-list-item')}
                        >
                            <FontAwesomeIcon className={cx('list-item-icon')} icon={faCheck} />
                            <p className={cx('list-item-para')}> Check the orders</p>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/all-users'}>
                            <li className={cx('sidebar-list-item')}>
                                <FontAwesomeIcon className={cx('list-item-icon')} icon={faUser} />

                                <p className={cx('list-item-para')}>Users</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
