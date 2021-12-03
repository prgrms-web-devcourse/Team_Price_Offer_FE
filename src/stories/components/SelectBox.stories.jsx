import Selectbox from '../../components/templates/Selectbox'

export default {
  title: 'Component/Selectbox',
  component: Selectbox,
  argTypes: {
    style: {
      defaultValue: {
        width: '100px',
        height: '50px',
      },
      control: { type: 'object' },
    },
    name: {
      control: 'text',
    },
    options: {
      control: 'array',
    },
  },
}

const Template = args => <Selectbox {...args} />

export const PrimaryDropdown = Template.bind({})
PrimaryDropdown.args = {
  defaultText: '주소를 선택하세요',
  options: [
    {
      value: '사용자',
      name: '사용자',
    },
    {
      value: '게시글',
      name: '게시글',
    },
  ],
}
