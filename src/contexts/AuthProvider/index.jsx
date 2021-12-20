import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import initialState from './initalstate'
import AuthReducer from './reducer'
import useActions from './actions'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const {
    handleEmailLogin,
    handleKakaoLogin,
    handleSignup,
    handleWithDrawal,
    handleLogout,
    handleGetUserInfo,
    handleModifyUserInfo,
  } = useActions(dispatch)

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
      }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
