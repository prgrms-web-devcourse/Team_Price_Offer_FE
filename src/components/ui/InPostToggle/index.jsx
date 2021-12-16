import { useEffect } from 'react'
import styled from '@emotion/styled'
import useToggle from '@hooks/useToggle'
import { articleApi } from '@api/apis'
import useStorage from '@hooks/useStorage'
import { FAVORITE_LIGHT, FAVORITE_LIKE } from '@utils/constant/icon'

const { getItem } = useStorage()

const LikeButton = ({ name, className, alt, onClick, isLiked, style }) => {
  const [checked, toggle] = useToggle(isLiked)

  //   console.log(getItem('postId'))
  const postId = getItem('postId').replaceAll('"', '')

  //   console.log(postId)

  const img = checked ? FAVORITE_LIKE : FAVORITE_LIGHT

  const handleChange = async e => {
    const res = await articleApi.toggleLikeArticle(postId)
    toggle()
    onClick && onClick()
    if (Number(res.code === 200)) {
      //   console.log('게시글 찜')
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
