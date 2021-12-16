import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentChat from '@components/ui/modal/contents/ContentChat'

const Chat = ({ visible, onClose, postId, offerId }) => {
  const hoverEvent = e => {
    e.target.style.fill = '#F74F2A'
  }

  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentChat postId={postId} offerId={offerId} />
    </Modal>
  )
}

Chat.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Chat
