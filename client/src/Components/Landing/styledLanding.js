import styled from "styled-components";
import img from '../resources/landingimg3.png'


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


export const Button = styled.button`
color: white;      
font-size: medium;
background: #6e67f1;
line-height: 60px;
width: fit-content;
padding: 0 40px;
margin-top: 20px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
:link {
    color: black,
}
position: relative;
bottom: 0px
`
























































//Back
/* display: inline-flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-position: center;
overflow: auto;
width: 1366px;
height: 750px;
background-position: center;
background-attachment: fixed;
background-image: url(${img});
background-size: cover;
bottom: 10px; */

// Button:
/* color: white;      
font-size: medium;
background: #6e67f1;
line-height: 60px;
width: fit-content;
padding: 0 40px;
margin-top: 20px;
box-shadow: 0 5px 20px 3px rgba(0, 0, 0, 0.6);
border: 3px solid #004260;
border-radius: 40px;
box-sizing: border-box;
:link {
    color: black,
}
position: relative;
bottom: 0px; */