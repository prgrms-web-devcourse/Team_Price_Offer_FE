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
    <Modal visible={visible} onClose={onClose} className="modal">
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
            <p>
              비밀번호를 잊으셨나요? <span>비밀번호 찾기</span>
            </p>
          </div>
        </div>
      ) : (
        <ContentSignup />
      )}
    </Modal>
  )
}

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalLogin
