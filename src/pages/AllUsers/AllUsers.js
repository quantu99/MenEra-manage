import styles from './AllUsers.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Header from '../../components/Layout/Header/Header';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import { getAllUsers, getUserDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function AllUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const allUsers = useSelector((state) => state.user.user?.allUsers);
    console.log(allUsers);
    useEffect(() => {
        getAllUsers(dispatch);
    }, []);
    const handleClick = (id) => {
        getUserDetail(dispatch, id, navigate);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('content', 'col', 'l-7', 'l-o-3')}>
                    <h1 className={cx('title')}>All Users</h1>
                    <div className={cx('user-div')}>
                        <p className={cx('icon')}>STT</p>
                        <p className={cx('user-fullname')}>Fullname</p>
                        <p className={cx('user-username')}>Username</p>
                        <p className={cx('user-email')}>Email</p>
                    </div>
                    {allUsers?.map((user, index) => (
                        <div className={cx('user-div')}>
                            <p className={cx('icon')}>{currentIndex + index}</p>
                            <p className={cx('user-fullname')}>
                                {user.firstname} {user.lastname}
                            </p>
                            <p className={cx('user-username')}>{user.username}</p>
                            <p className={cx('user-email')}>{user.email}</p>
                            <p onClick={() => handleClick(user._id)} className={cx('user-edit')}>
                                View
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllUsers;
