import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height:100%;
    display: flex;
    flex-direction:column;
   
`;

export const Header = styled.nav`

    width: 100%;
    height:3rem;
    margin:0;
    margin-bottom: 15px;
    display:flex;
    flex-direction: column;

    @media screen and (max-width: 680px) {
        height:4rem;
        
    }
    @media screen and (max-width: 780px) {
        height:5rem;
        
    }

`;

export const Figures = styled.figure`

    width:105px;
    height:30px;
    margin-top:20px;

`;

export const Logo = styled.img`

    width:100%;
    height:100%;
    object-fit:cover;

`;

export const Area = styled.section`

    width: 100%;
    height:11rem;
    display: flex;
    flex-direction:column;
    margin-bottom: 15px;

    @media screen and (max-width: 680px) {
        height:14rem;
        margin:0;
        
    }
    @media screen and (max-width: 780px) {
        
        
    }


`;

export const TextArea = styled.div`

    width: 28%;
    height:11rem;
    margin:0;
    margin:0 auto;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {

        width:100%;
        
    }
    @media screen and (max-width: 780px) {
        
        
    }

`;
export const Title = styled.h1`

    text-align:center;
    margin:0;
    margin-bottom: 15px;
    color: #1c1c1e;
    font-weight:600;

    @media screen and (max-width: 680px) {
        font-size: 1.3rem; 
    }
    @media screen and (max-width: 780px) {
        
    }

`;
export const Description = styled.p`

    text-align:center;
    margin:0;
    margin-bottom: 15px;
    color:#909090;

`;

export const Button = styled.button`

    width:38%;
    background:#4a9eeb;
    border:none;
    margin-bottom: 15px;
    border-radius:7px;
    padding: 9px;
    cursor:pointer;

    @media screen and (max-width: 680px) {
       
    }
    @media screen and (max-width: 900px) {
        width:55%;
    }
    

`;

export const Click = styled.a`

    text-decoration: none;
    color:#fff;

`;

export const Video= styled.section`

    width:70%;
    height:30rem;
    display:flex;
    margin:0;
    margin:0 auto;
    background: url('./images/karting.jpg');
    background-size:cover;
    margin-bottom: 15px;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {
        width:100%;
        height:15rem;
        
    }

`;
export const LinkVideo= styled.a`

    text-decoration:none;
    color:#fff;
    font-size:90px;

    @media screen and (max-width: 680px) {
        font-size:50px;
    }
    @media screen and (max-width: 780px) {
        font-size:60px;
    }

`;
export const Footer= styled.footer`

    width:100%;
    height:17rem;
    display: flex;
    flex-direction:column;

    @media screen and (max-width: 680px) {
        
        height:17rem;
        
    }
    @media screen and (max-width: 780px) {
    
        
    }


`;

export const TextFooter= styled.div`

    width:50%;
    height:12rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {

        width:100%;
        height:20rem;
        
    }

`;

export const TitleNews= styled.h2`
    
    text-align:center;
    margin:0;
    margin-bottom: 15px;
    color: #1c1c1e;    
    font-size: 16px;

`;

export const DescriptionNews= styled.p`

    text-align:center;
    margin:0;
    margin-bottom: 15px;
    font-size: 14px;
    color:#909090;
    
`;

export const Input= styled.input`

    margin-right:0.5rem;
    width:35%;
    padding:4px;

    @media screen and (max-width: 680px) {
        width:60%;
        
    }

`;
export const Submit= styled.input`

    width:16%;
    border:none;
    background:#4a9eeb;
    color:#fff;
    padding:6px;
    cursor:pointer;

    @media screen and (max-width: 680px) {
        width:30%;
        
    }
    @media screen and (max-width: 780px) {
        width:30%;
        
    }

`;

export const Sign= styled.section`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;


`;
export const Media= styled.section`

    margin-top:20px;
`;

export const Link= styled.a`

    text-decoration:none;
    color:#4a9eeb;
    font-size:1.8rem;
    text-align:center;
    margin-right: 1.5rem;

    @media screen and (max-width: 680px) {
        font-size:1.2rem;
        margin-right: 1rem;
        
    }

`;

 
 
 