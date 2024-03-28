import { Parallax } from 'react-scroll-parallax';
import './Home.css'
import { useEffect } from 'react';

const Home = () => {

  useEffect(()=>{

    document.title = "Home"
    
  },[])

  return (
    <div>
      <Parallax speed={-15} opacity={[2.5,0]}>
        <div className="Banner row w-100 mx-0">
            <img className='w-100 p-0' src="/Images/acceuil.png" alt="" />
        </div>
      </Parallax>
      <Parallax speed={20} opacity={[0,2.5]}>
        <div className="row w-100 my-5">
          <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="ImgContainer">
                <img className='w-100' src="/Images/DSC02312.png" alt="" />
              </div>
          </div>
          <div className="col-6">
            <div className="TextContainer">
              <h2>Story behind <span>Tresse .</span></h2>
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
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Home