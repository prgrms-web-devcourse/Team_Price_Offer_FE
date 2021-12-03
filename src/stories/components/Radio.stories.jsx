import Radio from '@components/templates/Radio'
import React from 'react'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    style: { control: { type: 'object' } },
    className: { type: 'text' },
    name: { type: 'text' },
    radioDirection: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
    fontSize: { control: { type: 'text' } },
    lists: { control: { type: 'text' } },
  },
}

const Template = args => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  lists: [
    {
      text: '옵션 1',
      value: 'option1',
    },
    {
      text: '옵션 2',
      value: 'option2',
    },
    {
      text: '옵션 3',
      value: 'option3',
    },
  ],
}
