import styled from 'styled-components';
import img from '../resources/homepage2.png'

export const Background = styled.div`

display: flex;
background-image: url(${img});
flex: auto;
flex-direction: row;
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

export const Card = styled.span`

background: transparent;
border: 1px solid black;
display: flex;
align-items: center;
flex-direction: column;
justify-content: baseline;
border-radius: 4px;
box-shadow: 2px;
`

export const Name = styled.p`
    width: fit-content;
    height: fit-content;
    font-size: 20px;
    font-weight: 500;

`

export const Image = styled.img`
height: 100px;
`

export const ButtonDet = styled.button`
color: white;      
font-size: small;
background: #6e67f1;
line-height: 20px;
width: fit-content;
padding: 0 20px;
margin-top: 20px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
position: relative;
bottom: 0px
`
