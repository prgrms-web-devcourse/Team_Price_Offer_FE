export default function Custom404() {
  return null
}

export const getStaticProps = () => ({
  redirect: {
    destination: '/',
  },
})
