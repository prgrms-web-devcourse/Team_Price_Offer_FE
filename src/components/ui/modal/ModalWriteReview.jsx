import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentWriteReivew from './contents/ContentWriteReivew'

const WriteReview = ({
  visible,
  onClose,
  postId,
  postData,
  userNickname,
  needChangeStatus,
}) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentWriteReivew
        postId={postId}
        postData={postData}
        userNickname={userNickname}
        needChangeStatus={needChangeStatus}
        onClose={onClose}
      />
    </Modal>
  )
}

WriteReview.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default WriteReview
