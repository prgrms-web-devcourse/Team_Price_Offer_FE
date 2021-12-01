import React from 'react'
import Avatar from '../components/templates/Avatar'

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {},
}
const Template = args => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
Default.args = {}
