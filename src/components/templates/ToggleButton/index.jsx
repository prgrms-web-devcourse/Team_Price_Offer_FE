import styled from '@emotion/styled'
import useToggle from '@hooks/useToggle'
import { FAVORITE_LIGHT, FAVORITE_LIKE } from '@utils/constant/icon'

const LikeButton = ({ name, className, alt, on = false, onClick, style }) => {
  const [checked, toggle] = useToggle(on)

  const img = checked ? FAVORITE_LIKE : FAVORITE_LIGHT

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
