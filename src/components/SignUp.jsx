import React from 'react';
import './SignUp.css';
import Lottie from 'lottie-react';
import login from '../assests/129750-login-orange.json';
import { SocialIcon } from 'react-social-icons';

const SignUp = () => {
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
	<form noValidate="" className=" signup-form space-y-6 ng-untouched ng-pristine ng-valid">
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
		<button className='items-center w-full'>
			{/* google */}
			<SocialIcon className='ml-8' bgColor='salmon' url="https://google.com/jaketrent" />
			{/* facebook */}
			<SocialIcon className='ml-8' bgColor='cornflowerblue' url='https://facebook.com/jaketrent'/>
			{/* github */}
			<SocialIcon className='ml-8' bgColor='gray' url='https://github.com/jaketrent'/>
		</button>
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