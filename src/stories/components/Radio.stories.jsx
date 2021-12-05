import Radio from '@components/templates/Radio'
import { action } from '@storybook/addon-actions'
import React from 'react'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    style: { control: { type: 'object' } },
    className: { type: 'text' },
    formName: { type: 'text' },
    radioDirection: { control: { type: 'text' } },
    size: { control: { type: 'text' } },
    fontSize: { control: { type: 'text' } },
    lists: { control: { type: 'text' } },
  },
}

const Template = args => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  formName: 'radiotest',
  items: [
    {
      code: 'option1',
      name: '옵션 1',
    },
    {
      code: 'option2',
      name: '옵션 2',
    },
    {
      code: 'option3',
      name: '옵션 3',
    },
  ],
  onChange: e => {
    const { name, value } = e.target
    action('onChange')(name, value)
  },
}
