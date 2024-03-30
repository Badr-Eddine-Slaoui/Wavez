import { Parallax } from "react-scroll-parallax"
import './Work.css'
import { useCookies } from "react-cookie"

const Work = () => {
  const [token] = useCookies(['token'])
  return (
    <>
      <Parallax speed={-15} opacity={[2.5,-0.6]}>
        <div className="WorkBanner row w-100 mx-0">
            <img className='w-100 p-0' src="/Images/We offer you Our Heart_.png" alt="" />
        </div>
      </Parallax>
      <Parallax speed={10} opacity={[0,2.5]}>
        <div id="sessions" className="row mb-5 w-50 m-auto">
            {
              !token.token && <h5 className="my-5 text-center text-danger">Please Login To Book A Session</h5> 
            }
            <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer me-4">
                <img className='w-50 float-end' src="/Images/Layer 1.png" alt="" />
              </div>
           </div>
          <div className="col-6 p-0">
            <div className="TextContainer pe-3">
              <h2 className="text-black">Studio Record & Mix</h2>
              <p className="my-5">book yur session in a professional studio with your Fav Artist</p>
              <button className="btn btn-dark rounded-0 w-100" disabled={!token.token && true}>Book Yours Now</button>
            </div>
          </div>
        </div>
        <div className="row mb-5 w-50 m-auto">
            <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer me-4">
                <img className='w-50 float-end' src="/Images/Layer 2.png" alt="" />
              </div>
           </div>
          <div className="col-6 p-0">
            <div className="TextContainer pe-3">
              <h2 className="text-black">Footage Art Course</h2>
              <p className="my-5">Videography & photography, <br></br>(the process of capturing moving images on electronic media)</p>
              <button className="btn btn-dark rounded-0 w-100" disabled={!token.token && true}>Book Yours Now</button>
            </div>
          </div>
        </div>
        <div className="row w-50 m-auto">
            <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer me-4">
                <img className='w-50 float-end' src="/Images/Layer 3.png" alt="" />
              </div>
           </div>
          <div className="col-6 p-0">
            <div className="TextContainer pe-3">
              <h2 className="text-black">Painting Art Classe</h2>
              <p className="my-5">A lot of fun and joy here</p>
              <button className="btn btn-dark rounded-0 w-100" disabled={!token.token && true}>Book Yours Now</button>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  )
}

export default Work