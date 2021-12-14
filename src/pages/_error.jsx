const ErrorPage = () => {
  return null
}

export const getServerSideProps = context => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
export default ErrorPage
