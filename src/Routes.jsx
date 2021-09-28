import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import Fallback from './components/Fallback/Fallback'
import CartLayout from './layouts/CartLayout/CartLayout'

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path={path.home} exact>
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          </MainLayout>
        </Route>
        <Route path={path.productDetail} exact>
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ProductDetail />
            </Suspense>
          </MainLayout>
        </Route>
        <Route path={path.login}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Suspense fallback={<Fallback />}>
                <Login />
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.register}>
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Suspense fallback={<Fallback />}>
                <Register />
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.user}>
          <AuthenticatedGuard>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <User />
              </Suspense>
            </MainLayout>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.cart}>
          <AuthenticatedGuard>
            <CartLayout>
              <Suspense fallback={<Fallback />}>
                <Cart />
              </Suspense>
            </CartLayout>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.notFound}>
          <Suspense fallback={<Fallback />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </div>
  )
}
