import React from 'react';
import Lottie from 'lottie-react';
import signup from '../assests/signup.json';
import { SocialIcon } from 'react-social-icons';

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
		<button className='items-center w-full'>
			{/* google */}
			<SocialIcon className='ml-8' bgColor='salmon' url="https://google.com/jaketrent" />
			{/* facebook */}
			<SocialIcon className='ml-8' bgColor='cornflowerblue' url='https://facebook.com/jaketrent'/>
			{/* github */}
			<SocialIcon className='ml-8' bgColor='gray' url='https://github.com/jaketrent'/>
		</button>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-500 hover:bg-orange-600 dark:text-gray-100">Log in</button>
	</form>
    <div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Sign in</h2>
			<div className="dark:text-gray-400">Welcome back user !</div>
		</div>
		<Lottie className='p-2 h-80 md:h-96' animationData={signup} loop={true} ></Lottie>
	</div>
</div>
        </div>
    );
};

export default LogIn;