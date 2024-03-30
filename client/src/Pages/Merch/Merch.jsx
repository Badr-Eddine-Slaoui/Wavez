import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addToCart } from "../../Store/merchSlice"
import { useCookies } from 'react-cookie'

const Merch = ({merch,index}) => {

  const [token] = useCookies(['token'])

  const dispatch = useDispatch()

  return(
    <div className="col-6">
    <div className="card w-50 m-auto border-0 bg-transparent">
      <img className="card-img-top" src={merch.image} alt="Title" />
      <div className="card-body px-0 pb-0">
        <h4 className="my-2 text-center text-uppercase fw-bolder fs-6">{merch.title}</h4>
        <div className="row mx-0">
          <div className="col-8">
              <p className="">{merch.description}</p>
          </div>
          <div className="col-4">
            <p className="text-end">{merch.price}$</p>
          </div>
        </div>
      </div>
      <div className="card-footer px-0 bg-transparent border-0">
        <button className="w-100 btn btn-dark rounded-0" disabled={!token.token && true} onClick={()=>dispatch(addToCart(merch))}>Add To Cart</button>
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