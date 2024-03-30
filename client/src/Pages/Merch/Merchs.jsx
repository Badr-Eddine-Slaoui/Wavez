import { Parallax } from 'react-scroll-parallax'
import './Merchs.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Merch from './Merch'
import { useCookies } from 'react-cookie'

const Merchs = () => {

    const [token] = useCookies(['token'])

    const [merchs,setMerchs] = useState([])

    useEffect(()=>{

      document.title = "Merch";

      const fetchMerchs = async()=>{
        await axios.get("/API/merchs.json")
        .then(res=>{
          setMerchs(res.data)
        })
      }

      fetchMerchs()
      
    },[])
    
  return (
    <div>
      <Parallax speed={-15} opacity={[2.5,-0.6]}>
        <div className="MerchBanner row w-100 mx-0">
            <img className='w-100 p-0' src="/Images/lines (19).png" alt="" />
        </div>
      </Parallax>
      <Parallax speed={10} opacity={[0,2.5]} className={`Merch row m-auto`}>
        <div className="MerchBanner row h-75 mb-5 m-auto">
              <img className='w-100 p-0' src="/Images/55.png" alt="" />
        </div>
        {
          !token.token && <h5 className="mt-5 pt-5 text-center text-danger">Please Login To Buy Merchs</h5> 
        }
        {
          merchs.map((merch,index)=>(
              <Merch key={index} merch={merch} index={index}/>
          ))
        }
        <div className="MerchBanner row h-75 my-5 m-auto">
              <img className='w-100 p-0' src="/Images/on the way_.png" alt="" />
        </div>
      </Parallax>
    </div>
  )
}

export default Merchs