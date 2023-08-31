import { useEffect, useState } from 'react';
import styles from './OrderHistory.module.scss';
import classNames from 'classnames/bind';
import { getAllOrderHistory, getOrderDetail, getOrderHistoryDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faGear, faHouseCircleCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
const cx = classNames.bind(styles);
function OrderHistory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allOrderHistory = useSelector((state) => state.orderHistory.getAllOrderHistory?.allOrderHistory);
    // let orderProcess = 'order shipped';
    useEffect(() => {
        getAllOrderHistory(dispatch);
    }, []);
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total;
    };
    const handleGetDetail = (id) => {
        getOrderHistoryDetail(dispatch, id, navigate);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('order-header')}>
                <Link to={'/order'} className={cx('order-header-order')}>
                    Order
                </Link>
                <p className={cx('order-header-para')}>/</p>
                <h1 className={cx('order-header-history')}>Order history</h1>
            </div>
            <div className={cx('order-div')}>
                {allOrderHistory && (
                    <>
                        {allOrderHistory?.map((order, index) => (
                            <div key={index} className={cx('container', 'row', 'no-gutters')}>
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
                                        This order is created at {order.orderDate.replace('T', ', ').slice(0, 20)}
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
                                            <FontAwesomeIcon className={cx('process-icon', 'icon')} icon={faCheck} />
                                            <p className={cx('process-para')}>Processed</p>
                                        </>
                                    )}
                                    {order.orderProgress && order.orderProcess === 'order shipped' && (
                                        <>
                                            <FontAwesomeIcon className={cx('process-icon', 'icon')} icon={faBox} />
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
                {!allOrderHistory && (
                    <p className={cx('loading-api-para')}>
                        Please wait for moment. Sorry for the inconvenience.
                        <FontAwesomeIcon className={cx('loading-api-icon')} icon={faGear} />
                    </p>
                )}
            </div>
        </div>
    );
}

export default OrderHistory;
