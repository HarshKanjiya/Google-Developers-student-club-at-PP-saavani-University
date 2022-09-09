import styled from 'styled-components'
import { Link } from 'react-router-dom';

import {ReactComponent as GdscLogo} from '../images/logo.svg'
import facebooklogo from '../images/facebook_logo.png';
import instagramlogo from '../images/instagram_logo.png';
import twitterlogo from '../images/youtube_logo.png';
import youtubelogo from '../images/linkedIn_logo.png';
import linkedInklogo from '../images/twitter_logo.png';
import gdscPpsuLogo from '../images/gdsc-ppsu-logo.png';
import NavBar from './navBar';


const Home = () => {
    return ( 
        <>
        <NavBar tools={true} />
        <Master>
            
            {/* hero */}
            <Header>
                <div className='content-home-wrapper'>
                    <div className='content-home'>
                        {/* <GdscLogo className="GdscLogo" /> */}
                        <img src={gdscPpsuLogo} className="GdscLogo" />
                        <br/>
                        <div className='Hero-txt'>
                        <p>At GDSC PPSU,<br/> our aim is to learn and teach.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developers, designers, managers and learners come together under one roof to create a community which inspires thousands.</p>
                        <p>Join Us!</p>
                        </div>
                    </div>
                </div>

                <div className='anim'>
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ndj9fzcd.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
                </div>
            </Header>

            <Arrow className='arrow' >
                <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_pojnro4h.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>    
            </Arrow>

        {/* motive */}

        <Motive>
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
            <EventsWrapper id='IDEvents'>

                <EventsHead>
                    <p>Events</p>
                </EventsHead>
                <EventsBody>
                    <p>No Upcoming Events</p>
                </EventsBody>

            </EventsWrapper>

        {/* leaderboard */}
        <LeaderBoardWrapper>

            <LeaderBoardHead>
                <p>Leaderboard</p>
            </LeaderBoardHead>
            <LeaderBoardbody>
            <p>No Data Uploaded</p>
            </LeaderBoardbody>

        </LeaderBoardWrapper>
            

        {/* Gallery */}
        <GalleryWrapper id='IDGallery'>
            <GalleryHead>
                <p>Gallery</p>
            </GalleryHead>
            <GalleryBody>
                <p>a place where Events transforms into Memories is called Gallery </p>
            </GalleryBody>
            <button className='GalleryBtn'><Link to='gallery'>Gallery</Link></button>
        </GalleryWrapper>


        {/* the Team */}
        <TeamWrapper id='IDTeam' >
            <TeamHead>
                <p>Get to Knnow The Team</p>
            </TeamHead>
            <TeamBody>
                <p>a team filled with</p>
                <br/>
                    <li>caffeine addicted developers</li>
                    <li>gradients loving designers </li> 
                    <li>machine like working managers</li>    
            </TeamBody>
            <button className='TeamBtn'><Link to='team'>Team</Link></button>

        </TeamWrapper>

        <ContectUs id='IDcontectUs'>
            <hr className='contextUs-TopLine' />
            <ContectUsWrapper>
                <ContectUsBody>
                    <ContectUsBodyHead>
                        Contect Us
                    </ContectUsBodyHead>
                    <ContectUsBodyLogos>
                        <img src={ facebooklogo } className='facebookLogo' style={{ height:'50px' }} />
                        <img src={ instagramlogo } className='instagramLogo' style={{ height:'50px' }} />
                        <img src={ linkedInklogo } className='linkedInLogo' style={{ height:'50px' }} />
                        <img src={ youtubelogo } className='linkedInLogo' style={{ height:'50px' }} />
                        <img src={ twitterlogo } className='youtubeLogo' style={{ height:'50px' }} />
                    </ContectUsBodyLogos>
                </ContectUsBody>
                <ContectUsAnim className='ContectUsAnimDiv'>
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_lstnp9p3.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
                </ContectUsAnim>
            </ContectUsWrapper>
        </ContectUs>
        </Master>
        </>
     );
}
 
export default Home;


const Master = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
color: aliceblue;
`
const Header = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-between;
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
        height: 200px;
        width: auto;
        position: absolute;
        left: -100px;
        top: 0px;
        z-index: -1;
    }

    .Hero-txt{
        backdrop-filter: blur(3px);
        padding: 5px 20px;
        margin-top: -12px;
        border-radius: 11px;
        background: linear-gradient(120deg,#ffffff22,rgba(255, 255, 255, 0));
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
`

const Motive = styled.div`
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

const EventsWrapper = styled.div`
    width: calc(100vw - 100px);
    height: auto;
    margin:50px;
    border: 2px solid #313131;
    border-radius: 11px ;

`
const EventsHead = styled.div`
    margin: 20px;

`

const EventsBody = styled.div`
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeaderBoardWrapper = styled.div`
    width: calc(100vw - 100px);
    height: auto;
    margin:50px;
    border: 2px solid #313131;
    border-radius: 11px ;
`
const LeaderBoardHead = styled.div`
    margin: 20px;
 `
const LeaderBoardbody = styled.div`
    min-height: 200px;
    margin: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const GalleryWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 30px;
margin: 50px;

.GalleryBtn{
    height: 40px;
    width: 150px;
    border-radius: 20px;
    font-size: 15px;
    background: linear-gradient(45deg, #3645CC, #FF0000);
    border: 0px solid;
    color: aliceblue;

}
`

const GalleryHead = styled.div`
`

const GalleryBody = styled.div`
`

const TeamWrapper = styled.div`
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

const ContectUs = styled.div`
margin: 50px;


@media (max-width: 768px) {
    flex-direction: column;
}


`

const ContectUsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

@media (max-width:768px) {
    .ContectUsAnimDiv{
        visibility: hidden;
    }
    margin-top: -40px ;
}
`
const ContectUsBody = styled.div`
flex: 1.2;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const ContectUsBodyHead = styled.div`
height: 100%;
width: 100%;
margin-left: 50px;
`
const ContectUsBodyLogos = styled.div`
display: flex;
margin: 40px;
gap: 10px;

.facebookLogo{
    filter: drop-shadow(0 0 11px #348dc48d) ;
}
.instagramLogo{
    filter: drop-shadow(0 0 11px #ff329f88);
}
.linkedInLogo{
    filter: drop-shadow(0 0 11px #23f8ff83);
}
.twitterLogo{
    filter: drop-shadow(0 0 11px #00eeff7a);
}
.youtubeLogo{
    filter: drop-shadow(0 0 11px #ff171781);
}
`
const ContectUsAnim = styled.div`
height: 40vh;
flex:0.8
`