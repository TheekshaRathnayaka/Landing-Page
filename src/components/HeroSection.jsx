const HeroSection = () => {
  return (
    <section id='home'>
      <div className="flex flex-col items-center mt-6 lg:mt-20">

          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
              AIForge - 
              <span className="bg-gradient-to-r from-pink-500 to-pink-800 text-transparent bg-clip-text">
                  {" "}
                  developer friendly tools
              </span>
          </h1>

          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Unlock the potential of artificial intelligence in your apps with AIForge. Our developer-friendly tools allow you to integrate advanced AI models and machine learning algorithms without the need for deep technical expertise. Start building smarter applications today, powered by AI!
          </p>
          
          <div className='flex justify-center my-10'>
            <a href='#' className='bg-gradient-to-r from-pink-500 to-pink-800 py-3 px-4 mx-3 rounded-md'>
              Start for Free
            </a>

            <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
              Documentation
            </a>
          </div>

          <div className='flex justify-center mt-10'>

            <video autoPlay loop muted className='rounded-lg w-1/2 border border-pink-700 shadow-sm shadow-pink-400 mx-2 my-4'>
              <source src='/video3.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>

            <video autoPlay loop muted className='rounded-lg w-1/2 border border-pink-700 shadow-sm shadow-pink-400 mx-2 my-4'>
              <source src='/video4.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>

          </div>

      </div>
    </section>
  );
};

export default HeroSection;
