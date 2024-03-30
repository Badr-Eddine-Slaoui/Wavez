import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.css"
import { Parallax } from 'react-scroll-parallax'
import { faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <Parallax speed={20} opacity={[3,4]}>
        <div className='Footer py-4 pe-2'>
          <div className="row mx-0">
            <div className="col-6">
              <div className="row w-75 m-auto">
                <div className="col-2">
                    <FontAwesomeIcon className="fs-1 text-white" icon={faFacebook}/>    
                </div>
                <div className="col-2">
                    <FontAwesomeIcon className="fs-1 text-white" icon={faInstagram}/>    
                </div>
                <div className="col-2">
                    <FontAwesomeIcon className="fs-1 text-white" icon={faLinkedin}/>    
                </div>
                <div className="col-2">
                    <FontAwesomeIcon className="fs-1 text-white" icon={faXTwitter}/>    
                </div>
                <div className="col-2">
                    <FontAwesomeIcon className="fs-1 text-white" icon={faTiktok}/>    
                </div>
              </div>
            </div>
            <div className="col-6">
              <form className="w-75 float-end" onSubmit={e=>e.preventDefault()}>
                <label className="text-white fw-bolder me-2" htmlFor="sub">Newsletter Subscription</label>
                <input className="Sub border-0 rounded-pill py-1 px-3 fw-lighter w-50" id="sub" type="text" placeholder="yourEmail@gmail.com"/>
              </form>
            </div>
          </div>
          <div className="Links row py-5 m-auto justify-content-between">
              <div className="col-4 text-start">
                <Link to={'/merch'} className="d-block text-white">Merch</Link>
                <Link to={'/work'} className="d-block text-white">Work</Link>
                <Link to={'/print'} className="d-block text-white">Print</Link>
                <Link to={'/work#sessions'} className="d-block text-white">Ambassador Program</Link>
              </div>
              <div className="col-4 text-center">
                <Link to={'/#members'} className="d-block text-white">Members</Link>
                <Link to={'/#events'} className="d-block text-white">Events</Link>
                <Link to={'/work'} className="d-block text-white">Studio</Link>
              </div>
              <div className="col-4 text-end">
                <Link to={'/about-us'} className="d-block text-white">About Us</Link>
                <Link className="d-block text-white">Blog</Link>
              </div>
          </div>
          <div className="row mx-0">
              <p className="m-0 text-white fw-bolder">WAVEZ copyright&#9675;24</p>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Footer