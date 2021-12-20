import styled from '@emotion/styled'
import useToggle from '@hooks/useToggle'
import { articleApi } from '@api/apis'
import { FAVORITE_LIGHT, FAVORITE_LIKE } from '@utils/constant/icon'
import { useBus } from 'react-bus'
import { useRouter } from 'next/router'

const LikeButton = ({ name, className, alt, postId, isLiked, style }) => {
  const bus = useBus()
  const router = useRouter()
  const [checked, toggle] = useToggle(isLiked)

  const handleChange = async e => {
    const res = await articleApi.toggleLikeArticle(postId)

    if (Number(res.code !== 200)) {
      return
    }

    if (router.pathname.includes('profile')) {
      bus.emit('fetchUserProfile', null)
    }

    toggle()
  }

  return (
    <Icon
      src={checked ? FAVORITE_LIKE : FAVORITE_LIGHT}
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
