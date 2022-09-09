import styled from "styled-components";
import MemberCard from "./memberCard";
import MemberCard2 from "./memberCard2";

const Branches = ({Team,memberNames,categories,member0,member1,member2}) => {
    console.log(categories,Team)
    return ( 
        <Wrapper>
        {
            Team && <p> {Team} </p>
        }
        
        {
            !categories ?
            <Master>
            {
                member0 && 
                <MemberCard member={memberNames[0]} image={member0} />
            }
            {
                member1 &&
                <MemberCard member={memberNames[1]} image={member1} />
            }
            {
                member2 &&
                <MemberCard member={memberNames[2]} image={member2} />
            }
        </Master>
        :
        <Master>
             {
                member0 && 
                <MemberCard2 member={memberNames[0]} image={member0} categories={categories[0]} />
            }
            {
                member1 &&
                <MemberCard2 member={memberNames[1]} image={member1} categories={categories[1]} />
            }
            {
                member2 &&
                <MemberCard2 member={memberNames[2]} image={member2} categories={categories[2]} />
            }
        </Master>
        }

        </Wrapper>

     );
}
 
export default Branches;

const Wrapper = styled.div`
width: 720px;
    color: aliceblue;
    margin: 50px;
    p{
        margin: 20px;
    }
display: flex;
flex-direction: column;
@media (max-width: 700px) {
    width: 100%;
}
`
const Master = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
flex-direction: row;
    
@media  (max-width: 700px){
    flex-direction: column;
}
`