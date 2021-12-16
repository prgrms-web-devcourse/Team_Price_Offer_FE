import { instance, auth } from '@api/index'

export const authApi = {
  signUp: userInfo => instance.post('/members', userInfo),
  loginEmail: userInfo => instance.post('/members/login', userInfo),
  loginKakao: code => instance.get(`/oauth/callback/kakao?code=${code}`),
  checkDuplicates: email => instance.get(`/members?email=${email}`),
  withdrawal: password => auth.delete('/members', password),
  getUserInfo: () => auth.get('/members/me'),
  getUserProfile: () => auth.get('/members/mypage'),
  getOtherUserProfile: merberId => instance.get(`/members/${merberId}`),
  modifyUserInfo: userInfo => auth.patch('/members/me', userInfo),
}

export const userApi = {
  getUserLikeArticles: ({ tradeStatusCode, params }) =>
    auth.get(`/articles/like-articles?tradeStatusCode=${tradeStatusCode}`, {
      params,
    }),
  getUserOfferArticles: ({ tradeStatusCode, params }) =>
    auth.get(`/articles/offers?tradeStatusCode=${tradeStatusCode}`, {
      params,
    }),
  getUserTradingAtricles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&tradeStatusCode=4`, {
      params,
    }),
  getUserCompletedArticles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&tradeStatusCode=8`, {
      params,
    }),
  getUserBuyReviews: ({ memberId, params }) =>
    instance.get(`/reviews?memberId=${memberId}&role=buyer`, {
      params,
    }),
  getUserSellReviews: ({ memberId, params }) =>
    instance.get(`/reviews?memberId=${memberId}&role=seller`, {
      params,
    }),
  getUserReview: articleId => auth.get(`/reviews/me?articleId=${articleId}`),
  postReview: ({ articleId, payload }) =>
    auth.post(`/reviews?articleId=${articleId}`, payload),
}

export const reviewApi = {
  getBuyReviews: memberId =>
    instance.get(`/reviews?memberId=${memberId}&status=buy`),
  getSellReviews: memberId =>
    instance.get(`/reviews?memberId=${memberId}&status=sell`),
  postReview: ({ offerId, memberId, content }) =>
    auth.post(`/reviews/offers/${offerId}?toMember=${memberId}`, content),
}

export const articleApi = {
  searchArticles: params => instance.get(`/search`, { params }),
  editArticle: articleInfo => auth.put('/articles', articleInfo),
  getArticle: ({ articleId, params }) =>
    instance.get(`/articles${articleId ? `/${articleId}` : ''}`, { params }),
  getTradingAtricles: params =>
    auth.get('/articles?tradeStatusCode=4', { params }),
  getArticleOfCategory: ({ categoryCode, params }) =>
    instance.get(`/articles?categoryCode=${categoryCode}`, { params }),
  getOffersList: articleId => auth.get(`/articles/${articleId}/offers`),
  getOfferListPage: ({ articleId, params }) =>
    auth.get(`/articles/${articleId}/offers`, { params }),
  getImgUrlList: articleId => instance.get(`/articles/${articleId}/imageUrls`),
  changeTradeStatus: ({ articleId, option }) =>
    auth.patch(`/articles/${articleId}/tradeStatus`, option),
  deleteArticle: articleId => auth.delete(`/articles/${articleId}`),
  toggleLikeArticle: articleId => auth.put(`/articles/${articleId}/like`),
  postOffer: ({ articleId, price }) =>
    auth.post(`/articles/${articleId}/offers`, price),
  selectOffer: offerId => auth.patch(`/articles/offers/${offerId}`),
  getArticleUserID: articleId => auth.get(`/articles/${articleId}`),
  getArticlesInfos: () => instance.get('articles/infos'),
}

export const messageApi = {
  postMessageToOffer: ({ memberId, offerId, articleId, content }) =>
    auth.post(
      `/messages/member/${memberId}/offerId/${offerId}?articleId=${articleId}`,
      content,
    ),
  postMessageToUser: () => {},
  postMessageToSeller: () => {},
  deleteMsg: () => {},
  getMessages: () => {},
}

export const imgApi = {
  convertImgList: images => instance.post('/articles/imageUrls', images),
  convertImg: image => instance.post('/members/imageUrls', image),
}
