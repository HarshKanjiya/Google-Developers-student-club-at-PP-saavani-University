import styled from "styled-components";
import Branches from "./base/branches";
import NavBar from "./navBar";
import { motion } from "framer-motion";

import anchalRajput from '../images-members/anchal rajput.png' 
import anuragBhanderi from '../images-members/anurag bhanderi.png'
import ashmsChettiveetil from '../images-members/ashms chettiveetil.png'
import dhavalGhinaiya from '../images-members/dhaval ghinaiya.png'
import dimpyKathvani from '../images-members/dimpy kathvani.png'
import harshBhanderi from '../images-members/harsh bhanderi.png'
import harshPandya from '../images-members/harsh pandya.png'
import harshKanjiya from '../images-members/harsh kanjiya.png'
import harshiddhSavani from '../images-members/harshiddh savani.png'
import henilPatel from '../images-members/henil patel.png'
import ibrahimKani from '../images-members/ibrahim mahmud kani.png'
import janviSheta from '../images-members/janvi sheta.png'
import jayThakkr from '../images-members/jay thakkr.png'
import jenishLad from '../images-members/jenish lad.png'
import jilsVaghasiya from '../images-members/jils vaghasiya.png'
import kishanPrajapati from '../images-members/kishan prajapati.png'
import mannSavani from '../images-members/mann savani.png'
import rohanTank from '../images-members/rohan tank.png'
import ronakRamoliya from '../images-members/ronak ramoliya.png'
import savanGangani from '../images-members/savan gangani.png'
import shubhamKothiya from '../images-members/shubham kothiya.png'
import vivekVasoya from '../images-members/vivek vasoya.png'
import yashBhadiyadra from '../images-members/yash bhadiyadra.png'
import vivekMunjani from '../images-members/vinit munjani.png'

const TeamPage = () => {
    return ( 
        <>
        <NavBar />
        <Master
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.7,delay:.4}}
        >

        <input type='button' autoFocus/>
            <Branches 
                Team='Team Leader' 
                memberNames = {['Shubham Kothiya']}
                member0={ shubhamKothiya } 
                />
            <Branches 
                Team='Core Team' 
                memberNames = {['Mann Savani','Anchal Rajput','Yash Bhadiyadra']}
                categories = {['Event Lead','Non-Tech Lead','Tech Lead']}
                member0={ mannSavani } 
                member1={ anchalRajput } 
                member2={ yashBhadiyadra } 
                />
            <Branches 
                Team='web Development' 
                memberNames = {['vivek Vasoya','harsh Kanjiya','ronak Ramoliya']}
                member0={ vivekVasoya } 
                member1={ harshKanjiya } 
                member2={ ronakRamoliya } 
                />
            <Branches 
                Team='App Development' 
                memberNames = {['Anurag Bhanderi','Harsh Bhanderi','Savan Gangani']}
                member0={ anuragBhanderi } 
                member1={ harshBhanderi } 
                member2={ savanGangani } 
                />
            <Branches 
                Team='Machine Learning' 
                memberNames = {['Janvi sheta','Jay Thakkar']}
                member0={ janviSheta } 
                member1={ jayThakkr } 
                />

            <Branches 
                Team='Cyber Security' 
                memberNames = {['Harsh Pandya','Ibrahim Mahmud Kani']}
                member0={ harshPandya } 
                member1={ ibrahimKani } 
                />

            <Branches 
                Team='Cloud Engineering' 
                memberNames = {['Jils Vaghasiya','Dhaval Ghinaiya']}
                member0={ jilsVaghasiya } 
                member1={ dhavalGhinaiya } 
                />
            <Branches 
                Team='competitive Coding' 
                memberNames = {['kishan Prajapati']}
                member0={ kishanPrajapati } 
                />
            <Branches
                Team='Non Technical Members'
                memberNames = {['Ashmas Chettiveettil','jenish Lad','Harshiddh Savani',]}
                categories = {['Volunteer Head','Graphics Design','Finence manager']}
                member0={ ashmsChettiveetil } 
                member1={ jenishLad } 
                member2={ harshiddhSavani } 
            />
            <Branches
                Team = {false}
                memberNames = {['Henil Patel','Vinit Munjani','Rohan Tank',]}
                categories = {['Social Media','Video Editor','Photographer']}
                member0={ henilPatel } 
                member1={ vivekMunjani } 
                member2={ rohanTank } 
            />
            <Branches
            Team = {false}
            memberNames = {['Dimpy Kathvani']}
            categories = {['Content Creator']}
            member0 = { dimpyKathvani }
            /> 
            

        <div style={{ height:'50px' , color:'#111111'}} >.</div>

        </Master>
        </>
     );
}
 
export default TeamPage;


const Master = styled(motion.div)`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
input{
    height: 20px;
    width: 20px;
    background-color: rgba(0,0,0,0);
    opacity: 0;
}
`