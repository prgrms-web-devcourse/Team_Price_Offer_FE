import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import Header from '@components/ui/Header'
import Spinner from '@components/templates/Spinner'
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
    handleGetUserProfile,
    handleLoadingOn,
    handleLoadingOff,
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
        handleGetUserProfile,
        handleLoadingOn,
        handleLoadingOff,
      }}>
      {state.isLoading ? (
        <div className="container">
          <div className="wrapper">
            <Header />
            <div className="spinner-wrapper">
              <Spinner loading={state.isLoading} size={70} />
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
