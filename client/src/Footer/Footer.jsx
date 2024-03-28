import "./Footer.css"
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'

const Footer = () => {
  return (
    <>
      <Parallax className="my-5" speed={20} opacity={[0,2.5]}>
        <nav className='Menu w-25 m-auto d-flex justify-content-around align-items-center'>
          <Link to={"/social-media"}>social media</Link>
          <Link to={"/merch"}>Merch</Link>
          <Link to={"/print"}>Print</Link>
        </nav>
      </Parallax>
      <Parallax speed={20} opacity={[0,3]}>
        <div className='Quote'>
          <p><span className='MinText'>From</span> <span className='StyledText'>Amina</span> <span className='MinText'>to the</span> <span className='StyledText'>World</span></p>
        </div>
      </Parallax>
    </>
  )
}

export default Footer