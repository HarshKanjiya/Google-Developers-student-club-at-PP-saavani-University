import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import {ReactComponent as GdscLogo} from '../images/logo.svg'

const NavBar = ({tools}) => {  
    const navigator = useNavigate();  
    return ( 
        <>
        <Master>
            <Link to='/'>
            <Home>
                <GdscLogo className="GdscLogo" />
                <PpsuWrapper>
                    <p> P P SAVANI UNIVERSITY</p>
                </PpsuWrapper>
            </Home>
            </Link>
        {
            tools ?
            <Tools>
                <a href="#IDEvents" >Events</a>
                <a href="#IDGallery">Gallery</a>
                <a href="#IDTeam">The Team</a>
                <a href="#IDcontectUs" >Contact us</a>              
            </Tools>
            :
            <Tools>
                <button onClick={() => navigator(-1)}> go back</button>
            </Tools>
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
padding:  10px 0 0 0;
align-items: center;
justify-content: space-between;
overflow-x: hidden;
backdrop-filter: blur(15px);
background-color: rgba(0, 0, 0, 0.055);



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
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: #f0f8ffbc;
    gap: 15px;
    margin: 0 40px;

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
const PpsuWrapper = styled.div`

display: flex;
margin: 0px 47px;
justify-content: start;
margin-top: -8px;
color: #636363;
font-size: 0.8rem;
font-weight: 500;
letter-spacing: 1.5px;
`