import React from "react";
import '../index.css'

function Profile() {
    return (
        <div className="container">
            <p id="profile">Account Settings</p>
            <div className="profileContent">
                <section class="d-flex">
                    <img src='Ellipse-114.png' width={76} height={76} />
                    <img id="choose" src='Group-1585.png' width={21} height={23} />
                    <div className="details">
                        <b>Marry Doe</b>
                        <p>Marry@Gmail.com</p>
                    </div>
                </section>
                <p id='desc'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
        </div>
    )
}

export default Profile