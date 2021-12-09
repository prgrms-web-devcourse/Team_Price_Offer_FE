import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import { Global, css } from '@emotion/react'

const ModalLogin = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <div className="modal-header">
        <h2>로그인</h2>
        <p>구매자가 제안해요, Offer!</p>
      </div>
      <div className="modal-body">
        <div className="modal-body_form">
          <div className="modal-body_form-input email">
            <h3>이메일</h3>
            <Input name="email" placeholder="이메일" />
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <Input name="password" placeholder="비밀번호" />
          </div>
        </div>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn email">이메일로 로그인</Button>
          <Button className="modal-body_btn kakao">카카오로 로그인</Button>
        </div>
      </div>
      <div className="modal-footer">
        <p>
          아직 회원이 아니신가요? <span>회원가입</span>
        </p>
        <p>
          비밀번호를 잊으셨나요? <span>비밀번호 찾기</span>
        </p>
      </div>
    </Modal>
  )
}

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalLogin
