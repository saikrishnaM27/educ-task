import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Welcome() {
    return (
        <>
            <div className="container">
                <div className="WelcomeContent">
                    <h2>Welcome to PopX</h2>
                    <p>Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </p>
                    <div className="signUpBtn">
                        <Link to="/sign-up">
                            <button>Create Account</button>
                        </Link>
                    </div>
                    <div className="loginBtn">
                        <Link to="/login">
                            <button>Already Registered? Login</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Welcome