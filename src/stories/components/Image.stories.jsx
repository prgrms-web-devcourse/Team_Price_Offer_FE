import Image from '../../components/templates/Image'

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    lazy: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    threshold: {
      type: { name: 'number' },
      defaultValue: 0.5,
      control: { type: 'number' },
    },
    // width: {
    //   defaultValue: 200,
    //   control: { type: 'range', min: 200, max: 600 },
    // },
    // height: {
    //   defaultValue: 200,
    //   control: { type: 'range', min: 200, max: 600 },
    // },
    alt: {
      control: 'string',
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    ratio: {
      control: { type: 'text' },
    },
  },
}

export const Default = args => {
  return <Image {...args} />
}

export const Lazy = args => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map(i => (
        <Image
          {...args}
          lazy
          block
          src={`${'https://picsum.photos/200.src'}?${i}`}
          key={i}
        />
      ))}
    </div>
  )
}
