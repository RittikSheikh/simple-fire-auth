import React from 'react';
import Lottie from 'lottie-react';
import home from '../assests/for-home.json';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
        <div className='text-4xl h-36 font-bold leading-none sm:text-5xl'>
        <Typewriter options={{loop:true}} onInit={(typewriter) => {
          typewriter.typeString('Welcome to simple <span style="color:#60A5FA">Web Authentication</span> site project ! ').pauseFor(2000).deleteAll().typeString('Hey . . . . <span style="color:#60A5FA">Rittik</span> is here!').pauseFor(1500).deleteAll().typeString('<span style="color:#60A5FA">Front-End</span> web developer').pauseFor(2000).deleteAll().start()
        }} />
        </div>
      </div>
      <div className='p-4'>
        <Lottie className='w-4/12 mx-auto' animationData={home} loop={true} />
      </div>
    </section>
    );
};

export default Home;