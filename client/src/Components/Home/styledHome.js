import styled from 'styled-components';
import img from '../resources/homepage.png';


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
