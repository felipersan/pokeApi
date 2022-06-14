import React, {useContext} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {AuthContext} from '../contexts/auth';

export default function Routes() {
  const {user} = useContext(AuthContext);
  return user ? <AppRoutes /> : <AuthRoutes />;
}
