import { instance, auth } from '@api/index'

export const authApi = {
  signUp: userInfo => instance.post('/members', userInfo),
  loginEmail: userInfo => instance.post('/members/login', userInfo),
  loginKakao: userInfo => instance.post('/login', userInfo),
  checkDuplicates: email => instance.get(`/members?email=${email}`),
  withdrawal: () => auth.delete('/members'),
}

export const userApi = {
  getUserInfo: () => auth.get('/members/me'),
  modifyUserInfo: userInfo => auth.patch('/members/me', userInfo),
  getLikeArticles: ({ memberId, params }) =>
    auth.get(`/members/${memberId}/profiles/articles/likes`, { params }),
  getTradingAtricles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&status=trading`, { params }),
  getCompletedArticles: ({ memberId, params }) =>
    instance.get(`/articles?memberId=${memberId}&status=completed`, { params }),
  getBuyReviews: memberId =>
    instance.get(`/reviews?memberId=${memberId}&status=buy`),
  getSellReviews: memberId =>
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
