import styled from "styled-components";
import Logo from '../images/GDSC PPSU.png'
import linkedIN from '../images/linkedIn_logo.png';
import insta from '../images/instagram_logo.png';
import { motion } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {

    const notify = () => toast.success("copied to clipboard!",{pauseOnHover:false, autoClose:600, progressStyle:{visibility:'hidden'} });
    const copy = () => {
        navigator.clipboard.writeText('gdscppsu@ppsu.ac.in')
        notify()
    }
    

    return ( 
        <Master>
            <div className="img">
                <img src={Logo} className='gdsc' />
            </div>
            <p></p>
            <div className="navigate">
                <p>GDSC PPSU</p>
                <a href="#IDEvents" >Events</a>
                <a href="#IDTeam">The Team</a>
                <a href="#IDcontectUs" >Contact us</a>
            </div>
            <div className="contect">
                <p>Contect</p>
                <div className="contectIN">
                <p>gdscppsu@ppsu.ac.in</p>

                <motion.button 
                whileHover={{scale:1.15,background:'#fff'}}
                whileTap={{scale:1,background:"#cacaca"}}
                onClick={()=>copy()}>COPY</motion.button>
                </div>
                <ToastContainer />
            </div>
            <div className="social">
            <p>Social Media</p>
            <div className="links">
                <a href='https://www.instagram.com/gdscppsu/'>
                    <img src={linkedIN}/>
                </a>
                <a href='https://www.instagram.com/gdscppsu/'>
                    <img src={insta}/>
                </a>
            </div>
            </div>
        </Master>
     );
}
 
export default Footer;

const Master = styled.div`
    margin: 40px 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    color: aliceblue;
    flex-direction: row;
    .img{
       img{
        max-height: 150px;
        width: auto;
       }
    }
    .navigate{
        display: flex;
        flex-direction: column;

        p{
            margin:10px 0;
        }
    }
    .contect{
        display: flex;
        flex-direction: column;

        p{
            margin:10px 0;
        }
        .contectIN{
            height: 34px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            border: 1px solid gray;
            border-radius: 8px;
            padding: 0 0 0 5px;
            justify-content: space-between;
            align-items: center;

            button{
                height: 100%;
                padding: 0 5px;
                border-radius: 0 8px 8px 0;
                border: 0px;
                background-color: #cacaca;

            }
        }
    }
    .social{
        display: flex;
        flex-direction: column;

        p{
            margin:10px 0;
        }

        .links{
            display: flex;
            flex-direction: row;
            gap:10px;
            img{
                height: 35px;
            }
        }
    }
    @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
}

    
`