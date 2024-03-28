import { useEffect } from "react"
import "./OurStory.css"

const OurStory = () => {

  useEffect(()=>{

    document.title = "Our Story"
    
  },[])

  return (
    <div className="OurStory my-5 py-5">
      <div className="row my-5">
          <h1 className="text-center mt-5 w-50 mx-auto text-capitalize">This is our story</h1>
      </div>
      <div className="row mb-5 pb-5">
        <p className="text-center w-50 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis ratione id expedita velit blanditiis provident voluptate nihil asperiores animi eos inventore repellat ex beatae consectetur ad, accusamus nemo? Quas, libero amet in consectetur labore optio. Sequi dolorem unde incidunt deserunt eaque quae repellendus, temporibus deleniti ducimus odio quia vero mollitia perferendis delectus sit, autem architecto laboriosam ratione laudantium voluptates possimus dolore nostrum. In distinctio nemo eum assumenda ad ratione, mollitia adipisci similique cum. Consectetur, sed. Inventore, quibusdam quo. Esse, a necessitatibus excepturi aliquam exercitationem cum amet earum atque vero velit quidem molestiae ex eum omnis? Voluptatem nobis neque eius!
        </p>
      </div>
    </div>
  )
}

export default OurStory