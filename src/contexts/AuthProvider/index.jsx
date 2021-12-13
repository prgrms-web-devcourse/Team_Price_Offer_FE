// Provider
import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import Header from '@components/ui/Header'
import Spinner from '@components/templates/Spinner'
import AuthReducer from './reducer'
import useActions from './actions'

const initialState = {
  isLoading: true,
  token: null,
  userData: {
    id: null,
    email: null,
    appleLevel: null,
    nickname: null,
    profileImage: null,
    address: null,
  },
}

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  console.log(state)

  const {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleModifyUserInfo,
    handleLoadingOn,
    handleLoadingOff,
  } = useActions(dispatch)

  if (state.isLoading) {
    return (
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="spinner-wrapper">
            <Spinner loading={state.isLoading} size={70} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        handleEmailLogin,
        handleKakaoLogin,
        handleSignup,
        handleWithDrawal,
        handleLogout,
        handleGetUserInfo,
        handleModifyUserInfo,
        handleLoadingOn,
        handleLoadingOff,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
