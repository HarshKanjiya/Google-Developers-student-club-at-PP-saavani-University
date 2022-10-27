import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import flyer from '../images/flyer.jpeg'
import gdscPpsuLogo from '../images/gdsc-ppsu-logo.png';
import closeBtn from '../images/closeSideBar.png';
import NavBar from './navBar';
import { useState } from 'react';
import Footer from './Footer';

const variant = {
    show:{x:['100%','0%']},
    hide:{x:['0%','100%']}
}

const Home = () => {
    const [sidebar, setSidebar ] = useState(false);
    return ( 
        <>
        <NavBar tools={true} sideBar={true} setSidebar = { setSidebar } />
        
            <SideMenu
            initial={{x:400}}
                animate={sidebar ? variant.show :variant.hide}
                transition={{stiffness:40,duration:.1}}
            >
                <div className='closeSideBar'>
                    <img src={closeBtn} onClick={()=>setSidebar(false)} />
                </div>
            <div className="navis">
                <a href="#IDEvents"  onClick={()=>setSidebar(false)}>Events</a>
                <a href="#IDTeam"  onClick={()=>setSidebar(false)}>The Team</a>
                <a href="#IDcontectUs"  onClick={()=>setSidebar(false)}>Contact us</a>   
            </div>
        </SideMenu>
        
        <Master>
            
            {/* hero */}
            <Header
            initial={{opacity:0}}
            animate={{opacity:1}}
            >
                <div 
                className='content-home-wrapper'
                >
                    <div className='content-home'>
                        <motion.img 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:.9,delay:1,ease:'easeInOut'}}
                        src={gdscPpsuLogo} className="GdscLogo" />
                        <br/>
                        <div className='Hero-txt'>
                        <p>We are GDSC P P Savani University,
                            <br/> our aim is to Learn and Grow with each other. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developers, designers, managers and learners come together under one roof to create a community which inspires thousands.</p>
                        <p>Join Us!</p>
                        </div>
                    </div>
                </div>

                <motion.div 
                className='anim'
                initial={{y:'-100%',opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:1,delay:1,ease:'easeInOut',type:'spring',stiffness:80}}>
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ndj9fzcd.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
                </motion.div>
            </Header>

            <Arrow className='arrow'  >
                <motion.a
                href='#IDMotive'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1,delay:1}}>
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_pojnro4h.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>    
                </motion.a>
            </Arrow>

        {/* motive */}
        <div id='IDMotive'></div>
        <Motive 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>
            <MotiveHead>
            our Focus
            </MotiveHead>
            <MotiveBody>
            <p>We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.</p>
            </MotiveBody>
            <MotiveBody>
                <p>That said, we conduct two flagship events, namely, DevFest and WomenTechies, and tons of insightful workshops!</p>
            </MotiveBody>
        </Motive>
        {/* events */}
        <div id='IDEvents'></div>
            <EventsWrapper
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}} >

                <EventsHead>
                    <p>upcoming Events</p>
                </EventsHead>
                <EventsBody>
                    <img src={flyer} />
                </EventsBody>

            </EventsWrapper>


        {/* the Team */}
        <div id='IDTeam' ></div>
        <TeamWrapper
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}} >
            <TeamHead>
                <p>Get to Know The Team</p>
            </TeamHead>
            <TeamBody>
                <p>a team filled with</p>
                <br/>
                    <li>caffeine addicted developers</li>
                    <li>gradients loving designers </li> 
                    <li>machine like working managers</li>    
            </TeamBody>
            <motion.button
            className='TeamBtn'
            whileHover={{scale:1.1}}
            whileTap={{scale:1}}
            ><Link to='team'>Team</Link></motion.button>

        </TeamWrapper>

        <ContectUs id='IDcontectUs'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        >
            <hr className='' />
           <Footer/>
        </ContectUs>
        </Master>
        </>
     );
}
 
export default Home;


const Master = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
color: aliceblue;
`
const SideMenu = styled(motion.div)`
z-index: 999;
position: fixed;
height: 100%;
width: 200px;
right: 0;
top: 0;
background: linear-gradient( #222222,#000000) ;

.closeSideBar{
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 20px;
    img{
        height: 30px;
    }
}
.navis{
padding: 20px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 25px;
}

`
const Header = styled(motion.div)`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;

.content-home-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content-home{
    width: 400px;
    margin: 0px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .GdscLogo{
        height: 500px;
        width: auto;
        position: absolute;
        left: -250px;
        top: -140px;
        z-index: -1;
    }

    .Hero-txt{
        backdrop-filter: blur(8px);
        box-shadow: -2px -2px 11px rgba(255, 255, 255, .09),3px 3px 11px rgba(0, 0, 0, .15);
        padding: 10px 20px;
        margin-top: -12px;
        border-radius: 11px;
        border-top: 1px solid #acacac32;
        border-left: 1px solid #acacac32;
        background: linear-gradient(-45deg,rgba(255, 255, 255, 0.089),rgba(255, 255, 255, 0));
    }
}

.anim{
    max-height: 500px;
    height: 35vh;
    width: auto;
    
    @media (min-width: 768px) {
        margin-right: 100px;
    }
}

@media (max-width: 768px) {
    flex-direction: column ;
    margin-top:50px;
    width: 100vw;
}
@media (min-width: 768px) {
    
    .anim{
        height: 500px;
    }

}
`

const Arrow = styled.div`
height: 100px;
width: 100%;
margin-bottom: 100px;

@media (max-width: 768px) {
    margin-top: 100px;
}
`

const Motive = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
margin: 50px;
`
const MotiveHead = styled.div`
`
const MotiveBody = styled.div`
max-width: 50vw;
text-align: center;

@media (max-width: 768px) {
    
    max-width: 100vw;

}
`

const EventsWrapper = styled(motion.div)`
    width: calc(100vw - 100px);
    height: auto;
    margin:50px;
    border: 2px solid #313131;
    border-radius: 11px ;
    overflow: hidden;
`
const EventsHead = styled.div`
    margin: 20px;

`

const EventsBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: aliceblue;
    img{
        width: inherit;
    }

`


const TeamWrapper = styled(motion.div)`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 30px;
margin: 50px;

.TeamBtn{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    font-size: 15px;
    background: linear-gradient(45deg, #05FF3C, #1A800A);
    border: 0px solid;
    color: aliceblue;

}
`

const TeamHead = styled.div``

const TeamBody = styled.div``

const ContectUs = styled(motion.div)`
margin: 0 30px;
.contextUs-TopLine{
    margin: 0 50px;
}

@media (max-width: 768px) {
    flex-direction: column;
    
}


`
