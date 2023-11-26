import { useEffect } from 'react';
import styles from './UserDetail.module.scss';
import classNames from 'classnames/bind';
import { editOrderProcess, getMyOrder, getOrderDetail, getUserDetail, verifyOrder } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBag,
    faSquareEnvelope,
    faGear,
    faCheck,
    faBox,
    faTruckFast,
    faHouseCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function UserDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useParams().id;
    const userDetail = useSelector((state) => state.user.getUserDetail?.userDetail);
    const myOrder = useSelector((state) => state.auth.getMyOrder?.myOrder);
    let orderProcess = 'order shipped';
    const firstnameletter = userDetail?.firstname.substring(0, 1);
    const lastnameletter = userDetail?.lastname.substring(0, 1);
    useEffect(() => {
        getUserDetail(dispatch, userId, navigate);
    }, []);
    useEffect(() => {
        getMyOrder(dispatch, userId);
    }, []);
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total;
    };
    const handleGetDetail = (id) => {
        getOrderDetail(dispatch, id, navigate);
    };
    const handleChange = (e) => {
        orderProcess = e.target.value;
    };
    const handleVerifyOrder = (id) => {
        verifyOrder(dispatch, id);
    };
    const handleClick = (id) => {
        editOrderProcess(dispatch, id, orderProcess, navigate);
    };

    return (
        <div className={cx('grid', 'wrapper')}>
            <div className={cx('info-container', 'row', 'no-gutters')}>
                <div className={cx('avatar')}>{firstnameletter + lastnameletter}</div>
                <div className={cx('info-div')}>
                    <h1 className={cx('info-title')}>Information</h1>
                    <div className={cx('info-detail')}>
                        <p className={cx('username')}>
                            <span style={{ minWidth: '100px', display: 'block', opacity: 0.4, fontWeight: 500 }}>
                                Username:{' '}
                            </span>
                            {userDetail?.username}
                        </p>
                        <p className={cx('email')}>
                            <span style={{ minWidth: '100px', display: 'block', opacity: 0.4, fontWeight: 500 }}>
                                Email:
                            </span>{' '}
                            {userDetail?.email}
                        </p>
                        <p className={cx('address')}>
                            <span style={{ minWidth: '100px', display: 'block', opacity: 0.4, fontWeight: 500 }}>
                                Address:
                            </span>{' '}
                            {userDetail?.address}
                        </p>
                        <div className={cx('icon-div')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faShoppingBag} />
                            <FontAwesomeIcon className={cx('icon', 'mail')} icon={faSquareEnvelope} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('order-header')}>
                <h1 className={cx('order-header-order')}>Order</h1>
            </div>
            <div className={cx('order-div')}>
                {myOrder && (
                    <>
                        {myOrder.length >= 1 && (
                            <>
                                {myOrder?.map((order, index) => (
                                    <div
                                        onClick={() => console.log(order.orderProcess)}
                                        key={index}
                                        className={cx('container', 'row', 'no-gutters')}
                                    >
                                        <div className={cx('id-div')}>
                                            <p className={cx('title')}>Order Id</p>
                                            <p className={cx('order-code')}> #{order?._id}</p>
                                        </div>
                                        <div className={cx('date-div')}>
                                            <p className={cx('title')}>At</p>
                                            <p className={cx('order-date')}>
                                                {order.orderDate.replace('T', ', ').slice(0, 20)}
                                            </p>
                                            <p className={cx('date-para')}>
                                                This order is created at{' '}
                                                {order.orderDate.replace('T', ', ').slice(0, 20)}
                                                <div className={cx('something')}></div>
                                            </p>
                                        </div>
                                        <div className={cx('total-div')}>
                                            <p className={cx('title')}>Total</p>
                                            <p className={cx('order-total')}>
                                                {calculateTotal(order.products).toLocaleString()}
                                                <span style={{ textDecoration: 'underline' }}>đ</span>
                                            </p>
                                        </div>
                                        <div className={cx('progress-div')}>
                                            <p className={cx('title')}>Order status</p>
                                            {!order.orderProgress && (
                                                <>
                                                    <FontAwesomeIcon className={cx('process-icon')} icon={faGear} />
                                                    <p className={cx('process-para')}>Processing...</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order processed' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faCheck}
                                                    />
                                                    <p className={cx('process-para')}>Processed</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order shipped' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faBox}
                                                    />
                                                    <p className={cx('process-para')}>Order shipped</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order is shipping' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faTruckFast}
                                                    />
                                                    <p className={cx('process-para')}>Order is shipping</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order arrived' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faHouseCircleCheck}
                                                    />
                                                    <p className={cx('process-para')}>Order arrived</p>
                                                </>
                                            )}
                                        </div>
                                        <p className={cx('verify-div')}>
                                            <p className={cx('title')}>Verify</p>
                                            {!order?.orderProgress && (
                                                <button
                                                    onClick={() => handleVerifyOrder(order._id)}
                                                    className={cx('btn')}
                                                >
                                                    Verify this order
                                                </button>
                                            )}
                                            {order.orderProgress && (
                                                <>
                                                    {order.orderProcess === 'order processed' && (
                                                        <>
                                                            <select onChange={handleChange}>
                                                                <option value={'order shipped'}>Order shipped</option>
                                                                <option value={'order is shipping'}>
                                                                    Order is shipping
                                                                </option>
                                                                <option value={'order arrived'}>Order arrived</option>
                                                            </select>
                                                            <button onClick={() => handleClick(order._id)}>
                                                                Verify
                                                            </button>
                                                        </>
                                                    )}
                                                    {order.orderProcess === 'order is shipping' && (
                                                        <>
                                                            <select onChange={handleChange}>
                                                                <option value={'order is shipping'}>
                                                                    Order is shipping
                                                                </option>
                                                                <option value={'order shipped'}>Order shipped</option>
                                                                <option value={'order arrived'}>Order arrived</option>
                                                            </select>
                                                            <button onClick={() => handleClick(order._id)}>
                                                                Verify
                                                            </button>
                                                        </>
                                                    )}
                                                    {order.orderProcess === 'order arrived' && (
                                                        <>
                                                            <select onChange={handleChange}>
                                                                <option value={'order arrived'}>Order arrived</option>
                                                                <option value={'order is shipping'}>
                                                                    Order is shipping
                                                                </option>
                                                                <option value={'order shipped'}>Order shipped</option>
                                                            </select>
                                                            <button onClick={() => handleClick(order._id)}>
                                                                Verify
                                                            </button>
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </p>
                                        <div className={cx('view-div')}>
                                            <p className={cx('title')}>Detail</p>
                                            <button onClick={() => handleGetDetail(order?._id)} className={cx('btn')}>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {myOrder.length === 0 && (
                            <>
                                <div className={cx('container-no-order', 'row', 'no-gutters')}>
                                    <p>This user has no order</p>
                                </div>
                            </>
                        )}
                    </>
                )}
                {!myOrder && (
                    <p className={cx('loading-api-para')}>
                        Please wait for moment. Sorry for the inconvenience.
                        <FontAwesomeIcon className={cx('loading-api-icon')} icon={faGear} />
                    </p>
                )}
            </div>
        </div>
    );
}

export default UserDetail;
