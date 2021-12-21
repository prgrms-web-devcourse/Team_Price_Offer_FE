import React from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import { articleApi } from '@api/apis'
import useStorage from '@hooks/useStorage'
import router from 'next/router'
import swal from 'sweetalert'

const { getItem } = useStorage()

const ContentOffer = props => {
  const formik = useFormik({
    initialValues: {
      offerPrice: '',
    },
    validate,
    onSubmit: async values => {
      const postId = getItem('postId').replaceAll('"', '')
      const res = await articleApi.postOffer({
        articleId: postId,
        price: {
          price: values.offerPrice,
        },
      })
      if (Number(res.code) === 200) {
        swal({
          title: `${values.offerPrice} 원 오퍼 완료!.`,
          icon: 'success',
        }).then(async chat => {
          if (chat) {
            router.reload(`/post/${postId}`)
          } else {
          }
          router.reload(`/post/${postId}`)
        })
      } else {
        swal({
          title: res.message,
          icon: 'error',
        })
      }
    },
  })

  return (
    <>
      <div className="modal-header">
        <h2>가격을 제시해볼까요?</h2>
        <p>당신의 제안이 마음에 든다면, 연락이 올 거에요!</p>
      </div>
      <div className="modal-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-body_form">
            <div className="modal-body_form-input offer">
              <h3>제안가격</h3>
              <Input
                id="offerPrice"
                name="offerPrice"
                type="number"
                placeholder="숫자로만 입력해주세요!"
                value={formik.values.offerPrice}
                onChange={formik.handleChange}
                maxLength="9"
              />
            </div>
          </div>

          <div className="modal-body_btn-wrapper">
            {formik.errors.offerPrice ? (
              <div className="offer-error" style={{ color: 'red' }}>
                {formik.errors.offerPrice}
              </div>
            ) : null}
            <Button type="submit" className="modal-body_btn offer">
              Offer
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContentOffer
