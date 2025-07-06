import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../utils/apiRequest';
import { logout } from '../reducers';
import Loader from './Loader';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                const res = await apiRequest({
                    url: "/auth/logout",
                    method: "POST"
                });
                dispatch(logout());
                navigate("/login");
            } catch (error) {
                console.error("Error during logout:", error);
            }
        };

        performLogout();
    }, [dispatch, navigate]);

    return (
        <div>
            <Loader />
        </div>
    );
};

export default Logout;