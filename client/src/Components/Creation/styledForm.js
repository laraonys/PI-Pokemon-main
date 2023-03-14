import styled from 'styled-components';
import img from '../resources/homepage2.png'

export const Background = styled.div`
display: flex;
background-image: url(${img});
flex: auto;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-position: center; // Pone la imagen en el centro de la pantalla
overflow: auto;
width: 1366px;
height: 750px;
background-attachment: fixed; // Hace que no se repita la imagen hacia arriba-abajo
background-size: cover; // Hace que no se repita la imagen para los costados 

`
export const Title = styled.div`
color: black;
font-weight: 800;
font-size: larger;
`

export const MediumTxt = styled.div`
color: black;
font-weight: 500;
font-size: larger;
`

export const NameMesssage = styled.p`
font-size: small;
`

export const Messsage = styled.span`
font-size: small;
`
export const BasicInfo = styled.div`
line-height: 30px;
width: fit-content;
padding: 0 30px;
margin-top: 10px;
position: relative;
`

export const AllStats = styled.div`
line-height: 30px;
width: fit-content;
padding: 0 30px;
margin-top: 10px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
`

export const Options = styled.option`
color: white;      
font-size: medium;
background: #6e67f1;
line-height: 50px;
width: fit-content;
padding: 0 30px;
margin-top: 10px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
bottom: 0px
`

export const ButtonSub = styled.button`
color: white;      
font-size: medium;
background: #6e67f1;
line-height: 50px;
width: fit-content;
padding: 0 30px;
margin-top: 10px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
bottom: 0px
`

export const ButtonTypes = styled.button`
color: white;      
font-size: medium;
background: #6e67f1;
line-height: 30px;
width: fit-content;
padding: 0 10px;
margin-top: 10px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
bottom: 0px
`

