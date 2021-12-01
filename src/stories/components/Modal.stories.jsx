import Modal from '@components/templates/Modal'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
}
export const Default = args => {
  return (
    <div>
      <button>모달온</button>
      <Modal {...args}>안냐숑</Modal>
    </div>
  )
}
