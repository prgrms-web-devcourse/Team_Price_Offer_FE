import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/css/PostDetail.module.css'
const PostDetail = props => {
    const Detailinfo = [
        {
            "article": {
              "id": 1,
              "author": {
                "id": 1,
                "email": "awesomeo184@gmail.com",
                "appleLevel": 1,
                "nickname": "awesomeo184",
                "profileImage": "profile_image_url",
                "address": "동대문구 회기동"
              },
              "title": "article_title",
              "content": "article_content",
              "category": {
                "code": 1,
                "name": "인기매물"
              },
              "tradeStatus": {
                "code": 2,
                "name": "예약중"
              },
              "tradeArea": "동대문구 회기동",
              "tradeMethod": {
                "code": 2,
                "name": "직거래"
              },
              "quantity": 1,
              "price": 20000,
              "mainImageUrl": "main_image_url",
              "createdDate": "2021-12-02 19:19:18",
              "modifiedDate": null,
              "likeCounts": 32,
              "liked": false
            },
        },
    ]
    const offerList = [
        {
        "pageInfo": {
          "currentPage": 0,
          "lastPage": 6,
          "countPerPage": 5,
          "totalSize": 29
        },
        "offers" : [
             {
                "id": 23,
                "offerer": {
                    "id": 1,
                    "nickname": "awesomeo184",
                    "address": "동대문구 회기동"
                 },
                 "articleId": 2,
                 "price": 1500,
                 "createdDate": "2021-12-02 19:19:18",
                 "isSelected": false
             },
             {
                 "id": 24,
                 "offerer": {
                    "id": 2,
                    "nickname": "awesomeo184",
                    "address": "동대문구 회기동"
                 },
                 "articleId": 2,
                 "price": 1700,
                 "createdDate": "2021-12-03 19:19:18",
                 "isSelected": true
             }
         ]
        }
    ]  
    return (
        <div className={styles.headerWrapper}>
        <div className={styles.header} />
        </div>
    )
}

PostDetail.propTypes = {

}

export default PostDetail
