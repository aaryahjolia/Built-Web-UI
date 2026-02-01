import './tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';
import { useEffect } from 'react';


import HomeBG from './Assets/Hero_BG.png'
import MainBG from './Assets/Main_BG.png'
import Logo from './Assets/Logo.png'
import Work_1 from './Assets/Work_Images/Work_1.png'
import Work_2 from './Assets/Work_Images/Work_2.png'
import Work_3 from './Assets/Work_Images/Work_3.png'
import Work_4 from './Assets/Work_Images/Work_4.png'
import Work_5 from './Assets/Work_Images/Work_5.png'
import Work_6 from './Assets/Work_Images/Work_6.png'
import CubeImage from './Assets/Cube_Image.png'

// Command for starting Tailwind CLI:
// npx tailwindcss -i ./src/App.css -o ./src/tailwind.css --watch

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div style={{ fontFamily: "Impact" }} className='bg-black text-white'>
      <div className="relative bg-cover bg-center transform -translate-y-10">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" ></div>
        {/* Background image */}
        <img
          src={HomeBG}
          alt="Main Background"
          className="object-cover h-full w-full"
        />
        {/* Content */}
        <div className="absolute inset-0 text-white">
          <img
            src={Logo}
            alt="Built Logo"
            className="mx-auto w-44 mt-24"
            data-aos="zoom-in"
          />

          {/* Menu Links Container */}
          <div className="flex justify-center space-x-20 mt-10 uppercase text-2xl" data-aos="zoom-in">
            <a href="/" className="hover:underline">Services</a>
            <a href="/" className="hover:underline">Projects</a>
            <a href="/" className="hover:underline">Venues</a>
            <a href="/" className="hover:underline">About Us</a>
          </div>

          <h1 className='uppercase text-center mt-5' style={{ fontFamily: "Arial" }} data-aos="fade-up">
            A FUTURE FORWARD PRODUCTION COMPANY <br />
            EXCELLING IN MODERN STATE OF THE ART EQUIPMENT.</h1>

          <div className='w-11/12 mx-auto' data-aos="fade-up">
            <h1 className='uppercase text-8xl text-right leading-none mr-28 mt-64'>TRANSFORMING IDEAS <br /> INTO EXPERIENCES</h1>

            <div className='flex justify-between items-center text-xl mt-10'>
              <div className=''>
                <h2 className='uppercase'>@2015 <br /> Built Beyond Limits</h2>
              </div>
              <h1 className='uppercase text-3xl mr-28'>LA / NYC</h1>
            </div>

          </div>
        </div>
      </div>

      {/* 
      <div className="relative bg-contain bg-center transform bg-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/0 to-transparent opacity-100" ></div>
        <img
          src={MainBG}
          alt="Main Background 2"
          className="object-cover h-full w-full opacity-20"
        />

        <div className="absolute inset-0 text-white">
      */}
      <div className="relative bg-black text-white">
        <div>

          <div className='text-white flex justify-end -mt-10'>
            <div className='uppercase inline-block mr-44'>
              <h1 className='text-7xl leading-normal' data-aos="fade-up">
                Everyday. We Work. <br />
                <span className='text-8xl text-primary'>Built Beyond Limits.</span>
              </h1>
            </div>
          </div>

          <div className='flex justify-between items-start mt-10 mb-32 w-11/12 mx-auto' style={{ fontFamily: "Arial" }} data-aos="fade-up">
            <h2 className='uppercase'>@2015</h2>
            <div className='mr-28'>
              <h1 className='uppercase'>@2024</h1>
              <h1 className='uppercase mt-10'>WE ARE PLEASED TO <br /> ASSIST AGENCIES AT ALL LEVELS.</h1>
            </div>
          </div>

          <div className='w-11/12 mx-auto uppercase flex flex-col md:flex-row items-center justify-between text-white my-20' style={{ fontFamily: "Arial" }} data-aos="fade-up">
            <h1 className='my-2 md:my-0'>Everyday. We Work.</h1>
            <h1 className='my-2 md:my-0'>LOS ANGELES / NEW YORK CITY</h1>
            <h1 className='my-2 md:my-0'>Built Beyond Limits</h1>
          </div>

          {/* What We Do Section */}
          <div className='w-11/12 my-10 mx-auto'>
            <h1 className='uppercase text-6xl text-center text-primary my-24' data-aos="fade-up">What We do</h1>

            <div className='flex flex-col md:flex-row flex-wrap justify-around items-center uppercase text-white w-4/5 mx-auto gap-20 md:gap-40'>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_1} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-3'>Lighting</h1>
              </div>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_2} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-3'>Rigging</h1>
              </div>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_3} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-6'>Transportation & Logistics</h1>
              </div>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_4} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-3'>Project Management</h1>
              </div>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_5} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-3'>Audio / Visual</h1>
              </div>

              <div className='w-4/5 md:w-2/5 flex flex-col items-center ' data-aos="fade-up">
                <div className='h-60'>
                  <img src={Work_6} alt="Work 1" className="h-full p-8 object-contain" />
                </div>
                <h1 className='text-center text-3xl mt-3'>Renderings</h1>
              </div>

              <a href='/' className='uppercase text-6xl text-center text-primary border-b-2 border-primary pb-1' data-aos="fade-up">View All Services</a>

            </div>
          </div>

          <div className='w-11/12 mx-auto uppercase flex flex-col md:flex-row justify-between items-center text-white my-20' style={{ fontFamily: "Arial" }} data-aos="fade-up">
            <h1 className='my-2'>Everyday. We Work.</h1>
            <h1 className='my-2'>Produce without limits</h1>
            <h1 className='my-2'>Built Beyond Limits</h1>
          </div>

          <div className='w-10/12 mx-auto text-white flex flex-col md:flex-row justify-around items-center my-5' data-aos="fade-up">
            <h2 className='my-6'>@2015</h2>
            <div className='w-4/5 md:w-2/5'>
              <img src={CubeImage} alt="Cube" className="w-full object-contain" />
            </div>
            <h2 className='my-6'>@2024</h2>
          </div>

          <div className='w-11/12 mx-auto uppercase hidden md:flex justify-between text-white my-20' style={{ fontFamily: "Arial" }} data-aos="fade-up">
            <h1>Everyday. We Work.</h1>
            <h1>LOS ANGELES / NEW YORK CITY</h1>
            <h1>Built Beyond Limits</h1>
          </div>

          {/* Carousel */}
          <div data-aos="fade-up">
            <Carousel />
          </div>

          <div className='w-4/5 mx-auto flex justify-around uppercase my-28 md:my-32 md:mb-40' data-aos="fade-up">
            <a href='/' className='uppercase text-6xl text-center text-white border-b-2 border-white pb-1'>View All Projects</a>
          </div>

          {/* Footer */}
          <div className='pb-16 w-11/12 mx-auto'>

            <div className='flex-col md:flex-row flex justify-between items-center md:items-start uppercase gap-12'>
              <h1 className='text-primary border-b-8 border-primary w-4/5 md:w-2/5 pb-2 md:text-[12rem] text-6xl leading-none text-center md:text-left' data-aos="fade-up">Lets Build.</h1>
              <div className='text-primary text-center md:text-left text-2xl md:text-3xl md:w-2/5' data-aos="fade-up">
                <h1>IG_BUILTANDCOMPANY</h1>
                <h1>HELLO@BUILTANDCOMPANY.COM</h1>
              </div>
            </div>

            <h1 className='text-center uppercase text-2xl mt-20 mb-4'>© 2024 THE DRIP GROUP INC</h1>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
