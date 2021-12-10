import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentInfoModify from './contents/ContentInfoModify'

const ModalInfoModify = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentInfoModify />
    </Modal>
  )
}

ModalInfoModify.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalInfoModify
