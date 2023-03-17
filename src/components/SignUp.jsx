import './SignUp.css';
import Lottie from 'lottie-react';
import login from '../assests/129750-login-orange.json';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth';
import { useState } from 'react';
import google from '../assests/google.json';
import facebook from '../assests/facebook.json';
import github from '../assests/github.json';




const auth = getAuth(app)

const SignUp = () => {

	// storing the newCreated user info
const [userInfo,setUserInfo] = useState({});

const handleSignUp = (e) => {
	e.preventDefault()
	const form = e.target;
	const userName = form.name.value;
	const email = form.email.value;
	const password = form.password.value;

	createUserWithEmailAndPassword(auth,email,password)
	.then(result=>{
		// updating user Name
		updateProfile(auth.currentUser, {
			displayName: userName
		})
		// verifying user Email 
		sendEmailVerification(auth.currentUser)
		.then(()=>{
			alert('check your mail to verify your email')
		})
		const user = result.user;
		// set the user into State
		setUserInfo(user)
	})
	.catch(error => {
		console.error(error)
	})
}


    return (
        <div className='my-10 mx-2'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Sign up</h2>
			<div className="dark:text-gray-400">Happy to see you in here user !</div>
		</div>
		<Lottie className='p-2' animationData={login} loop={true} ></Lottie>
	</div>
	<form noValidate="" onSubmit={handleSignUp} className=" signup-form space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" name='name' placeholder='user name'  className="w-full p-3 rounded dark:bg-gray-600" />
		</div>
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
			<Lottie className='w-28 h-24 bg-slate-700 rounded-lg ml-5' animationData={google} loop={true}/>
			{/* facebook */}
			<Lottie className='w-28 h-24 bg-slate-700 rounded-lg ml-5' animationData={facebook} loop={true} />
			{/* github */}
			<Lottie className='w-28 h-24 bg-slate-700 rounded-lg ml-5' animationData={github} loop={true} />
		</div>
        <div className='checkbox'>
        <input type="checkbox"/>
        <label className='checkbox-text'>accept terms & condition</label>
        </div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-500 hover:bg-orange-600 dark:text-gray-100">Sign up</button>
	</form>
</div>
        </div>
    );
};

export default SignUp;