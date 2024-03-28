import { Parallax } from "react-scroll-parallax"
import "./SocialMedia.css"
import { useEffect, useState } from "react"
import axios from "axios"

const SocialMedia = () => {

        const [media,setMedia] = useState([])

        useEffect(()=>{

            document.title = "Social Media"

            const fetchMedia = async()=>{
                await axios.get("/API/media.json")
                .then(res => setMedia(res.data))
            }

            fetchMedia()
            
        },[])

  return (
    <Parallax speed={-5} opacity={[2.5,0]}>
        <div className="SocialMedia w-50 my-5 py-5 m-auto row mb-5 pb-5 align-items-center">
            <div className="row mt-5">
                <h1 className="text-center my-5 w-100 mx-auto text-capitalize">Follow us everywhere</h1>
            </div>
            {
                media.map((m,index)=>(
                    <div className="col-6" key={index}>
                        <div className="row w-100 my-5 justify-content-center align-items-center">
                            <div className="col-4">
                                <img className="w-100" src={m.image} alt="" />
                            </div>
                            <div className="col-7">
                                <p className="MediaName text-left m-0">{m.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </Parallax>
  )
}

export default SocialMedia