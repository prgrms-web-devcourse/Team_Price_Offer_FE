import Modal from '@components/templates/Modal'
import { useState } from 'react'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
}
export const Default = args => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(true)}>모달온</button>
      <Modal visible={visible} {...args} onClose={() => setVisible(false)}>
        안냐숑
      </Modal>
    </div>
  )
}
