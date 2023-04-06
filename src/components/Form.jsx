import GIcon from "../assets/google-icon.png"
import AIcon from "../assets/apple-icon.png"
import { signIn } from "../utils/Firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {
        const navigate = useNavigate();
        const googleSignIn = () => {
                signIn().then((response) => {
                        navigate("/dashboard", {state : response.user.photoURL})
                }).catch((err) => console.log(err))
        }

        return (
                <div className="auth-container grid place-content-center bg-gray-100 basis-3/5">
                        <div className="container max-w-lg">
                                <h2 className="text-3xl font-bold">Sign In</h2>
                                <p className="text-sm font-semibold font-secondary">Sign in to your account</p>
                                <div className="signin-container my-4 flex items-center">
                                        <div className="google-signin  flex items-center space-x-2 rounded-lg mr-2 bg-white py-2 px-6 hover:cursor-pointer">
                                                <img className="w-5" src={GIcon} alt="Google Icon" />
                                                <a href="#" className=" text-sm text-gray-500" onClick={googleSignIn}>Sign In with Google</a>
                                        </div>
                                        <div className="apple-signin  flex items-center space-x-2 rounded-lg ml-2 bg-white py-2 px-6 hover:cursor-pointer">
                                                <img className="w-5" src={AIcon} alt="Apple Icon" />
                                                <a href="#" className=" text-sm text-gray-500">Sign In with Apple</a>
                                        </div>
                                </div>
                                <form className="form-container rounded-2xl px-6 py-7 bg-white my-6 font-secondary">
                                        <div className="input-group space-y-2">
                                                <label className="text-md font-semibold block" htmlFor="email">Email address</label>
                                                <input className=" bg-gray-100 rounded-lg outline-none border-none w-full h-10 px-4" type="text" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="input-group space-y-2 mt-3">
                                                <label className="text-md font-semibold block" htmlFor="password">Password</label>
                                                <input  className=" bg-gray-100 rounded-lg outline-none border-none w-full h-10 px-4" type="passwordd" id="password" placeholder="Enter your password" />
                                        </div>
                                        <a className="block my-4 text-blue-600 text-sm font-semibold" href="#">Forgot password?</a>
                                        <div className="input-group text-center">
                                                <a className=" bg-black w-full rounded-lg text-white block py-2 font-semibold cursor-pointer hover:bg-gray-700 font-primary" onClick={googleSignIn}>Sign In</a>
                                        </div>
                                </form>
                                <div className="text-center">
                                        <span className="text-sm text-gray-500 font-secondary">Don't have an account? <a onClick={googleSignIn} className="text-blue-600 text-sm font-semibold" href="#">Register here</a></span>
                                </div>
                        </div>
                </div>
        );
}

export default Form