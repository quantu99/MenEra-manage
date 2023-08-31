import { useSelector } from 'react-redux';
import Header from '../components/Layout/Header/Header';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <Header />
        </>
    );
}

export default Home;
