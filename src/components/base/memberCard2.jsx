import styled from "styled-components";
import { motion } from "framer-motion";

const MemberCard2 = ({member,image,categories}) => {

    return ( 
        <>
            <Master
            initial={{x:50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.2}}>
                <p> {categories} </p>
                <img src={image} alt={member} />
                <p className="member-text" >{member}</p>
            </Master>
        </>
     );
}
 
export default MemberCard2;


const Master = styled(motion.div)`
height: 280px;
width: 220px;
border-radius: 11px;
background: linear-gradient(120deg,#ffffff22,rgba(255, 255, 255, 0));
display: flex;
justify-content: center;
box-shadow: 3px 3px 11px rgba(0, 0, 0, .15);
align-items: center;
flex-direction: column;
color: aliceblue;

/* margin: 2vh 4vw; */

    img{
        max-height: 250px;
        height: 10rem;
        width: auto;
    }

    p{
        overflow: hidden;
    }
    .member-text{

    }

`