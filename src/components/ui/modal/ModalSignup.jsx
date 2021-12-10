import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentSignup from './contents/ContentSignup'

const ModalSignup = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentSignup />
    </Modal>
  )
}

ModalSignup.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalSignup
