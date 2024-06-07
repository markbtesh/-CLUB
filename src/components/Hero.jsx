import { motion } from 'framer-motion';

import { styles } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { banner, bubble } from '../assets';



const Hero = () => {

  
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      <div className={`${styles.paddingX} absolute inset-0 sm:top-[350px] xs:top-[350px] top-[75px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF5D29]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>

        <div className='z-20 absolute sm:left-[100px] left-[50px] '>
        <h1 className={`${styles.heroHeadText} heroBubbleText`}> tReS <br /> ComMA  <br /><span className="text-[#FF5D29] heroBubbleText"> CLuB</span></h1>
        <p className={`${styles.heroSubText} mt=2 text-white-100`}>
           <br className="sm:block hidden" /> 
        </p>
        <br /> 
       
        <br /> 
        <div>
          <a href="" className='rounded-full bg-[#FF5D29] p-5 px-10 text-[24px]'> BUy NoW</a>
        </div>
        <br />
        
      
      </div>
      <div className='absolute bottom-20'>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} color='#1877F2' size="5x" className="pr-3"/>
      </a>
      
   
    </div>
      </div>
    

   
      
      <div className='absolute lg:left-[14vw] xs:top-10 sm:top-10 lg:top-0  w-full flex justify-center items-center'>
        
              <div className="slider-thumbnail">
                <img src={banner} alt="Slider Images" />
             
            </div>
      
        </div>

        <div className='absolute right-32  top-10 w-full flex justify-center items-center'>
        
        <div >
        <img className="chat-bubble" src={bubble} />
        <h2 className={`${styles.dollar} absolute  left-[42.6vw] inline-block top-[-4px]`}></h2>
        <h2 className={`${styles.heroBubbleText} absolute lg:left-[45vw] xs:left-[46vw] sm:left-[46vw] xs:top-[0px] sm:top-[0px] lg:top-10 `}> $CLUB</h2>
        </div>
       

</div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
       
      </div>
      
    </section>
  )
}

export default Hero