import { Parallax } from 'react-scroll-parallax'
import './Merchs.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Merch from './Merch'

const Merchs = () => {

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
      <Parallax speed={-15} opacity={[2.5,0]}>
        <div className="MerchBanner row w-100 mx-0">
            <img className='w-75 p-0' src="/Images/Group 1.png" alt="" />
        </div>
      </Parallax>
      {
        merchs.map((merch,index)=>(
          <Parallax key={index} speed={10} opacity={[0,2.5]} className={`Merch ${index % 2 === 0 ? "mt-5" : "mb-5"} mt-5`}>
            <Merch merch={merch} index={index}/>
          </Parallax>
        ))
      }
    </div>
  )
}

export default Merchs