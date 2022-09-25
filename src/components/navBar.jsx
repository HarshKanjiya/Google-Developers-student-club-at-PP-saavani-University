import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import GdscLogo from '../images/gdscLogo.png'
import Menu from '../images/menu.png'
const NavBar = ({tools, sideBar, setSidebar }) => {  
    const navigator = useNavigate();  
    return ( 
        <>
        <Master>
            <Link to='/'>
            <Home>
                {/* <GdscLogo className="GdscLogo" /> */}
                <LogoWrapper >
                    <img  src={GdscLogo} style={{height:40}} />
                </LogoWrapper>
            </Home>
            </Link>
        {
            tools ?
            
            <Tools>
                <a href="#IDEvents" >Events</a>
                <a href="#IDTeam">The Team</a>
                <a href="#IDcontectUs" >Contact us</a>              
            </Tools>
            :
            <Tools>
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:1}}
                onClick={() => navigator(-1)}> go back</motion.button>
            </Tools>
        }
        {
            sideBar &&
            <SideBar onClick={()=> setSidebar(true) } >
                <img src={Menu}/>
            </SideBar>
        }
        </Master>
        </>
     );
}            
export default NavBar;





const Master = styled.div`
position: fixed;
z-index: 99;
height: fit-content;
width: 100%;
display: flex;
padding:  10px ;
align-items: center;
justify-content: space-between;
overflow-x: hidden;
backdrop-filter: blur(15px);
background-color: rgba(0, 0, 0, 0.055);
overflow: hidden;



`

const Home = styled.div`
cursor: pointer;
.GdscLogo{
    height: 20px;
    width: auto;
}
margin: 0 10px;

`

const Tools = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: row;
    color: #f0f8ffbc;
    gap: 35px;
    margin: 0 40px;
    width: 100%;
a{
    text-decoration: none;
    color: aliceblue;
}

@media (max-width: 768px) {
    visibility: hidden;
}

button {
    height: 40px;
    width: 150px;
    border-radius: 20px;
    font-size: 15px;
    background: linear-gradient(45deg, #ec9819, #ff0000);
    border: 0px solid;
    color: aliceblue;
  }

`
const LogoWrapper = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin: 0;
`
const SideBar = styled.div`
position: absolute;
right:30px;

@media (min-width: 768px) {
    visibility: hidden;
}
img{
    height: 30px;
    width: auto;
}
`