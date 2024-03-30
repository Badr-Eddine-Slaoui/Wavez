import { useDispatch, useSelector } from "react-redux"
import "./Cart.css"
import { Parallax } from "react-scroll-parallax"
import Command from "./Command"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import axios from "axios"
import { videMerch } from "../../Store/merchSlice"
import { videPrints } from "../../Store/printSlice"

const Cart = () => {

    const [token] = useCookies(['token'])

    useEffect(()=>{

        document.title = "Cart"
        
    },[])

    const dispatch = useDispatch()

    const {merchs} = useSelector(state => state.merch)
    const {prints} = useSelector(state => state.print)
    const totalMerchs = merchs.reduce((total,m)=>total += (m.price * m.quantity),0)
    const totalPrints = prints.reduce((total,p)=>total += (p.price * p.quantity),0)
    const buy = async()=>{
        try{
            if(token.token && (merchs.length !== 0 || prints.length !== 0)){
                const command = {
                    products : merchs.concat(prints),
                    totalPrice: totalMerchs + totalPrints
                }
                const res =  await axios.post('http://localhost:4000/command/buy',command,{
                    headers:{
                        "Content-Type" : "application/json",
                        "Authorization" : 'Bearer ' + token.token
                    }
                })
                if(res.data.data.command){
                    console.log(res.data.data.command);
                    dispatch(videMerch());
                    dispatch(videPrints());
                }
            }
        }catch(err){
            if (err.response && err.response.status === 400) {
                console.log(err.response.data.message);
            }
        }
    }
  return (
    <div className="Cart">
        <div className="row my-5 pt-5 mx-0">
            {
                token.token ? merchs.length !== 0 || prints.length !== 0 ? (
                    <>
                        {
                            merchs.map((merch,index)=>(
                                <Parallax key={index} speed={-5} opacity={[3,0]}>
                                    <Command command={merch} type="merch"/>
                                </Parallax>
                            ))
                        }
                        {
                            prints.map((print,index)=>(
                                <Parallax key={index} speed={-5} opacity={[3,0]}>
                                    <Command command={print} type="print"/>
                                </Parallax>
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h1 className="text-center py-5 my-5 w-50 mx-auto">There&apos;s no Command for now buy something and come back</h1>
                    </>
                )
                : (
                    <>
                    <h1 className="text-center py-5 my-5 w-50 mx-auto text-danger">Wanna do some commands?<br></br>Please login</h1>
                    </>
                )
            }
        </div>
        <div className="row my-5 pb-5 justify-content-center align-items-center mx-0">
            <div className="col-3 my-5">
                <p className="text-center fs-3">Total : {totalMerchs + totalPrints}$</p>
                <button className="Btn w-100" disabled={!token.token && true} onClick={buy}>Command</button>
            </div>
        </div>
    </div>
  )
}

export default Cart