import React from "react";
import {Buttons, Nav} from './styledPag'

export default function Pagination ({pokemonsPerPage, allPokemons, paginate, currentPage}) {
   const pageNumbers = []
      for (let i = 0 ; i < Math.ceil(allPokemons/pokemonsPerPage) ; i++) pageNumbers.push(i+1); 
   
   return (      
      <Nav>
         <b>
         <Buttons onClick={() => (currentPage - 1) > 0 ? paginate(currentPage-1):null}>Prev</Buttons>
         </b>
            <b>
                  {
                     pageNumbers && pageNumbers.map(element => (
                        <b key={element}  >
                        <Buttons onClick= {() => paginate(element)} >{element}</Buttons>
                        </b>
                     ))
                  }
         </b>
         <b>
         <Buttons onClick={() => (currentPage) < pageNumbers.length ? paginate(currentPage+1):null}>Next</Buttons>
         </b>
      </Nav>
               
   )
}