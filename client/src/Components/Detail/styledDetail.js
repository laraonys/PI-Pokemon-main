import styled from "styled-components";
import img from '../resources/homepage2.png'

export const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${img});
flex: auto;
flex-wrap: wrap;
justify-content: center;
background-position: center; // Pone la imagen en el centro de la pantalla
overflow: auto;
width: 1366px;
height: 750px;
background-attachment: fixed; // Hace que no se repita la imagen hacia arriba-abajo
background-size: cover; // Hace que no se repita la imagen para los costados 
`
export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: baseline;
background: transparent;
border: 5px solid #004260;
border-radius: 20px;
height: 60%;
width: 80%;
padding: 1%;
`
export const Img = styled.img`
height: 250px;
padding: 0;
`
export const Name = styled.p`
font-size: 30px;
font-weight: 400;
`

export const BasicInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 30px;
width: 50%;
padding: 0 30px;
margin-top: 10px;
position: relative;
`

export const Stats = styled.div`
font-size: large;
display: flex;
flex-direction: column;
align-items: center;
line-height: 30px;
width: 50%;
padding: 0 30px;
margin-top: 10px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
`

export const AllS = styled.div`
font-size: larger;
font-weight: 600;
`

export const ButtonHom = styled.button`
color: white;      
font-size: medium;
background: #6e67f1;
line-height: 20px;
height: 50px;
width: fit-content;
padding: 0 40px;
margin-top: 20px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
bottom: 0px
`