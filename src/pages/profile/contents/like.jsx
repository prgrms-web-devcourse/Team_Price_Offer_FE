import React from 'react'
import GoodsList from '@components/ui/GoodsList'
import { GOODSLIST } from '@data/dummy/goodsList'

const Like = () => {
  return <GoodsList goodsList={GOODSLIST} className="Like-goodList" />
}

export default Like
