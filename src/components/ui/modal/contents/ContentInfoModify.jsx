import React, { useRef } from 'react'
import Input from '@components/templates/Input'
import SelectBox from '@components/templates/Selectbox'
import Button from '@components/templates/Button'
import { CATEGORIES } from '@data/dummy/categories'
import validate from '@utils/validation'
import { useFormik } from 'formik'
import { userApi, imgApi } from '@api/apis'
import ImageUploader from '@components/templates/ImageUploader'
import { ICON_TYPES } from '@utils/constant/icon'

const { photo, noImg } = ICON_TYPES

const selectBoxdefault = {
  code: 'selectBoxDefault',
  name: '선택하세요',
}

const ContentInfoModify = () => {
  const noImagePath = noImg
  const photoIconPath = photo

  const formik = useFormik({
    initialValues: {
      email: '',
      address1: '',
      address2: '',
    },
    validate,
    onSubmit: async values => {
      const userInfo = {
        nickname: values.email,
        address: `${values.address1} ${values.address2}`,
        profileImageUrl: profileImgRef.current.src,
      }

      const res = await userApi.modifyUserInfo(userInfo)

      if (Number(res.status) === 200) {
        console.log(res)
      }
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
                    src={noImagePath}
                    alt="avatar"
                    className="modal-body_form-avatar"
                  />
                  <div className="modal-body_form-photo">
                    <img src={photoIconPath} alt="photo_upload" />
                  </div>
                </div>
              </ImageUploader>
            </div>
            <div className="modal-body_form-input email">
              <h3>이메일</h3>
              <Input
                type="text"
                name="email"
                placeholder="이메일"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="modal-body_form-input address">
              <h3>주소</h3>
              <div className="modal-body_select-wrapper">
                <div>
                  <SelectBox
                    formName="address1"
                    options={CATEGORIES}
                    defaultOption={selectBoxdefault}
                    value={formik.values.address1}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address1 ? (
                    <div>{formik.errors.address1}</div>
                  ) : null}
                </div>
                <div>
                  <SelectBox
                    formName="address2"
                    options={CATEGORIES}
                    defaultOption={selectBoxdefault}
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address2 ? (
                    <div>{formik.errors.address2}</div>
                  ) : null}
                </div>
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
