import styled from '@emotion/styled'
import useToggle from '@hooks/useToggle'

const LikeButton = ({ name, className, alt, on = false, onClick, style }) => {
  const [checked, toggle] = useToggle(on)

  const img = checked
    ? require('@assets/images/icon/Favorite_like.svg').default.src
    : require('@assets/images/icon/Favorite_light.svg').default.src

  const handleChange = e => {
    toggle()
    onClick && onClick()
  }

  return (
    <Icon
      src={img}
      className={className}
      name={name}
      alt={alt}
      style={style}
      onClick={handleChange}
    />
  )
}

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export default LikeButton
