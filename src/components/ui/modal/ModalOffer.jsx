import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'

const ModalOffer = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <div className="modal-header">
        <h2>가격을 제시해볼까요?</h2>
        <p>당신의 제안이 마음에 든다면, 연락이 올 거에요!</p>
      </div>
      <div className="modal-body">
        <div className="modal-body_form">
          <div className="modal-body_form-input offer">
            <h3>제안가격</h3>
            <Input name="offer" placeholder="숫자로만 입력해주세요!" />
          </div>
        </div>
        <div className="modal-body_btn-wrapper">
          <Button className="modal-body_btn offer">Offer</Button>
        </div>
      </div>
    </Modal>
  )
}

ModalOffer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalOffer