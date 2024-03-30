import { Parallax } from 'react-scroll-parallax';
import './Home.css'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={className}
      style={{ ...style, display: "block", backgroundColor: "white",color: 'black',borderRadius:'50vh' }}
      onClick={onClick}
      icon={faCircleChevronRight}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={className}
      style={{ ...style, display: "block", backgroundColor: "white",color: 'black',borderRadius:'50vh' }}
      onClick={onClick}
      icon={faCircleChevronLeft}
    />
  );
}

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: 0,
  slidesToShow: 3,
  speed: 200,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Home = () => {

  useEffect(()=>{

    document.title = "Home"
    
  },[])

  return (
    <div>
      <Parallax speed={-15} opacity={[2.5,-0.6]}>
        <div className="Banner row w-100 mx-0 position-relative">
            <img className='w-100 p-0' src="/Images/Book.png" alt="" />
            <button className='BookBtn position-absolute'>
              <Link to={'/work#sessions'} className="text-decoration-none text-black">Book</Link>
            </button>
        </div>
      </Parallax>
      <Parallax speed={10} opacity={[0,2.5]}>
        <div id='events' className="row mx-0">
          <h1 className="EventTitle text-center mb-2 pb-2">Upcoming Events</h1>
          <FontAwesomeIcon className='mb-5 fs-4 px-0' icon={faCircleChevronDown}/>
        </div>
        <div className="EventContainer row">
          <div className="col-6 p-0">
            <div className="TextContainer pe-3">
              <h2>FlamenGnawa</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
                nobis, voluptates necessitatibus tempore ea natus nemo
                delectus eligendi laborum corrupti incidunt dicta dignissimos. 
                Voluptatum cum officia reprehenderit, est eveniet fugit, eaque 
                vel itaque natus repellat perferendis officiis porro sunt id ad 
                mollitia, quidem nihil ex quod repudiandae? Est autem aut
                  aspernatur unde odio nam nobis, accusamus aliquam officia modi 
                  quam illo corporis delectus impedit. Cupiditate, modi quaerat 
                  dicta voluptas eius commodi laudantium officiis sit consequuntur
                  temporibus veniam minima rem totam repellendus ratione 
                  voluptatem? Veniam perferendis ipsa illum, dolor hic explicabo 
                  repellendus architecto, odio doloremque officia similique deserunt 
                  consequatur repellat nulla?
              </p>
              <a className='d-block mt-4 text-black' href="">lire la suite</a>
            </div>
          </div>
          <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer">
                <img className='w-100' src="/Images/images.png" alt="" />
              </div>
          </div>
        </div>
        <div className="EventContainer row flex-row-reverse">
          <div className="col-6 p-0">
            <div className="TextContainer ps-3">
              <h2 className='text-end'>WAVEZ festival</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
                nobis, voluptates necessitatibus tempore ea natus nemo
                delectus eligendi laborum corrupti incidunt dicta dignissimos. 
                Voluptatum cum officia reprehenderit, est eveniet fugit, eaque 
                vel itaque natus repellat perferendis officiis porro sunt id ad 
                mollitia, quidem nihil ex quod repudiandae? Est autem aut
                  aspernatur unde odio nam nobis, accusamus aliquam officia modi 
                  quam illo corporis delectus impedit. Cupiditate, modi quaerat 
                  dicta voluptas eius commodi laudantium officiis sit consequuntur
                  temporibus veniam minima rem totam repellendus ratione 
                  voluptatem? Veniam perferendis ipsa illum, dolor hic explicabo 
                  repellendus architecto, odio doloremque officia similique deserunt 
                  consequatur repellat nulla?
              </p>
              <a className='d-block mt-4 text-black' href="">lire la suite</a>
            </div>
          </div>
          <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer">
                <img className='w-100' src="/Images/event2.png" alt="" />
              </div>
          </div>
        </div>
        <div className="EventContainer row">
          <div className="col-6 p-0 pe-3">
            <div className="TextContainer">
              <h2>ADNthereal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
                nobis, voluptates necessitatibus tempore ea natus nemo
                delectus eligendi laborum corrupti incidunt dicta dignissimos. 
                Voluptatum cum officia reprehenderit, est eveniet fugit, eaque 
                vel itaque natus repellat perferendis officiis porro sunt id ad 
                mollitia, quidem nihil ex quod repudiandae? Est autem aut
                  aspernatur unde odio nam nobis, accusamus aliquam officia modi 
                  quam illo corporis delectus impedit. Cupiditate, modi quaerat 
                  dicta voluptas eius commodi laudantium officiis sit consequuntur
                  temporibus veniam minima rem totam repellendus ratione 
                  voluptatem? Veniam perferendis ipsa illum, dolor hic explicabo 
                  repellendus architecto, odio doloremque officia similique deserunt 
                  consequatur repellat nulla?
              </p>
              <a className='d-block mt-4 text-black' href="">lire la suite</a>
            </div>
          </div>
          <div className="col-6 p-0 d-flex justify-content-center align-items-center">
              <div className="ImgContainer">
                <img className='w-100' src="/Images/event3.png" alt="" />
              </div>
          </div>
        </div>
      </Parallax>
      <Parallax speed={10} opacity={[0,2.5]}>
        <div id='members' className="row mx-0">
          <h1 className="EventTitle text-center mb-2 pb-2">Members</h1>
          <FontAwesomeIcon className='mb-5 fs-4 px-0' icon={faCircleChevronDown}/>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img className='w-50 m-auto' src="/Images/IMG-20231109-WA0068.png" alt="" />
            </div>
            <div>
              <img className='w-50 m-auto' src="/Images/IMG-20231109-WA0036.png" alt="" />
            </div>
            <div>
              <img className='w-50 m-auto' src="/Images/IMG-20231109-WA0077.png" alt="" />
            </div>
          </Slider>
        </div>
      </Parallax>
    </div>
  )
}

export default Home