import Input from '@components/templates/Input'

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    style: {
      control: { type: 'object' },
    },
    className: { control: { type: 'text' } },
    onChange: { action: 'typing' },
    defaultValue: { control: { type: 'text' } },
  },
}

export const Default = args => {
  return <Input {...args} />
}
