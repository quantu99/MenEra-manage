import { useEffect, useState } from 'react';
import Header from '../../components/Layout/Header/Header';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import styles from './AddProduct.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../../redux/apiRequest';
import validation from './validation';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '../../firebase';
const storage = getStorage(app);
const cx = classNames.bind(styles);
function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    const fetching = useSelector((state) => state.products.createProduct?.isFetching);
    const user = useSelector((state) => state.auth.login?.currentUser);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    });
    const [file, setFile] = useState(null);
    const [file2nd, setFile2nd] = useState(null);
    const [values, setValues] = useState({
        name: '',
        price: '',
        color: '',
        type: [''],
        description: '',
        imageUrl1: '',
        imageUrl2: '',
    });
    console.log(values);
    const handleChange = (e) => {
        if (e.target.name === 'type') {
            const types = e.target.value.split(',');
            setValues({
                ...values,
                type: types,
            });
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        }
    };
    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setValues({
                            ...values,
                            imageUrl1: downloadURL,
                        });
                    });
                },
            );
        };
        file && upload();
    }, [file]);
    useEffect(() => {
        const upload = () => {
            const name = new Date().getTime + file2nd.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file2nd);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setValues({
                            ...values,
                            imageUrl2: downloadURL,
                        });
                    });
                },
            );
        };
        file2nd && upload();
    }, [file2nd]);
    useEffect(() => {
        const isValid =
            values.name !== '' &&
            values.price !== '' &&
            /^\d+$/.test(values.price) &&
            values.color !== '' &&
            Array.isArray(values.type) &&
            values.type.length !== 0 &&
            values.description !== '' &&
            values.description.length <= 1000 &&
            values.imageUrl1 !== '' &&
            !values.imageUrl1.indexOf(' ') !== -1 &&
            /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl1) &&
            values.imageUrl2 !== '' &&
            !values.imageUrl2.indexOf(' ') !== -1 &&
            /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(values.imageUrl2);

        setValid(isValid);
    }, [values]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name: values.name,
            price: values.price,
            color: values.color,
            type: values.type,
            description: values.description,
            imageUrl: values.imageUrl1,
            imageUrl2: values.imageUrl2,
        };
        setErrors(validation(values));
        if (valid) {
            createNewProduct(newProduct, dispatch, navigate);
        }
    };

    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />

            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('content', 'col', 'l-4', 'l-o-4')}>
                    <h1 className={cx('title')}>Add Products</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's name</label>
                            <input
                                onChange={handleChange}
                                name="name"
                                className={cx('input')}
                                placeholder="Enter product's name"
                            />
                        </div>
                        {errors.name && <p className={cx('error-msg')}>{errors.name}</p>}
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's price</label>
                            <input
                                onChange={handleChange}
                                name="price"
                                className={cx('input')}
                                placeholder="Enter product'price"
                            />
                        </div>
                        {errors.price && <p className={cx('error-msg')}>{errors.price}</p>}
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's color</label>
                            <input
                                onChange={handleChange}
                                name="color"
                                className={cx('input')}
                                placeholder="Enter product's color"
                            />
                        </div>
                        {errors.color && <p className={cx('error-msg')}>{errors.color}</p>}
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's type</label>
                            <input
                                onChange={handleChange}
                                name="type"
                                className={cx('input')}
                                placeholder="Enter product's type"
                            />
                        </div>
                        {errors.type && <p className={cx('error-msg')}>{errors.type}</p>}
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's image</label>
                            <input
                                onChange={(e) => setFile(e.target.files[0])}
                                name="imageUrl1"
                                className={cx('input')}
                                placeholder="Image url"
                                type="file"
                            />
                        </div>
                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's image bonus</label>
                            <input
                                type="file"
                                onChange={(e) => setFile2nd(e.target.files[0])}
                                name="imageUrl2"
                                className={cx('input')}
                                placeholder="Image url"
                            />
                        </div>

                        <div className={cx('input-div')}>
                            <label className={cx('input-div-label')}>Product's description</label>
                            <textarea
                                onChange={handleChange}
                                name="description"
                                placeholder="Enter products'description"
                                className={cx('input', 'textarea')}
                            ></textarea>
                        </div>
                        {errors.description && <p className={cx('error-msg')}>{errors.description}</p>}
                        {!fetching && <button className={cx('btn')}>Save</button>}
                        {fetching && (
                            <button disabled={true} className={cx('btn', 'loading-btn')}>
                                <span className={cx('loading-btn-content')}>Please wait...</span>
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
