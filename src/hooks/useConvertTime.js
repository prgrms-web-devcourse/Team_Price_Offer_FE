const useConvertTime = originDate => {
  const milliSeconds = new Date() - new Date(Date.parse(originDate))
  const seconds = milliSeconds / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  const weeks = days / 7
  const months = days / 30
  const years = days / 365

  if (seconds < 60) {
    return `방금 전`
  }

  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`
  }

  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`
  }

  if (days < 7) {
    return `${Math.floor(days)}일 전`
  }

  if (weeks < 5) {
    return `${Math.floor(weeks)}주 전`
  }

  if (months < 12) {
    return `${Math.floor(months)}개월 전`
  }

  return `${Math.floor(years)}년 전`
}

export default useConvertTime
