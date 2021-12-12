import React, { useRef } from 'react'
import ImageUploader from '@components/templates/ImageUploader'
import { imgApi } from '@api/apis'

export default {
  title: 'Component/ImageUploader',
  component: ImageUploader,
  argTypes: {},
}

export const Default = () => {
  const handleChange = async e => {
    const formData = new FormData()
    const imageFile = e.target.files[0]
    formData.append('image', imageFile)

    const res = await imgApi.convertImg(formData)

    if (Number(res.code) === 200) {
      imgRef.current.src = res.data?.imageUrl
      return
    }

    alert('API CORS 오류로 인해 임시로 이미지를 출력합니다.')
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)

    reader.onload = () => {
      imgRef.current.src = reader.result
    }
  }

  const imgRef = useRef(null)
  const imgUrl = 'https://picsum.photos/200'
  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '100%',
  }

  return (
    <ImageUploader onChange={handleChange}>
      <span>
        <img ref={imgRef} style={imgStyle} src={imgUrl} alt="" />
      </span>
    </ImageUploader>
  )
}
