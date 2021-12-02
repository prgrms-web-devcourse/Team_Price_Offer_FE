import Divider from '@components/templates/Divider'

export default {
  title: 'Component/Divider',
  component: Divider,
  argTypes: {
    marginSize: { control: 'range' },
  },
}
export const Horizontal = args => {
  return (
    <>
      <span>위</span>
      <Divider type="horizontal" {...args} />
      <span>아래</span>
    </>
  )
}

export const Vertical = args => {
  return (
    <>
      <span>위</span>
      <Divider type="vertical" {...args} />
      <span>아래</span>
    </>
  )
}
