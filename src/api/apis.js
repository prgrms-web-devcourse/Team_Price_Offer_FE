import { instance, auth } from '@api/index'

export const authApi = {
  signUp: userInfo => instance.post('/members', userInfo),
  loginEmail: userInfo => instance.post('/members/login', userInfo),
  loginKakao: userInfo => instance.post('/login', userInfo),
  checkDuplicates: email => instance.get(`/members?email=${email}`),
  withdrawal: password => auth.delete('/members', password),
  getUserInfo: () => auth.get('/members/me'),
  modifyUserInfo: userInfo => auth.patch('/members/me', userInfo),
}

export const userApi = {
  getUserLikeArticles: ({ memberId, params }) =>
    auth.get(`/members/${memberId}/profiles/articles/likes`, { params }),
  getUserTradingAtricles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&tradeStatusCode=4`, {
      params,
    }),
  getUserCompletedArticles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&tradeStatusCode=8`, {
      params,
    }),
  getUserBuyReviews: memberId =>
    instance.get(`/reviews?memberId=${memberId}&status=buy`),
  getUserSellReviews: memberId =>
    instance.get(`/reviews?memberId=${memberId}&status=sell`),
  postReview: ({ offerId, memberId, content }) =>
    auth.post(`/reviews/offers/${offerId}?toMember=${memberId}`, content),
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
  searchArticles: params => instance.get(`/search/articles`, { params }),
  editArticle: articleInfo => auth.put('/articles', articleInfo),
  getArticle: ({ articleId, params }) =>
    instance.get(`/articles${articleId ? `/${articleId}` : ''}`, { params }),
  getTradingAtricles: params =>
    auth.get('/articles?tradeStatusCode=4', { params }),
  getArticleOfCategory: ({ categoryCode, params }) =>
    instance.get(`/articles?categoryCode=${categoryCode}`, { params }),
  getOffersList: articleId => instance.get(`/articles/${articleId}/offers`),
  getImgUrlList: articleId => instance.get(`/articles/${articleId}/imageUrls`),
  changeTradeStatus: ({ articleId, option }) =>
    auth.patch(`/articles/${articleId}/tradeStatus`, option),
  deleteArticle: articleId => auth.delete(`/articles/${articleId}`),
  toggleLikeArticle: articleId => auth.patch(`/articles/${articleId}/like`),
  postOffer: ({ articleId, price }) =>
    auth.post(`	/articles/${articleId}/offers`, price),
  selectOffer: offerId => auth.patch(`/articles/offers/${offerId}`),
  getArticlesInfos: instance.get('articles/infos'),
}

export const messageApi = {
  postMessageToOffer: () => {},
  postMessageToUser: () => {},
  postMessageToSeller: () => {},
  deleteMsg: () => {},
  getMessages: () => {},
}

export const imgApi = {
  convertImgList: images => instance.post('/articles/imageUrls', images),
  convertImg: image => instance.post('/members/imageUrls', image),
}
