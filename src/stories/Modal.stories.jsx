import Modal from '@components/templates/Modal'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
}
export const Default = () => {
  return (
    <div>
      <button>모달온</button>
      <Modal>안냐숑</Modal>
    </div>
  )
}
