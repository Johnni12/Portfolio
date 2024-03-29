import Profile from '../assets/avata.png'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0 md:flex-row md:items-start'>
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-BlueGradient'>
            Hello, I'm John,
            <br />
            <span className='text-darkGrayishBlue'>FullStack Developer</span>
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Crafting digital dreams into elegant, functional web realities
            through thoughtful architecture.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button
              href='#'
              className='p-3 px-6 pt-2 text-white bg-BlueGradient rounded-full baseline hover:bg-darkGrayishBlue'
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className='md:w-1/2'>
          <img src={Profile} alt='profile' className='mx-auto object-center' />
        </div>
      </div>
    </section>
  )
}

export default Hero
