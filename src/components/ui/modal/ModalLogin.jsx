import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentLogin from '@components/ui/modal/contents/ContentLogin'

const ModalLogin = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentLogin />
    </Modal>
  )
}

ModalLogin.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalLogin
