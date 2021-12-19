import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentMyReview from './contents/ContentMyReview'

const Myreivew = ({ visible, onClose, postInfo }) => {
  const hoverEvent = e => {
    e.target.style.fill = '#F74F2A'
  }

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      postInfo={postInfo}
      className="modal">
      <ContentMyReview onClose={onClose} postInfo={postInfo} />
    </Modal>
  )
}

Myreivew.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Myreivew
