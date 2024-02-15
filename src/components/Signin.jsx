import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div className="loginContent">
            <h2 className="">Signin to your <br />
                PopX account
            </h2>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form>
                <fieldset className="">
                    <legend>Email Address</legend>
                    <input type="email" placeholder="Enter email address" required />
                </fieldset>

                <fieldset className="">
                    <legend>Password</legend>
                    <input type="email" placeholder="Enter Password" required />
                </fieldset>


                <div className="loginContentBtn">
                    <Link to="/profile">
                        <button type="button">Login</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Signin