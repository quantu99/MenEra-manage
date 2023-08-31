import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destroyProduct, getProductDetail, updateProduct } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import Header from '../../components/Layout/Header/Header';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import validation from './validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function ProductDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = params.id;
    const productDetail = useSelector((state) => state.products.getDetail?.productDetail);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);
    useEffect(() => {
        getProductDetail(dispatch, id);
    }, []);
    // set validate:
    const fetching = useSelector((state) => state.products.updateProduct?.isFetching);
    const destroyFetching = useSelector((state) => state.products.destroyProduct?.isFetching);
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    const [values, setValues] = useState({
        name: productDetail?.name,
        price: productDetail?.price,
        color: productDetail?.color,
        type: productDetail?.type,
        imageUrl: productDetail?.imageUrl,
        imageUrl2: productDetail?.imageUrl2,
        description: productDetail?.description,
    });
    const handleChange = (e) => {
        if (e.target.name === 'type') {
            const types = e.target.value.split(',');
            setValues((prevValues) => ({
                ...prevValues,
                type: types,
            }));
        } else {
            setValues((prevValues) => ({
                ...prevValues,
                [e.target.name]: e.target.value,
            }));
        }
    };
    // const handleChange = (e) => {
    //     if (e.target.name === 'type') {
    //         const types = e.target.value.split(',');
    //         setValues({
    //             ...values,
    //             type: types,
    //         });
    //     } else {
    //         setValues({
    //             ...values,
    //             [e.target.name]: e.target.value,
    //         });
    //     }
    // };
    useEffect(() => {
        const isValid =
            values.name !== '' &&
            values.price !== '' &&
            /^\d+$/.test(values.price) &&
            values.color !== '' &&
            Array.isArray(values.type) &&
            values.type.length !== 0 &&
            values.type[0].trim() !== '' &&
            values.description !== '' &&
            values.description?.length <= 1000 &&
            values.imageUrl !== '' &&
            !values.imageUrl.indexOf(' ') !== -1 &&
            /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl) &&
            values.imageUrl2 !== '' &&
            !values.imageUrl2.indexOf(' ') !== -1 &&
            /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl2);

        setValid(isValid);
    }, [values]);
    const handleSubmit = () => {
        const newProduct = {
            name: values.name,
            price: values.price,
            color: values.color,
            type: values.type,
            imageUrl: values.imageUrl,
            imageUrl2: values.imageUrl2,
            description: values.description,
        };
        setErrors(validation(values));
        if (valid) {
            updateProduct(dispatch, id, newProduct, navigate);
        }
    };
    const handleDelete = () => {
        destroyProduct(dispatch, id, navigate);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />

            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('product-div', 'col', 'l-12')}>
                    <div className={cx('image-div')}>
                        <img className={cx('image')} src={productDetail?.imageUrl} />
                        <img className={cx('image')} src={productDetail?.imageUrl2} />
                    </div>
                    <div className={cx('info-div')}>
                        <p className={cx('title')}>
                            Home {'>'} <span style={{ color: 'var(--tan-color)' }}>{productDetail?.name}</span>
                        </p>
                        <div className={cx('info-detail')}>
                            <div className={cx('name-price')}>
                                {' '}
                                <p className={cx('name')}>{productDetail?.name}</p>
                                <p className={cx('price')}>
                                    {productDetail?.price.toLocaleString()}
                                    <span style={{ textDecoration: 'underline' }}>đ</span>
                                </p>
                            </div>
                            <p className={cx('type')}>Type: {productDetail?.type.join(', ')}</p>
                            <p className={cx('color')}>Color: {productDetail?.color}</p>
                            <p className={cx('description-title')}>Description:</p>
                            <p className={cx('description')}>{productDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('edit', 'row', 'no-gutters')}>
                <div className={cx('content', 'col', 'l-4', 'l-o-4')}>
                    <h1 className={cx('edit-title')}>Edit</h1>
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's name</label>
                        <input
                            onChange={handleChange}
                            name="name"
                            className={cx('input')}
                            placeholder={productDetail?.name}
                        />
                    </div>
                    {errors.name && <p className={cx('error-msg')}>{errors.name}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's price</label>
                        <input
                            onChange={handleChange}
                            name="price"
                            className={cx('input')}
                            placeholder={productDetail?.price}
                        />
                    </div>
                    {errors.price && <p className={cx('error-msg')}>{errors.price}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's color</label>
                        <input
                            onChange={handleChange}
                            name="color"
                            className={cx('input')}
                            placeholder={productDetail?.color}
                        />
                    </div>
                    {errors.color && <p className={cx('error-msg')}>{errors.color}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's type</label>
                        <input
                            onChange={handleChange}
                            name="type"
                            className={cx('input')}
                            placeholder={productDetail?.type}
                        />
                    </div>
                    {errors.type && <p className={cx('error-msg')}>{errors.type}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's image</label>
                        <input
                            onChange={handleChange}
                            name="imageUrl"
                            className={cx('input')}
                            placeholder={productDetail?.imageUrl}
                        />
                    </div>
                    {errors.imageUrl && <p className={cx('error-msg')}>{errors.imageUrl}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's image bonus</label>
                        <input
                            onChange={handleChange}
                            name="imageUrl2"
                            className={cx('input')}
                            placeholder={productDetail?.imageUrl2}
                        />
                    </div>
                    {errors.imageUrl2 && <p className={cx('error-msg')}>{errors.imageUrl2}</p>}
                    <div className={cx('input-div')}>
                        <label className={cx('input-div-label')}>Product's description</label>
                        <textarea onChange={handleChange} name="description" className={cx('input', 'textarea')}>
                            {productDetail?.description}
                        </textarea>
                    </div>
                    {errors.description && <p className={cx('error-msg')}>{errors.description}</p>}
                    {!fetching && (
                        <button onClick={handleSubmit} className={cx('btn')}>
                            Save
                        </button>
                    )}
                    {fetching && (
                        <button disabled={true} className={cx('btn', 'loading-btn')}>
                            <span className={cx('loading-btn-content')}>Please wait...</span>
                        </button>
                    )}
                    <label htmlFor="checkbox">
                        <p className={cx('delete-para')}>Delete this product</p>
                    </label>
                    <input className={cx('checkbox')} id="checkbox" type="checkbox" />
                    <div className={cx('delete-div')}>
                        <label htmlFor="checkbox">
                            <FontAwesomeIcon className={cx('delete-icon')} icon={faXmark} />
                        </label>
                        <p className={cx('delete-title')}>
                            Are you sure to delete this product, it will be removed totally from your store right now.
                        </p>
                        <div className={cx('btn-div')}>
                            {!destroyFetching && (
                                <button onClick={handleDelete} className={cx('delete-btn', 'delete')}>
                                    Delete
                                </button>
                            )}
                            {destroyFetching && (
                                <button disabled={true} className={cx('delete-btn', 'delete', 'loading-btn')}>
                                    <span className={cx('loading-btn-content')}>Please wait...</span>
                                </button>
                            )}
                            <label className={cx('delete-btn', 'cancel')} htmlFor="checkbox">
                                Cancel{' '}
                            </label>
                        </div>
                    </div>
                    <label htmlFor="checkbox" className={cx('overlay')}></label>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
