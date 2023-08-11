import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layout/Header/Header';
import validation from './validation';
import { loginUser } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Login() {
    const [view, setView] = useState('password');
    const [eye, setEye] = useState(true);
    const handleView = () => {
        setView('text');
        setEye(false);
    };
    const handleUnview = () => {
        setView('password');
        setEye(true);
    };
    // set validate
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetching = useSelector((state) => state.auth.login?.isFetching);
    const error = useSelector((state) => state.auth.login?.error);
    useEffect(() => {
        if (error) {
            setLoginError(true);
        }
        if (!error) {
            setLoginError(false);
        }
    }, [error]);
    const [values, setValues] = useState({
        username: 'admin',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        const isValid =
            values.username !== '' &&
            !values.username.indexOf(' ') !== -1 &&
            /^[a-zA-Z0-9]+$/.test(values.username) &&
            values.password.length >= 6 &&
            values.password !== '' &&
            !values.password.includes("'") &&
            !values.password.indexOf(' ') !== -1;
        setValid(isValid);
    }, [values]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: values.username,
            password: values.password,
        };
        setErrors(validation(values));
        if (valid) {
            loginUser(user, dispatch, navigate);
        }
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('login-div', 'col', 'l-6', 'l-o-3')}>
                    <h1 className={cx('title')}>Login</h1>
                    {/* FORM OPEN */}
                    <form onSubmit={handleSubmit} className={cx('input-form')}>
                        <div className={cx('input-div')}>
                            <label htmlFor="username" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            </label>
                            <input disabled name="username" id="username" className={cx('input')} value={'admin'} />
                        </div>
                        {errors.username && <p>{errors.username}</p>}
                        <div className={cx('input-div')}>
                            <label htmlFor="password" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </label>
                            <input
                                onChange={handleChange}
                                name="password"
                                id="password"
                                type={`${view}`}
                                className={cx('input')}
                                placeholder="Password"
                            />
                            {eye && <FontAwesomeIcon className={cx('icon-view')} onClick={handleView} icon={faEye} />}
                            {!eye && (
                                <FontAwesomeIcon className={cx('icon-view')} onClick={handleUnview} icon={faEyeSlash} />
                            )}
                        </div>
                        {errors.password && <p className={cx('error-msg')}>{errors.password}</p>}
                        {loginError && <p className={cx('error-msg')}>Something went wrong, please try again!</p>}

                        {!fetching && <button className={cx('btn')}>Sign in</button>}
                        {fetching && (
                            <button disabled={true} className={cx('btn', 'loading-btn')}>
                                <span className={cx('loading-btn-content')}>Please wait...</span>
                            </button>
                        )}
                    </form>
                    {/* FORM CLOSE */}
                </div>
            </div>
        </div>
    );
}

export default Login;
