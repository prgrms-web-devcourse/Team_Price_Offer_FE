import React, { useRef } from 'react'
import Input from '@components/templates/Input'
import Divider from '@components/templates/Divider'
import Radio from '@components/templates/Radio'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import SelectBox from '@components/templates/Selectbox'
import validate from '@utils/validation'
import ImageUploader from '@components/templates/ImageUploader'
import { articleApi, imgApi } from '@api/apis'
import { CATEGORIES } from '@data/dummy/categories'
import { ORDERWAY } from '@data/dummy/orderway'
import { PRODUCT_STATUS } from '@data/dummy/productstatus'
import { useFormik } from 'formik'
import router from 'next/router'

export const getServerSideProps = async context => {
  // const { data } = await articleApi.getArticleUserID(context.query.id)
  return {
    props: {
      postId: context.query.id,
      // data,
    },
  }
}

const posting = ({ postId }) => {
  const commonDividerStyle = {
    width: '100%',
  }

  const selectBoxdefault = {
    code: 'selectBoxDefault',
    name: '선택하세요',
  }

  const commonImgStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
  }
  const imgRef1 = useRef(null)
  const imgRef2 = useRef(null)
  const imgRef3 = useRef(null)

  const handleChange = async e => {
    const formData = new FormData()
    const imageFile = e.target.files[0]
    formData.append('image', imageFile)

    const res = await imgApi.convertImg(formData)

    if (Number(res.code) === 200) {
      if (e.target.id === 'imgRef1') {
        imgRef1.current.src = res.data?.imageUrl
        return
      }
      if (e.target.id === 'imgRef2') {
        imgRef2.current.src = res.data?.imageUrl
        return
      }
      if (e.target.id === 'imgRef3') {
        imgRef3.current.src = res.data?.imageUrl
        return
      }
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(imageFile)

    reader.onload = () => {
      imgRef1.current.src = reader.result
    }
  }

  const imgSrc =
    'https://user-images.githubusercontent.com/66211721/145774500-c62d1410-03d4-4a39-9deb-7d9580153a68.png'

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      category: '',
      tradeArea: '',
      quantity: '',
      tradeMethod: '',
      productStatus: '',
      price: '',
      imgUrls: [],
    },
    validate,
    onSubmit: async values => {
      const imgUrl1 =
        imgRef1.current.src === imgSrc ? null : imgRef1.current.src
      const imgUrl2 =
        imgRef2.current.src === imgSrc ? null : imgRef1.current.src
      const imgUrl3 =
        imgRef3.current.src === imgSrc ? null : imgRef1.current.src

      const userInfo = {
        id: postId,
        title: values.title,
        content: values.content,
        categoryCode: values.category,
        tradeArea: values.tradeArea,
        quantity: values.quantity,
        tradeMethodCode: values.tradeMethod,
        productStatusCode: values.productStatus,
        price: values.price,
        imageUrls: [imgUrl1, imgUrl2, imgUrl3],
      }
      console.log(userInfo)
      const res = await articleApi.editArticle(userInfo)
      if (Number(res.code) === 200) {
        console.log(res)
        alert('게시글 등록 완료')
        router.push(`/post/${res.data.id}`)
      }
    },
  })

  return (
    <div className="posting">
      <div className="posting-title">상품정보</div>
      <Divider
        style={{
          ...commonDividerStyle,
          backgroundColor: 'black',
          height: '2px',
        }}
        marginSize={50}
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="posting-subtitle">상품명</div>
        <Input
          id="title"
          name="title"
          className="posting-input goods-name"
          placeholder="상품 이름을 입력해주세요"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? (
          <div className="posting-validation">{formik.errors.title}</div>
        ) : null}

        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">상품 이미지</div>
        <div className="posting-img-container">
          <div className="posting-img_main-container">
            <ImageUploader id="imgRef1" onChange={handleChange}>
              <img
                ref={imgRef1}
                src={imgSrc}
                style={commonImgStyle}
                className="posting-img_main"
                mode="cover"
                alt="uploadImg1"
              />
              /
            </ImageUploader>
          </div>

          <div className="posting-img_sub-wrapper">
            <div className="posting-img_sub-container">
              <ImageUploader id="imgRef2" onChange={handleChange}>
                <img
                  ref={imgRef2}
                  src={imgSrc}
                  style={commonImgStyle}
                  className="posting-img_sub"
                  mode="cover"
                  alt="uploadImg2"
                />
              </ImageUploader>
            </div>
            <div className="posting-img_sub-container">
              <ImageUploader id="imgRef3" onChange={handleChange}>
                <img
                  ref={imgRef3}
                  src={imgSrc}
                  style={commonImgStyle}
                  className="posting-img_sub"
                  mode="cover"
                  alt="uploadImg3"
                />
              </ImageUploader>
            </div>
          </div>
          <div className="posting-img-guide">
            * 상품 이미지는 640x640에 최적화 되어 있습니다. <br />- 이미지는
            상품등록 시 정사각형으로 짤려서 등록됩니다.
            <br /> - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
            <br /> - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.{' '}
            <br />- 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
            <br /> 최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요
          </div>
        </div>
        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">카테고리</div>
        <SelectBox
          formName="category"
          options={CATEGORIES}
          defaultOption={selectBoxdefault}
          className="posting-select-box"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {formik.errors.category ? (
          <div className="posting-validation">{formik.errors.category}</div>
        ) : null}

        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">거래지역</div>
        <Input
          id="tradeArea"
          name="tradeArea"
          className="posting-input"
          placeholder="시 구 순으로 입력 해주세요."
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tradeArea}
        />
        {formik.errors.tradeArea ? (
          <div className="posting-validation">{formik.errors.tradeArea}</div>
        ) : null}

        <Divider style={commonDividerStyle} marginSize={50} />
        <div className="posting-subtitle">상품상태</div>

        <Radio
          id="productStatus"
          items={PRODUCT_STATUS}
          formName="productStatus"
          className="posting-radio"
          InputClassName="posting-radio_input"
          onChange={formik.handleChange}
          value={formik.values.productStatus}
        />
        {formik.errors.productStatus ? (
          <div className="posting-validation">
            {formik.errors.productStatus}
          </div>
        ) : null}

        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">거래 방법</div>

        <Radio
          id="tradeMethod"
          style={{ marginTop: '50px' }}
          items={ORDERWAY}
          formName="tradeMethod"
          className="posting-radio"
          InputClassName="posting-radio_input"
          onChange={formik.handleChange}
          value={formik.values.tradeMethod}
        />
        {formik.errors.tradeMethod ? (
          <div className="posting-validation">{formik.errors.tradeMethod}</div>
        ) : null}
        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">수량</div>
        <Input
          style={{ marginTop: '50px' }}
          id="quantity"
          name="quantity"
          className="posting-input"
          placeholder="숫자만 입력해주세요"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.quantity}
        />
        {formik.errors.quantity ? (
          <div className="posting-validation">{formik.errors.quantity}</div>
        ) : null}
        <span className="posting-form_unit">개</span>
        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">가격</div>
        <Input
          id="price"
          name="price"
          className="posting-input"
          placeholder="숫자만 입력해주세요"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <span className="posting-form_unit">원</span>
        {formik.errors.price ? (
          <div className="posting-validation">{formik.errors.price}</div>
        ) : null}

        <Divider style={commonDividerStyle} marginSize={50} />

        <div className="posting-subtitle">상품 설명</div>
        {formik.errors.content ? <div>{formik.errors.content}</div> : null}
        <TextArea
          id="content"
          name="content"
          className="posting-textarea"
          placeholder="상품 설명을 입력해 주세요"
          onChange={formik.handleChange}
          value={formik.values.content}
        />

        <div className="posting-button-container">
          <Button type="submit" className="posting-button">
            등록하기
          </Button>
        </div>
      </form>
    </div>
  )
}

posting.propTypes = {}

export default posting