import styled from "styled-components";
import NavBar from "./navBar";

const GalleryPage = () => {
    return ( 
    <>
    <NavBar/>
    <Master>
      <p>No event has been Registered !</p>  
    </Master>
    </>
    );
}
 
export default GalleryPage;

const Master = styled.div`
    height: 90vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
`