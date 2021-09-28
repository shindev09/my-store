const USER = '/user'

export const path = {
  home: '/',
  login: '/login',
  register: '/register',
  product: '/product',
  productDetail: '/product/:idProduct',
  cart: '/cart',
  user: USER,
  profile: USER + '/profile',
  password: USER + '/password',
  purchase: USER + '/purchase',
  notFound: '*'
}
