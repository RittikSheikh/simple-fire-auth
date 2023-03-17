import React, { useState } from 'react';
import Lottie from 'lottie-react';
import signup from '../assests/signup.json';
import google from '../assests/google.json';
import facebook from '../assests/facebook.json';
import github from '../assests/github.json';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();


const handleLogIn = (e) => {
	
}


const handleGoogleIN = () => {
	signInWithPopup(auth, googleProvider)
	.then(result => {
		const user = result.user;
	})
	.catch(error => {
		console.error(error)
	})
}

const handleFacebookIn = () => {
	signInWithPopup(auth, facebookProvider)
	.then(result => {
		const user = result.user;
	})
	.catch(error => {
		console.error(error)
	})
}

const handleGithubIN = () => {
	signInWithPopup(auth, githubProvider)
	.then(result => {
		const user = result.user;
	})
	.catch(error => {
		console.error(error)
	})
}

const LogIn = () => {
    return (
        <div className='my-10 mx-2'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<form noValidate="" className="signup-form space-y-6 ng-untouched ng-pristine ng-valid mt-6">
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" name='email' placeholder="email" className="w-full p-3 rounded dark:bg-gray-600" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Password</label>
			<input id="password" type="password" name='password' placeholder="password" className="w-full p-3 rounded dark:bg-gray-600" />
		</div>
		<hr />
		
		<div className='w-full flex justify-center'>
			{/* google */}
			<Lottie onClick={handleGoogleIN} className='w-28 h-24 bg-slate-700 rounded-lg ml-5 hover:cursor-pointer' animationData={google} loop={true}/>
			{/* facebook */}
			<Lottie onClick={handleFacebookIn} className='w-28 h-24 bg-slate-700 rounded-lg ml-5 hover:cursor-pointer' animationData={facebook} loop={true} />
			{/* github */}
			<Lottie onClick={handleGithubIN} className='w-28 h-24 bg-slate-700 rounded-lg ml-5 hover:cursor-pointer' animationData={github} loop={true} />
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-500 hover:bg-orange-600 dark:text-gray-100">Log in</button>
		<small>Don't have an account ! <Link to={'/signup'} className='text-orange-400 underline'>Sign up</Link> </small>
	</form>
    <div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Sign in</h2>
			<div className="dark:text-orange-400">Welcome back user !</div>
		</div>
		<Lottie className='p-2 h-80 md:h-96' animationData={signup} loop={true} />
	</div>
</div>
        </div>
    );
};

export default LogIn;