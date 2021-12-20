import React, { useCallback } from 'react'
import { useAxiosContext } from '@hooks/useAxiosContext'

const useApi = () => {
  const { auth, instance } = useAxiosContext()

  const authApi = {
    signUp: useCallback(
      userInfo => {
        return instance.post('/members', userInfo)
      },
      [instance],
    ),
    loginEmail: useCallback(
      userInfo => {
        return instance?.post('/members/login', userInfo)
      },
      [instance],
    ),
    loginKakao: useCallback(
      code => {
        return instance.get(`/oauth/callback/kakao?code=${code}`)
      },
      [instance],
    ),
    checkDuplicates: useCallback(
      email => {
        return instance.get(`/members?email=${email}`)
      },
      [instance],
    ),
    withdrawal: useCallback(
      password => {
        return auth.delete('/members', password)
      },
      [auth],
    ),
    getUserInfo: useCallback(() => {
      return auth.get('/members/me')
    }, [auth]),
    getUserProfile: useCallback(() => {
      return auth.get('/members/mypage')
    }, [auth]),
    getOtherUserProfile: useCallback(
      merberId => {
        return instance.get(`/members/${merberId}`)
      },
      [instance],
    ),
    modifyUserInfo: useCallback(
      userInfo => {
        return auth.patch('/members/me', userInfo)
      },
      [auth],
    ),
  }

  const userApi = {
    getUserLikeArticles: useCallback(
      ({ tradeStatusCode, params }) => {
        return auth.get(
          `/articles/like-articles?tradeStatusCode=${tradeStatusCode}`,
          { params },
        )
      },
      [auth],
    ),
    getUserOfferArticles: useCallback(
      ({ tradeStatusCode, params }) => {
        return auth.get(`/articles/offers?tradeStatusCode=${tradeStatusCode}`, {
          params,
        })
      },
      [auth],
    ),
    getUserTradingAtricles: useCallback(
      ({ memberId, params }) => {
        return instance.get(
          `/articles?memberId=${memberId}&tradeStatusCode=4`,
          {
            params,
          },
        )
      },
      [instance],
    ),
    getUserCompletedArticles: useCallback(
      ({ memberId, params }) => {
        return instance.get(
          `/articles?memberId=${memberId}&tradeStatusCode=8`,
          {
            params,
          },
        )
      },
      [instance],
    ),
    getUserBuyReviews: useCallback(
      ({ memberId, params }) => {
        return auth.get(`/reviews?memberId=${memberId}&role=buyer`, {
          params,
        })
      },
      [auth],
    ),
    getUserSellReviews: useCallback(
      ({ memberId, params }) => {
        return auth.get(`/reviews?memberId=${memberId}&role=seller`, {
          params,
        })
      },
      [auth],
    ),
    getUserReview: useCallback(
      articleId => {
        return auth.get(`/reviews/me?articleId=${articleId}`)
      },
      [auth],
    ),
    postReview: useCallback(
      ({ articleId, payload }) => {
        return auth.post(`/reviews?articleId=${articleId}`, payload)
      },
      [auth],
    ),
  }

  const reviewApi = {
    getBuyReviews: useCallback(
      memberId => {
        return instance.get(`/reviews?memberId=${memberId}&status=buy`)
      },
      [instance],
    ),
    getSellReviews: useCallback(
      memberId => {
        return instance.get(`/reviews?memberId=${memberId}&status=sell`)
      },
      [instance],
    ),
    postReview: useCallback(
      ({ offerId, memberId, content }) => {
        return auth.post(
          `/reviews/offers/${offerId}?toMember=${memberId}`,
          content,
        )
      },
      [auth],
    ),
  }

  const articleApi = {
    searchArticlesWithAuth: useCallback(
      params => {
        return auth.get(`/search`, { params })
      },
      [auth],
    ),
    searchArticles: useCallback(
      params => {
        return instance.get(`/search`, { params })
      },
      [instance],
    ),
    searchFilterArticles: useCallback(
      params => {
        return auth.get(`/search/filters`, { params })
      },
      [auth],
    ),
    editArticle: useCallback(
      articleInfo => {
        return auth.put('/articles', articleInfo)
      },
      [auth],
    ),
    getArticle: useCallback(
      ({ articleId, params }) => {
        return instance.get(`/articles${articleId ? `/${articleId}` : ''}`, {
          params,
        })
      },
      [instance],
    ),
    getTradingAtricles: useCallback(
      params => {
        return auth.get('/articles?tradeStatusCode=4', { params })
      },
      [auth],
    ),
    getArticleOfCategory: useCallback(
      ({ categoryCode, params }) => {
        return instance.get(`/articles?categoryCode=${categoryCode}`, {
          params,
        })
      },
      [instance],
    ),
    getOffersList: useCallback(
      articleId => {
        return auth.get(`/articles/${articleId}/offers`)
      },
      [auth],
    ),
    getOfferListPage: useCallback(
      ({ articleId, params }) => {
        return auth.get(`/articles/${articleId}/offers`, { params })
      },
      [auth],
    ),
    getImgUrlList: useCallback(
      articleId => {
        return instance.get(`/articles/${articleId}/imageUrls`)
      },
      [instance],
    ),
    changeTradeStatus: useCallback(
      ({ articleId, option }) => {
        return auth.patch(`/articles/${articleId}/tradeStatus`, option)
      },
      [auth],
    ),
    deleteArticle: useCallback(
      articleId => {
        return auth.delete(`/articles/${articleId}`)
      },
      [auth],
    ),
    toggleLikeArticle: useCallback(
      articleId => {
        return auth.put(`/articles/${articleId}/like`)
      },
      [auth],
    ),
    postOffer: useCallback(
      ({ articleId, price }) => {
        return auth.post(`/articles/${articleId}/offers`, price)
      },
      [auth],
    ),
    selectOffer: useCallback(
      offerId => {
        return auth.patch(`/articles/offers/${offerId}`)
      },
      [auth],
    ),
    getArticleUserID: useCallback(
      articleId => {
        return auth.get(`/articles/${articleId}`)
      },
      [auth],
    ),
    getArticlesInfos: useCallback(() => {
      return instance.get('articles/infos')
    }, [instance]),
  }

  const messageApi = {
    postMessageToOffer: useCallback(
      ({ memberId, offerId, articleId, content }) => {
        return auth.post(
          `/messages/member/${memberId}/offerId/${offerId}?articleId=${articleId}`,
          content,
        )
      },
      [auth],
    ),
    postMessage: useCallback(
      ({ messageRoomId, message }) => {
        return auth.post(`/messages/messageRoom/${messageRoomId}`, message)
      },
      [auth],
    ),
    getMessageList: useCallback(
      ({ messageRoomId, params }) => {
        return auth.get(`/messages/messageRoom/${messageRoomId}/contents`, {
          params,
        })
      },
      [auth],
    ),
    getMessageRoomInfo: useCallback(
      ({ messageRoomId }) => {
        return auth.get(
          `/messages/messageRoom/${messageRoomId}/messageRoomInfo`,
        )
      },
      [auth],
    ),
    deleteMessageBox: useCallback(
      ({ messageRoomId }) => {
        return auth.delete(`	/messages/messageRoomId/${messageRoomId}`)
      },
      [auth],
    ),
    getMessageBox: useCallback(() => {
      return auth.get('/messages/messageBox')
    }, [auth]),
  }

  const imgApi = {
    convertImgList: useCallback(
      images => {
        return instance.post('/articles/imageUrls', images)
      },
      [instance],
    ),
    convertImg: useCallback(
      image => {
        return instance.post('/members/imageUrls', image)
      },
      [instance],
    ),
  }

  return { authApi, userApi, reviewApi, articleApi, messageApi, imgApi }
}

export default useApi
