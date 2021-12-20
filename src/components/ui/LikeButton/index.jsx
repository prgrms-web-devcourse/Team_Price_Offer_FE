import styled from '@emotion/styled'
import useToggle from '@hooks/useToggle'
import { articleApi } from '@api/apis'
import { FAVORITE_LIGHT, FAVORITE_LIKE } from '@utils/constant/icon'

const LikeButton = ({ name, className, alt, postId, isLiked, style }) => {
  const [checked, toggle] = useToggle(isLiked)
  const img = checked ? FAVORITE_LIKE : FAVORITE_LIGHT

  const handleChange = async e => {
    const res = await articleApi.toggleLikeArticle(postId)

    if (Number(res.code === 200)) {
      toggle()
    }
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
