import React from "react"
import '../index.css'
import { Link } from "react-router-dom"
function SignUp() {
    return (
        <div className="container">
            <div className="SignUpContent">
                <h2>Create your<br />
                    PopX account
                </h2>
                <form>
                    <fieldset>
                        <legend>Full Name<span>*</span></legend>
                        <input type="text" defaultValue="Marry Doe" required />
                    </fieldset>
                    <fieldset>
                        <legend>Phone Number<span>*</span></legend>
                        <input type="tel" defaultValue="Marry Doe" required />
                    </fieldset>
                    <fieldset>
                        <legend>Email Address<span>*</span></legend>
                        <input type="email" defaultValue="Marry Doe" required />
                    </fieldset>
                    <fieldset>
                        <legend>Password<span>*</span></legend>
                        <input type="password" defaultValue="Marry Doe" required />
                    </fieldset>

                    <fieldset>
                        <legend>Company name</legend>
                        <input type="email" defaultValue="Marry Doe" />
                    </fieldset>

                    <p><b>Are you an Agency?</b><span>*</span></p><br />

                    <input type="radio" name="agency" required id="option1" checked/>
                    <label htmlFor="option1" className="">Yes</label>
                    <input type="radio" name="agency" required id="option2" />
                    <label htmlFor="option2" className="">No</label>
                </form>
                <div className="signUpContentBtn">
                    <Link to="/profile">
                        <button>Create Account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp