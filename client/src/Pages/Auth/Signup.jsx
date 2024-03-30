import { useEffect, useState } from "react"
import axios from "axios";
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [ user , setUser] = useState({
        name : "",
        age : 0,
        email: "",
        password:"",
        confirmPassword:""
    });

    const [token, setToken] = useCookies(['token'])

    useEffect(()=>{
        token.token && navigate("/");
    },[token,navigate])

    const [ err , setErr] = useState("");

    const handleChange = e => {
        const { name , value , type } = e.target;
        setUser({
            ...user,
            [name] : type === "number" ? parseInt(value) : value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res =  await axios.post('http://localhost:4000/auth/signup',user,{
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            if(res.data.data.token ){
                setToken('token',res.data.data.token,{path:"/"});
                navigate('/');
            }

        }catch(err){
            if (err.response && err.response.status === 401) {
                setErr(err.response.data.message);
            }
        }
    }

  return (
    <div className="row w-75 my-5 py-5 m-auto">
        <form className="py-3 w-75 m-auto px-5 border border-1 rounded-5 shadow" onSubmit={e=>handleSubmit(e)}>
            <div className="my-3">
                <h1 className="text-warning fw-bolder text-center">SignUp</h1>
            </div>
            <div className="my-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" name="name" type="text" value={user.name} className="form-control" onChange={e=>handleChange(e)} />
            </div>
            <div className="my-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input id="age" name="age" type="number" value={user.age} className="form-control" onChange={e=>handleChange(e)} />
            </div>
            <div className="my-3">
                <label htmlFor="email" className="form-label">email</label>
                <input id="email" name="email" type="email" value={user.email} className="form-control" onChange={e=>handleChange(e)} />
            </div>
            <div className="my-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" name="password" type="password" value={user.password} className="form-control" onChange={e=>handleChange(e)} />
            </div>
            <div className="my-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" value={user.confirmPassword} className="form-control" onChange={e=>handleChange(e)} />
            </div>
            <div className="my-3">
                <Link to={'/auth/login'}>Already Have An Account ?</Link>
            </div>
            {
                err && (
                    <div className="my-2">
                        <span className="text-center text-danger">{err}</span>
                    </div>
                )
            }
            <div className="my-3">
                <input className="btn btn-primary" value={"Signup"} type="submit"/>
            </div>
        </form>
    </div>
  )
}

export default Signup