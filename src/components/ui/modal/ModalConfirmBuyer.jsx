import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@components/templates/Modal'
import ContentcomfrimBuyer from '@components/ui/modal/contents/ContentConfirmBuyer'

const ConfirmBuyer = ({ visible, onClose, postId, offerList, postData }) => {
  return (
    <Modal visible={visible} onClose={onClose} className="modal">
      <ContentcomfrimBuyer
        postId={postId}
        offerList={offerList}
        postData={postData}
      />
    </Modal>
  )
}

ConfirmBuyer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
}

export default ConfirmBuyer
