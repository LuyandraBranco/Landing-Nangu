import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    display: flex;
    flex-direction:column;
   
`;

export const Header = styled.nav`

    width: 100%;
    height:3rem;
    display: flex;
    margin:0;
    margin-bottom: 15px;

    @media screen and (max-width: 680px) {
        height:10px;
        background:red;
        margin-bottom: 0px;
        
    }
    @media screen and (max-width: 780px) {
        height:8rem;
        
    }

`;

export const Figures = styled.figure`

    width:105px;
    height:30px;
    margin-top:20px;
    background:#909090;

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
        width: 100%;
        height:20rem;
        
    }
    @media screen and (max-width: 780px) {
        width: 60%;
        height:10rem;
        
    }

`;
export const Title = styled.h1`

    text-align:center;
    margin:0;
    margin-bottom: 15px;
    color: #1c1c1e;
    font-weight:600;

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

`;

export const Click = styled.a`

    text-decoration: none;
    color:#fff;

`;

export const Video= styled.section`

    width:70%;
    height:30rem;
    margin:0;
    margin:0 auto;
    background:#909090;
    margin-bottom: 15px;

`;

export const Footer= styled.footer`

    width:50%;
    height:12rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {
        width: 100%;
        height:20rem;
        
    }
    @media screen and (max-width: 780px) {
        width: 60%;
        height:10rem;
        
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

`;
export const Submit= styled.input`

    width:16%;
    border:none;
    background:#4a9eeb;
    color:#fff;
    padding:6px;
    cursor:pointer;

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

`;

 
 
 