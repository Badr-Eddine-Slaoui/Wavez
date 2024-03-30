import propTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../Store/printSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCookies } from 'react-cookie';

const Print = ({print,index}) => {

    const [token] = useCookies(['token'])
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    return(
        <>
            <div className="col-4 my-3">
                <div className="Card card m-auto border-0 bg-transparent">
                    <div className="card-header p-0 bg-transparent border-0">
                        <LazyLoadImage effect='blur' className='card-img-top w-100' src={print.image} alt={print.title}/>
                    </div>
                    <div className="card-body p-0 py-3">
                        <div className="d-flex justify-content-between">
                            <p className='m-0'>{print.title}</p>
                            <p className='m-0'>{print.price}$</p>
                        </div>
                    </div>
                    <div className="card-footer p-0 bg-transparent border-0">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <button className='Btn w-100' disabled={!token.token && true} onClick={()=>dispatch(addToCart(print))}>Buy</button>
                            </div>
                            <div className="col-6">
                                <button className='Btn Pay w-100' disabled={!token.token && true} onClick={()=>{dispatch(addToCart(print));navigate('/cart')}}>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
               index === 2 && index % 2 === 0 && (
                    <div className="row my-5">
                        <div className="col-4 d-flex">
                            <LazyLoadImage effect='blur' className='Roma m-auto' src="/Images/roma left.png" alt="Roma Left"/>
                        </div>
                        <div className="col-4 d-flex">
                            <div className="card w-75 m-auto border-0">
                                <div className="card-header p-0">
                                    <LazyLoadImage effect='blur' className='w-100 card-img-top' src="/Images/minutes-before-Seconds.png" alt="Minutes Before Seconds"/>
                                </div>
                                <div className="card-body px-0">
                                    <button className='Btn w-100 bg-black text-white'>bid now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex">
                        <LazyLoadImage effect='blur' className='Roma m-auto float-end' src="/Images/roma right.png" alt="Roma Right"/>
                        </div>
                    </div>
               )
            }
        </>
    )
}

Print.propTypes = {
    print : propTypes.object.isRequired,
    index: propTypes.number.isRequired
}

export default Print