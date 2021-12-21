import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentLogin from '@components/ui/modal/contents/ContentLogin'
import ContentSignup from '@components/ui/modal/contents/ContentSignup'

const ModalLogin = ({ visible, onClose }) => {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    !visible && setIsLogin(true)
  }, [visible])

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      className={`modal ${isLogin ? 'login' : 'signup'}`}>
      {isLogin ? (
        <div className="login-content">
          <ContentLogin />
          <div className="modal-footer">
            <p>
              아직 회원이 아니신가요?{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => setIsLogin(false)}>
                회원가입
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="signup-content">
          <ContentSignup />
          <div className="modal-footer">
            <p>
              기존 회원이시라면?{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => setIsLogin(true)}>
                로그인하러 가기
              </span>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalLogin
