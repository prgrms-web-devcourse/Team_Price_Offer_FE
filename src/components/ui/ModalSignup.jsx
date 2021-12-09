import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'

const ModalSignup = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <div className="modal-header">
        <h2>회원가입</h2>
      </div>
      <div className="modal-body">
        <div className="modal-body_form">
          <div className="modal-body_form-input nickname">
            <h3>닉네임</h3>
            <Input name="nickname" placeholder="닉네임 (2~15자)" />
          </div>
          <div className="modal-body_form-input address">
            <h3>주소</h3>
            <Input name="address" placeholder="주소" />
          </div>
          <div className="modal-body_form-input email">
            <h3>이메일</h3>
            <div className="email-wrapper">
              <Input name="email" placeholder="이메일" />
              <Button>중복검사</Button>
            </div>
          </div>
          <div className="modal-body_form-input password">
            <h3>비밀번호</h3>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <Input name="password" placeholder="비밀번호" />
          </div>
          <div className="modal-body_form-input password-confirm">
            <h3>비밀번호 확인</h3>
            <Input name="passwordConfirm" placeholder="비밀번호 확인" />
          </div>
        </div>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn">회원가입</Button>
        </div>
      </div>
    </Modal>
  )
}

ModalSignup.propTypes = {}

export default ModalSignup
