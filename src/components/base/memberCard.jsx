import styled from "styled-components";

const MemberCard = ({member,image}) => {

    console.log('member', member)
    console.log('image', image)
    return ( 
        <>
            <Master>
                <img src={image} alt={member} />
                <p>{member}</p>
            </Master>
        </>
     );
}
 
export default MemberCard;


const Master = styled.div`
height: 280px;
width: 220px;
background-color: rgba(240, 248, 255, 0.295);
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