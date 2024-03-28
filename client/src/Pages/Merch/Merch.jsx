import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addToCart } from "../../Store/merchSlice"
import { useNavigate } from 'react-router-dom'

const Merch = ({merch,index}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return(
      <div className={`row my-3 justify-content-center align-items-center gap-5 ${index % 2 !== 0 && "flex-row-reverse"}`}>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="ImgContainer">
            <img className='w-100' src={merch.image} alt={merch.title} />
          </div>
        </div>
        <div className="col-3 p-0">
          <div className={`TextContainer ${index % 2 !== 0 && "Reversed"}`}>
            <h2>{merch.title}</h2>
            <p className='mb-5'>{merch.description}</p>
            <div className="row mt-5 justify-content-center">
              <div className="col-6">
                <button className='Btn w-100' onClick={()=>{dispatch(addToCart(merch));navigate('/cart')}}>Buy</button>
              </div>
              <div className="col-6">
                <button className='Btn w-100' onClick={()=>dispatch(addToCart(merch))}>Add <span>to</span> cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className={`ImgContainer Arrow ${index % 2 !== 0 && "Reversed"}`}>
            <img className='w-75' src="/public/Images/lines (30).png" alt="" />
          </div>
        </div>
      </div>
  )
}

Merch.propTypes = {
  merch : propTypes.object.isRequired,
  index : propTypes.number.isRequired
}

export default Merch