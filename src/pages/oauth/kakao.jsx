import { authApi } from '@api/apis'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const KakaoLoginPage = () => {
  const router = useRouter()
  const { token } = router.query

  const [result, setResult] = useState([])

  console.log(token)

  // useEffect(async () => {
  //   if (code) {
  //     const res = await authApi.loginKakao(code)
  //     res.data && setResult(res.data)
  //   }
  // })

  return (
    <div>
      <div>
        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }}>
          로직 설명
        </h2>
        <p>1. 카카오 로그인 성공 시, 리다이렉트로 넘어옴</p>
        <p>2. useRouter로 쿼리값을 받아와 code값을 얻어옴</p>
        <p>
          3. 브라우저가 로딩이 되면 kakao login api를 이용하여 서버에 인가코드
          전달
        </p>
        <p>4. member 정보가 온 response를 이용하여 화면에 출력</p>
      </div>
      <div style={{ marginTop: '20px' }}>인가코드: {token}</div>
      <div style={{ marginTop: '20px' }}>
        결과값: {result ? JSON.stringify(result) : '결과값 없음'}
      </div>
    </div>
  )
}

export default KakaoLoginPage
