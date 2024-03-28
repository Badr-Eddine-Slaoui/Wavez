import propTypes from 'prop-types'
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from 'react-redux'
import { addToCart as addMerch, removeFromCart as removeMerch, removeOneFromCart as removeOneMerch } from '../../Store/merchSlice'
import { addToCart as addPrint, removeOneFromCart as removeOnePrint , removeFromCart as removePrint } from '../../Store/printSlice'

const Command = ({command,type}) => {

    const dispatch = useDispatch()

  return (
    <div className="Merch row justify-content-center align-items-center my-4 m-auto py-3 position-relative">
        <div className="Remove position-absolute top-0 end-0">
            <FontAwesomeIcon icon={faClose} onClick={()=>dispatch( type === 'merch' ? removeMerch(command.id) : removePrint(command.id))}/>
        </div>
        <div className="col-2">
            <img className="w-50" src={command.image} alt={command.title} />
        </div>
        <div className="col-6 mt-3">
            <div className="row">
                <h4>{command.title}</h4>
                <p className="MerchDescription">{command.description}</p>
            </div>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
            <div>
                <p className="MerchPrice m-0 d-flex justify-content-center align-items-center">{command.price}$</p>
                <div className="QuantityContainer d-flex justify-content-around align-items-center mt-5 mb-3 gap-3">
                    <button className="QuantityBtn" onClick={()=>dispatch(type === 'merch' ? addMerch(command) : addPrint(command))}>+</button>
                    <p className="Quantity m-0">{command.quantity}</p>
                    <button className="QuantityBtn" onClick={()=>dispatch(type === 'merch' ? removeOneMerch(command.id) : removeOnePrint(command.id))}>-</button>
                </div>
            </div>
        </div>
    </div>
  )
}

Command.propTypes = {
    command : propTypes.object.isRequired,
    type : propTypes.string.isRequired
}

export default Command