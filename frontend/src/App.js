import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import './App.css';
import { useSelector } from 'react-redux';

//pages
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Questions from './Pages/Questions';
import ProfileScreen from './screens/ProfileScreen';

function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { HomePage }
        />  <
        Route exact path = "/login/"
        component = { Login }
        />  <
        Route exact path = "/register/"
        component = { Register }
        />  <
        Route exact path = "/public/questions/"
        component = { Questions }
        />  <
        Route exact path = "/profile/"
        component = { ProfileScreen }
        />

        <
        /Switch>  < /
        Router >
    );
}

export default App;