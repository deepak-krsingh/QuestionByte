import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { useSelector } from 'react-redux';

function Header() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return ( 
        <header className = "header">
            <div>
                <Link to = "/#"> QuestionByte </Link>  
            </div>

            <div>
                {userInfo ? (
                    <Link to="/profile" className="login"><i className="fa fa-user" aria-hidden="true"></i>{userInfo.name}</Link>
                        ) : (
                        <Link to="/login" className="login"><i className="fa fa-user" aria-hidden="true"></i>Login</Link>
                    )}
            </div>

        </header>
    )
}

export default Header;