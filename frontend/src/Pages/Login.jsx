import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import './mixed.css';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userSignin = useSelector(state => state.userSignin);
	const { loading, userInfo, error } = userSignin;
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
		dispatch(signin(email, password));

	}

  return (
	<div className="mixed">
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					<form className="login100-form validate-form" onSubmit={submitHandler}>
						<span className="login100-form-title p-b-49">
							Login
						</span>

						<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
							<span className="label-input100">Email</span>
							<input className="input100" type="email" name="email" id="email" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)}/>
							<span className="focus-input100" data-symbol="&#9993;"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Password is required">
							<span className="label-input100">Password</span>
							<input className="input100" type="password" name="password" id="password" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)}/>
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
									Login
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
						<Link to='/register'className="txt2">
							Register
						</Link>
					</form>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Login;
