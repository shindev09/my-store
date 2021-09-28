import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import Fallback from './components/Fallback/Fallback'
import CartLayout from './layouts/CartLayout/CartLayout'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

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
          <ErrorBoundary>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <Home />
              </Suspense>
            </MainLayout>
          </ErrorBoundary>
        </Route>
        <Route path={path.productDetail} exact>
          <ErrorBoundary>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <ProductDetail />
              </Suspense>
            </MainLayout>
          </ErrorBoundary>
        </Route>
        <Route path={path.login}>
          <UnauthenticatedGuard>
            <ErrorBoundary>
              <RegisterLayout title="Đăng nhập">
                <Suspense fallback={<Fallback />}>
                  <Login />
                </Suspense>
              </RegisterLayout>
            </ErrorBoundary>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.register}>
          <UnauthenticatedGuard>
            <ErrorBoundary>
              <RegisterLayout title="Đăng ký">
                <Suspense fallback={<Fallback />}>
                  <Register />
                </Suspense>
              </RegisterLayout>
            </ErrorBoundary>
          </UnauthenticatedGuard>
        </Route>
        <Route path={path.user}>
          <AuthenticatedGuard>
            <ErrorBoundary>
              <MainLayout>
                <Suspense fallback={<Fallback />}>
                  <User />
                </Suspense>
              </MainLayout>
            </ErrorBoundary>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.cart}>
          <AuthenticatedGuard>
            <ErrorBoundary>
              <CartLayout>
                <Suspense fallback={<Fallback />}>
                  <Cart />
                </Suspense>
              </CartLayout>
            </ErrorBoundary>
          </AuthenticatedGuard>
        </Route>
        <Route path={path.notFound}>
          <ErrorBoundary>
            <Suspense fallback={<Fallback />}>
              <NotFound />
            </Suspense>
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  )
}
