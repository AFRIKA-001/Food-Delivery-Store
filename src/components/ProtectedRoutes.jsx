import React, { useContext } from 'react'
import UserAuthcontext from '../store/UserAuthContext'
import { Navigate } from 'react-router-dom'
function ProtectedRoutes({children}) {
const userAuthContext = useContext(UserAuthcontext);
if(!userAuthContext.session){
  return <Navigate to='/signup' replace />
}

  return children;
  
};

export default ProtectedRoutes;
