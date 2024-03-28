import { Parallax } from 'react-scroll-parallax'
import './Prints.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Print from './Print'

const Prints = () => {

  const [prints,setPrints] = useState([])

    useEffect(()=>{

      document.title = "Print";

      const fetchPrints = async()=>{
        await axios.get("/API/prints.json")
        .then(res=>{
          setPrints(res.data)
        })
      }

      fetchPrints()
      
    },[])

  return (
    <div>
      <Parallax className='my-5' speed={-15} opacity={[2.5,0]}>
        <div className="PrintBanner my-5 py-5 row w-100 mx-0">
            <img className='p-0' src="/Images/Print Your life.png" alt="" />
        </div>
      </Parallax>
      <Parallax  speed={10} opacity={[.5,2.5]} className="Print row my-5">
          {
            prints.map((print,index)=>(
              <Print key={index} print={print} index={index}/>
            ))
          }
      </Parallax>
      <Parallax  speed={10} opacity={[1,2.5]} className="Print row my-5 m-auto justify-content-between">
          <div className='col-10'>
              <label className='fw-bolder text-uppercase mx-2' htmlFor="message">Contact us</label>
              <input className='ContactInput' id='message' type="text" placeholder='we hear you'/>
          </div>
          <div className='col-2 d-flex justify-content-center'>
            <button className='Donate Btn'>donate</button>
          </div>
      </Parallax>
    </div>
  )
}

export default Prints