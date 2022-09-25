import styled from "styled-components";
import { motion } from "framer-motion";
const MemberCard = ({member,image}) => {

    return ( 
        <>
            <Master
            initial={{x:50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2}}
            >
                <img src={image} alt={member} />
                <p>{member}</p>
            </Master>
        </>
     );
}
 
export default MemberCard;


const Master = styled(motion.div)`
height: 280px;
width: 220px;
background-color: rgba(240, 248, 255, 0.295);
box-shadow: 3px 3px 11px rgba(0, 0, 0, .15);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 11px;
background: linear-gradient(120deg,#ffffff22,rgba(255, 255, 255, 0));
/* margin: 2vh 4vw; */

    img{
        max-height: 250px;
        height: 10rem;
        width: auto;
    }

    p{
        color: aliceblue;
    }

`