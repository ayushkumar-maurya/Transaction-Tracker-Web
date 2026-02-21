import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link to='/bank'>Bank</Link>
      <br />
      <Link to='/stock'>Stock</Link>
    </>
  )
}

export default Home
