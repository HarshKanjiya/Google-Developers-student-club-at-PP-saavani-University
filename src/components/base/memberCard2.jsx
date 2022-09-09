import styled from "styled-components";

const MemberCard2 = ({member,image,categories}) => {

    console.log('member', member)
    console.log('image', image)
    return ( 
        <>
            <Master>
                <p> {categories} </p>
                <img src={image} alt={member} />
                <p className="member-text" >{member}</p>
            </Master>
        </>
     );
}
 
export default MemberCard2;


const Master = styled.div`
height: 280px;
width: 220px;
border-radius: 11px;
background: linear-gradient(120deg,#ffffff22,rgba(255, 255, 255, 0));
display: flex;
justify-content: center;
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
    }
    .member-text{

    }

`