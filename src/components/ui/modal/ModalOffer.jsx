import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentOffer from './contents/ContentOffer'

const ModalOffer = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentOffer />
    </Modal>
  )
}

ModalOffer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalOffer
