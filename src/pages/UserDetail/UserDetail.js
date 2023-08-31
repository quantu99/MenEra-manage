import classNames from 'classnames/bind';
import styles from './UserDetail.module.scss';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function UserDetail() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('info-div', 'col', 'l-6')}>
                    <Link to={'/'} className={cx('logo-div')}>
                        <img src={logo} alt="logo" className={cx('logo-image')} />
                        <h1 className={cx('logo-title')}>Men's Era</h1>
                    </Link>
                    <div className={cx('info-div')}>
                        {/* <div className={cx('navigate-div')}>
                            <p
                                style={{ fontSize: '20px', fontWeight: '500', color: 'var(--cream-color)' }}
                                className={cx('navigate-para')}
                            >
                                Order #{orderDetail?._id}
                            </p>
                        </div> */}
                        <div className={cx('contact-div')}>
                            <p className={cx('contact-title')}>Information</p>
                            <div className={cx('shipping-div')}>
                                <div className={cx('shipping-div-child', 'shipping-div-child-email')}>
                                    <p className={cx('shipping-title')}>Contact</p>
                                    <div className={cx('value-change')}>
                                        {/* <p className={cx('shipping-value')}>{email}</p> */}
                                        <p className={cx('shipping-value')}>email.com</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-div-child', 'shipping-div-child-shipto')}>
                                    <p className={cx('shipping-title')}>Ship to</p>
                                    <div className={cx('value-change')}>
                                        {/* <p className={cx('shipping-value')}>{address}</p> */}
                                        <p className={cx('shipping-value')}>address</p>
                                    </div>
                                </div>
                                {/* <div className={cx('shipping-div-child')}>
                                    <p className={cx('shipping-title')}>Method</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>J&T Express</p>
                                        <p className={cx('shipping-price')}>
                                            {shipPrice.toLocaleString()}
                                            <span style={{ textDecoration: 'underline' }}>đ</span>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className={cx('payment-div')}>
                            <p style={{ paddingBottom: '20px' }} className={cx('payment-title')}>
                                Payment
                            </p>
                            <div className={cx('payment-info-div')}>
                                <div className={cx('payment-info-header')}>
                                    <p className={cx('header-title')}>Credit Card</p>
                                    <img
                                        src="https://webservices.global-e.com/content/images/paymentMethods/pm.svg"
                                        className={cx('header-image')}
                                    />
                                </div>
                                <div className={cx('payment-options')}>
                                    <img
                                        className={cx('payment-options-image')}
                                        src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/payment_5331d170-aa8c-4a49-9b5d-ea6411b23c75.png?v=1613544399"
                                    />
                                    <p className={cx('payment-options-para')}>And many more...</p>
                                </div>
                                <div className={cx('payment-card-info')}>
                                    <div className={cx('payment-card-input-div', 'card-number')}>
                                        <input
                                            name="cardNumber"
                                            placeholder="Card number "
                                            className={cx('payment-card-input')}
                                            value={cardNumber}
                                            disabled
                                        />
                                        <img
                                            className={cx('card-number-image')}
                                            src="https://webservices.global-e.com/content/images/paymentMethods/pm.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className={cx('process-div')}>
                            <p className={cx('process-title')}>Process (Estimate: 3- 6 days)</p>
                            <div className={cx('process-bar')}>
                                {orderProcess === 'not verified' && (
                                    <>
                                        <div className={cx('process-bar-1st-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-2nd-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-3rd-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-4th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-5th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {orderProcess === 'order processed' && (
                                    <>
                                        <div className={cx('process-bar-1st-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-2nd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-3rd-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-4th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-5th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {orderProcess === 'order shipped' && (
                                    <>
                                        <div className={cx('process-bar-1st-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-2nd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-3rd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-4th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-5th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {orderProcess === 'order is shipping' && (
                                    <>
                                        <div className={cx('process-bar-1st-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-2nd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-3rd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-4th-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-5th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon')} icon={faSpinner} />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {orderProcess === 'order arrived' && (
                                    <>
                                        <div className={cx('process-bar-1st-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-2nd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-3rd-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-4th-child', 'active')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                        <div className={cx('process-bar-5th-child')}>
                                            <div className={cx('process-bar-icon-div')}>
                                                <FontAwesomeIcon className={cx('process-icon-check')} icon={faCheck} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={cx('process-para')}>
                                <p>Order is processing</p>
                                <p>Order processed</p>
                                <p>Order shipped</p>
                                <p>Order en route</p>
                                <p>Order arrived</p>
                            </div>
                        </div> */}
                        <div className={cx('footer-div')}>
                            <Link to={'/order'} className={cx('footer-return')}>
                                <FontAwesomeIcon className={cx('footer-icon')} icon={faChevronLeft} />
                                <p className={cx('footer-para')}>Return back</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-6', 'order-div')}></div>
            </div>
        </div>
    );
}

export default UserDetail;
