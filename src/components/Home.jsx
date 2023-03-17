import React from 'react';
import Lottie from 'lottie-react';
import home from '../assests/for-home.json';

const Home = () => {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome to simple
          <span className="dark:text-blue-400">Web Authentication</span>site project !
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Hey! . . . hi, Here is <span className="dark:text-blue-400">Rittik</span> <br />I would like to call my self as a <span className="dark:text-blue-400">front-end</span> web developer.Love to learn coding and trying to eat <span className="dark:text-blue-400">code</span> as dinner! <br /><span className="dark:text-blue-400"> #ha ha# </span><br />Will try my best to build your dream <small>SPA</small> web application.</p>
      </div>
      <div className='p-4'>
        <Lottie className='w-4/12 mx-auto' animationData={home} loop={true} />
      </div>
    </section>
    );
};

export default Home;