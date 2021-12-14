import React, { useRef } from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import ImageUploader from '@components/templates/ImageUploader'
import validate from '@utils/validation'
import { useFormik } from 'formik'
import { imgApi } from '@api/apis'
import { PHOTO, NOIMG } from '@utils/constant'
import { useAuthContext } from '@hooks/useAuthContext'

const ContentInfoModify = () => {
  const { state, handleModifyUserInfo } = useAuthContext()
  const { userData } = state

  const formik = useFormik({
    initialValues: {
      nickname: '',
      address: '',
    },
    validate,
    onSubmit: async values => {
      const userInfo = {
        nickname: values.nickname,
        address: values.address,
        profileImageUrl: profileImgRef.current.src,
      }

      await handleModifyUserInfo(userInfo)
    },
  })

  const profileImgRef = useRef(null)

  const handleProfileImgChange = async e => {
    const formData = new FormData()
    formData.append('image', e.target.files[0])

    const res = await imgApi.convertImg(formData)

    if (Number(res.code) === 200) {
      profileImgRef.current.src = res.data.imageUrl
    }
  }

  return (
    <>
      <div className="modal-header">
        <h2>회원 정보 수정</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-body_form">
            <div className="modal-body_form-profile">
              <ImageUploader onChange={handleProfileImgChange}>
                <div className="modal-body_form-photo-wrapper">
                  <img
                    ref={profileImgRef}
                    src={
                      userData.profileImageUrl
                        ? userData.profileImageUrl
                        : NOIMG
                    }
                    alt="avatar"
                    className="modal-body_form-avatar"
                  />
                  <div className="modal-body_form-photo">
                    <img src={PHOTO} alt="photo_upload" />
                  </div>
                </div>
              </ImageUploader>
            </div>
            <div className="modal-body_form-input nickname">
              <h3>닉네임</h3>
              <Input
                type="text"
                name="nickname"
                placeholder={userData.nickname}
                value={formik.values.nickname}
                onChange={formik.handleChange}
              />
              {formik.errors.nickname ? (
                <div>{formik.errors.nickname}</div>
              ) : null}
            </div>
            <div className="modal-body_form-input address">
              <h3>주소</h3>
              <div>
                <Input
                  type="text"
                  name="address"
                  placeholder={userData.address}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address ? (
                  <div>{formik.errors.address}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="modal-body_btn-wrapper">
            <Button type="submit" className="modal-body_btn">
              수정하기
            </Button>
          </div>
        </form>
      </div>
      <div className="modal-footer withdrawal">
        <p>회원탈퇴</p>
      </div>
    </>
  )
}

export default ContentInfoModify
