import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function Register(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const userRegister = useSelector(state => state.userRegister);
	const { loading, userInfo, error } = userRegister;
	const dispatch = useDispatch();

	const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
		return () => {
		//
		};
	}, [userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, email, password));
	}
    return ( 
        <div className="limiter">
		<div className="container-login100" style={{backgroundImage : "url('images/bg-01.jpg');"}}>
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form" onSubmit={submitHandler}>
					<span className="login100-form-title p-b-49">
						Register
					</span>

					<div className="wrap-input100 validate-input m-b-23" data-validate = "Name is reauired">
						<span className="label-input100">Name</span>
						<input className="input100" type="name" name="name" id="name" placeholder="Type your username" onChange={(e) => setName(e.target.value)}/>
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>

                    <div className="wrap-input100 validate-input m-b-23" data-validate = "Email is reauired">
						<span className="label-input100">Email</span>
						<input className="input100" type="email" name="email" id="email" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)}/>
						<span className="focus-input100" data-symbol="&#9993;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="password" id="password" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)}/>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>

                    <div className="wrap-input100 validate-input" data-validate="ReEnter your password">
						<span className="label-input100">ReType Password</span>
						<input className="input100" type="password" name="repassword" id="repassword" placeholder="Re-type your password" onChange={(e) => setRePassword(e.target.value)}/>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					
					<div className="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Register
							</button>
						</div>
					</div>

					<div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Login Using
						</span>
					</div>

					<div className="flex-c-m">
						<a href="#" className="login100-social-item bg1">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="#" className="login100-social-item bg2">
							<i className="fa fa-twitter"></i>
						</a>

						<a href="#" className="login100-social-item bg3">
							<i className="fa fa-google"></i>
						</a>
					</div>
					<Link to="/login" className="txt2">
						Login
					</Link>
				</form>
			</div>
		</div>
	</div>
    )
}

export default Register;