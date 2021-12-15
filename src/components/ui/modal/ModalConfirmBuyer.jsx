import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentcomfrimBuyer from '@components/ui/modal/contents/ContentConfirmBuyer'

const ConfrimBuyer = ({ visible, onClose, postId }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentcomfrimBuyer postId={postId} />
    </Modal>
  )
}

ConfrimBuyer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ConfrimBuyer
