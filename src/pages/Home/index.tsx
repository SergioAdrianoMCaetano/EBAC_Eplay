import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

export const Home = () => (
  <>
    <Banner />
    <ProductList title="Promoções" background="gray" />
    <ProductList title="Em breve" background="black" />
  </>
)

export default Home
