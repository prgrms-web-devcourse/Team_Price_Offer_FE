import Radio from '@components/templates/Radio'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    style: { control: { type: 'object' } },
    className: { type: 'text' },
    name: { type: 'text' },
    radioDirection: { control: { type: 'text' } },
  },
}

const lists = [{ value: 'option1' }, { value: 'option2' }, { value: 'option3' }]

export const Default = args => {
  return <Radio lists={lists} {...args} />
}
