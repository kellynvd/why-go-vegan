import React from 'react';

const InitialStatement = (props) => {
  if (props.hasReasons) {
    return null;    
  } 
  
  return (
    <div className="container">
      <h2>O veganismo é uma forma de viver que busca excluir, na medida do possível e do praticável, todas as formas de exploração e de crueldade contra animais, seja para a alimentação, para o vestuário ou  para qualquer outra finalidade</h2>
      <small>Definição criada pela The Vegan Society, da Inglaterra, mais antiga entidade vegana do mundo</small>
    </div>
  )
 }

 export default InitialStatement;