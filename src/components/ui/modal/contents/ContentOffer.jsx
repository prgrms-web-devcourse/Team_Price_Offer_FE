import React from 'react'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import { articleApi } from '@api/apis'
import useStorage from '@hooks/useStorage'
import router from 'next/router'

const { getItem } = useStorage()

const ContentOffer = props => {
  const formik = useFormik({
    initialValues: {
      offerPrice: '',
    },
    validate,
    onSubmit: async values => {
      const res = await articleApi.postOffer({
        articleId: getItem('postId').replaceAll('"', ''),
        price: {
          price: values.offerPrice,
        },
      })
      console.log(res)
      if (Number(res.code) === 200) {
        alert(`${values.offerPrice} 원 오퍼 완료!.`)
        window.location.reload()
        router.push(0)
      } else {
        alert(res.message)
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
              />
            </div>
            {formik.errors.offerPrice ? (
              <div className="offer-error">{formik.errors.offerPrice}</div>
            ) : null}
          </div>
          <div className="modal-body_btn-wrapper">
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
