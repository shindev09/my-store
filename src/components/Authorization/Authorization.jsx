import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { unauthorize } from 'src/pages/Auth/auth.slice'
import { path } from 'src/constants/path'
import { useSelector, useDispatch } from 'react-redux'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { getCartPurchases } from 'src/pages/Cart/cart.slice'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const history = useHistory()
  const authenticated = useAuthenticated()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [status, history, dispatch])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [authenticated, dispatch])

  return null
}
