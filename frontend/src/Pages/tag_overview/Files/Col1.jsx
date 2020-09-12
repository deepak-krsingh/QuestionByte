import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

function Col1() {
    return ( 
        <div className = "col1 section">
            <div>
                <Link to="/" className = "home">Home</Link>  
                <p className = "PUBLIC"> PUBLIC </p>  
                <a className = "tag" href = "allquestion.html"> All Question </a>  
                <a className = "tag" href = "tags.html"> Tags </a>  
                <a className = "tag" href = "users.html"> Users </a>  
                <a className = "home" href = "guidelines.html"> User Guidelines </a>  
                <a className = "home" href = "aboutus.html" > About us </a>  
            </div>

        </div>
    )
}

export default Col1;