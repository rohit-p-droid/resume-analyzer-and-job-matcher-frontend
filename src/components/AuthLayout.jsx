import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
const AuthLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
  }, []);
  return (
    isLoggedIn ? <>
      <Outlet />
    </> : null
  )
}

export default AuthLayout