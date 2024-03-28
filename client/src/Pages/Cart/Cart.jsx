import { useSelector } from "react-redux"
import "./Cart.css"
import { Parallax } from "react-scroll-parallax"
import Command from "./Command"
import { useEffect } from "react"

const Cart = () => {

    useEffect(()=>{

        document.title = "Cart"
        
    },[])

    const {merchs} = useSelector(state => state.merch)
    const {prints} = useSelector(state => state.print)
    const totalMerchs = merchs.reduce((total,m)=>total += (m.price * m.quantity),0)
    const totalPrints = prints.reduce((total,p)=>total += (p.price * p.quantity),0)

  return (
    <div className="Cart">
        <div className="row my-5 pt-5">
            {
                merchs.length !== 0 || prints.length !== 0 ? (
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
            }
        </div>
        <div className="row my-5 pb-5 justify-content-center align-items-center">
            <div className="col-3 my-5">
                <p className="text-center fs-3">Total : {totalMerchs + totalPrints}$</p>
                <button className="Btn w-100">Command</button>
            </div>
        </div>
    </div>
  )
}

export default Cart